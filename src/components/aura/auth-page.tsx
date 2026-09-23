import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { motion, MotionConfig } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail, UserRound, UtensilsCrossed } from "lucide-react";
import { toast } from "sonner";

import heroImage from "@/assets/aura-hero.jpg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

type AuthMode = "login" | "signup";
type AuthField = "name" | "email" | "password" | "confirmPassword";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function AuthPage({ mode }: { mode: AuthMode }) {
  const navigate = useNavigate();
  const isSignup = mode === "signup";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<AuthField, string>>>({});
  const [signupComplete, setSignupComplete] = useState(false);

  function validate(): boolean {
    const nextErrors: Partial<Record<AuthField, string>> = {};
    if (isSignup && !name.trim()) nextErrors.name = "Please enter your full name.";
    if (!email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!emailPattern.test(email.trim())) nextErrors.email = "Enter a valid email address.";
    if (!password) nextErrors.password = "Please enter a password.";
    else if (isSignup && password.length < 8) nextErrors.password = "Use at least 8 characters for your password.";
    if (isSignup && !confirmPassword) nextErrors.confirmPassword = "Please confirm your password.";
    else if (isSignup && password !== confirmPassword) nextErrors.confirmPassword = "Those passwords don't match yet.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    if (isSignup) {
      setSignupComplete(true);
      toast.success("Demo sign-up complete", { description: "No account details were saved." });
      return;
    }
    toast.success("Demo sign-in successful", { description: "This demo does not create a real account session." });
    void navigate({ to: "/" });
  }

  function updateField(field: AuthField, value: string) {
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    if (field === "confirmPassword") setConfirmPassword(value);
  }

  const fieldClass = "h-12 rounded-md border-glass-border bg-background/45 pl-11 pr-11 text-sm shadow-none transition-colors duration-200 hover:border-primary/40 focus-visible:bg-background/65";

  return (
    <MotionConfig reducedMotion="user">
      <main className="auth-page-bg relative flex min-h-dvh flex-col overflow-hidden px-4 py-5 text-foreground sm:px-8 sm:py-7">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true">
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2.5 rounded-sm text-primary transition-opacity hover:opacity-80" aria-label="AURA EATS home">
            <span className="grid size-9 place-items-center rounded-md border border-primary/30 bg-primary/10"><UtensilsCrossed className="size-4" /></span>
            <span className="font-display text-xl sm:text-2xl">AURA EATS</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm">
            <ArrowLeft className="size-4" /> Back to menu
          </Link>
        </header>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center justify-center py-7 sm:py-10">
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="grid w-full overflow-hidden rounded-lg border border-glass-border bg-nav/75 shadow-card backdrop-blur-xl lg:min-h-[650px] lg:grid-cols-[0.92fr_1.08fr]"
            aria-label={isSignup ? "Create an AURA EATS demo account" : "Sign in to AURA EATS"}
          >
            <div className="relative hidden min-h-full overflow-hidden border-r border-glass-border lg:block">
              <img src={heroImage} alt="A beautifully arranged AURA EATS meal" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-promo-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-10 xl:p-12">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">A table worth returning to</p>
                <p className="max-w-sm font-display text-5xl leading-[1.02] text-foreground">A little something <span className="italic text-primary">extraordinary.</span></p>
                <p className="mt-4 max-w-sm text-sm leading-6 text-soft">Handpicked flavors, thoughtful craft, and a seat saved just for you.</p>
              </div>
            </div>

            <div className="flex items-center justify-center px-5 py-8 sm:px-10 sm:py-11 lg:px-12 xl:px-16">
              <div className="w-full max-w-md animate-auth-in">
                <div className="mb-7 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.19em] text-primary">
                  <span className="h-px w-7 bg-primary/65" /> AURA EATS · MEMBER ACCESS
                </div>
                <h1 className="text-5xl leading-none text-foreground sm:text-6xl">{isSignup ? "Join the table." : "Welcome back"}</h1>
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                  {isSignup ? "Create your account for a more personal dining experience." : "Sign in to continue your culinary journey."}
                </p>

                {signupComplete ? (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-8 border border-glass-border bg-glass/50 p-5">
                    <p className="font-display text-2xl text-primary">Your demo is ready.</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">No account was created and no information was saved. This experience is only a frontend demo.</p>
                    <Button asChild className="mt-5 w-full"><Link to="/login">Continue to sign in</Link></Button>
                  </motion.div>
                ) : (
                  <form className="mt-7 space-y-4" noValidate onSubmit={handleSubmit}>
                    {isSignup && (
                      <Field label="Full name" id="full-name" error={errors.name}>
                        <UserRound className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <Input id="full-name" name="name" autoComplete="name" placeholder="Your name" value={name} onChange={(event) => updateField("name", event.target.value)} className={fieldClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "full-name-error" : undefined} />
                      </Field>
                    )}

                    <Field label="Email address" id="email-address" error={errors.email}>
                      <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input id="email-address" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => updateField("email", event.target.value)} className={fieldClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-address-error" : undefined} />
                    </Field>

                    <Field label="Password" id="password" error={errors.password}>
                      <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete={isSignup ? "new-password" : "current-password"} placeholder={isSignup ? "At least 8 characters" : "Enter your password"} value={password} onChange={(event) => updateField("password", event.target.value)} className={fieldClass} aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "password-error" : undefined} />
                      <button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" aria-label={showPassword ? "Hide password" : "Show password"}>
                        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                      </button>
                    </Field>

                    {isSignup && (
                      <Field label="Confirm password" id="confirm-password" error={errors.confirmPassword}>
                        <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <Input id="confirm-password" name="confirmPassword" type={showConfirmation ? "text" : "password"} autoComplete="new-password" placeholder="Re-enter your password" value={confirmPassword} onChange={(event) => updateField("confirmPassword", event.target.value)} className={fieldClass} aria-invalid={Boolean(errors.confirmPassword)} aria-describedby={errors.confirmPassword ? "confirm-password-error" : undefined} />
                        <button type="button" onClick={() => setShowConfirmation((visible) => !visible)} className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" aria-label={showConfirmation ? "Hide confirmation password" : "Show confirmation password"}>
                          {showConfirmation ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                        </button>
                      </Field>
                    )}

                    {!isSignup && (
                      <div className="flex items-center justify-between gap-3 pt-0.5 text-xs sm:text-sm">
                        <label className="flex cursor-pointer items-center gap-2.5 text-muted-foreground" htmlFor="remember-me">
                          <Checkbox id="remember-me" checked={remember} onCheckedChange={(checked) => setRemember(checked === true)} />
                          Remember me
                        </label>
                        <button type="button" onClick={() => toast("Password recovery isn't connected in this demo.")} className="text-primary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">Forgot password?</button>
                      </div>
                    )}

                    <Button type="submit" size="lg" className="mt-2 w-full justify-center text-sm">
                      {isSignup ? "Create Account" : "Sign In"}
                    </Button>

                    {!isSignup && (
                      <>
                        <div className="flex items-center gap-4 py-0.5" aria-label="Or continue with another option">
                          <span className="h-px flex-1 bg-border" />
                          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">OR</span>
                          <span className="h-px flex-1 bg-border" />
                        </div>
                        <Button type="button" variant="outline" className="h-12 w-full" onClick={() => toast("Google sign-in isn't connected in this demo.")}>
                          <GoogleMark /> Continue with Google
                        </Button>
                      </>
                    )}

                    <p className="pt-1 text-center text-xs leading-5 text-muted-foreground sm:text-sm">
                      {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                      <Link to={isSignup ? "/login" : "/signup"} className="font-semibold text-primary transition-colors hover:text-foreground">
                        {isSignup ? "Sign in" : "Create one"}
                      </Link>
                    </p>
                    <p className="text-center text-[10px] leading-4 text-muted-foreground/80">Demo only · No real account or sign-in security is provided</p>
                  </form>
                )}
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </MotionConfig>
  );
}

function Field({ label, id, error, children }: { label: string; id: string; error: string | undefined; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-medium text-soft">{label}</label>
      <div className="relative">{children}</div>
      {error && <p id={`${id}-error`} className="text-xs text-coral" role="alert">{error}</p>}
    </div>
  );
}

function GoogleMark() {
  return <span aria-hidden="true" className="grid size-4 place-items-center rounded-full border border-border text-[11px] font-bold text-foreground">G</span>;
}