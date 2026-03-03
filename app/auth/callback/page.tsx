"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();
  const exchanged = useRef(false);

  useEffect(() => {
    if (exchanged.current) return;
    exchanged.current = true;

    const code = new URLSearchParams(window.location.search).get("code");
    if (!code) {
      router.replace("/");
      return;
    }

    const supabase = createClient();
    supabase.auth
      .exchangeCodeForSession(code)
      .then(({ error }) => {
        if (error) {
          console.error("exchangeCodeForSession failed:", error.message);
          return;
        }
        const redirectAfterLogin = sessionStorage.getItem("redirectAfterLogin");
        if (redirectAfterLogin) {
          sessionStorage.removeItem("redirectAfterLogin");
          router.replace(redirectAfterLogin);
          return;
        }
        router.replace("/");
      })
      .catch((err) => {
        console.error("exchangeCodeForSession threw:", err);
      });
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center">
      <p className="text-gray-400">Signing you in...</p>
    </div>
  );
}
