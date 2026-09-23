import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/aura/auth-page";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create an Account — AURA EATS" },
      { name: "description", content: "Join AURA EATS for a more personal culinary experience." },
      { property: "og:title", content: "Create an Account — AURA EATS" },
      { property: "og:description", content: "Create your AURA EATS demo account and return to the table." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <AuthPage mode="signup" />,
});