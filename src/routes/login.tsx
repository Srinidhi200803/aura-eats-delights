import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/aura/auth-page";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In — AURA EATS" },
      { name: "description", content: "Sign in to continue your AURA EATS culinary journey." },
      { property: "og:title", content: "Sign In — AURA EATS" },
      { property: "og:description", content: "Return to the AURA EATS table for curated favorites and handcrafted flavors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <AuthPage mode="login" />,
});