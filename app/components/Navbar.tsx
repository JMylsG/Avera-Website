"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Session } from "@supabase/supabase-js";

const NAV_LINKS = [
  { href: "/product", label: "Product" },
  { href: "/why-avera", label: "Why Avera" },
  { href: "/pricing", label: "Pricing" },
  { href: "/timeline", label: "Timeline" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const initSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (mounted) {
        setSession(data.session);
        setLoading(false);
      }
    };

    initSession();

    const { data: { subscription } } =
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-white/5">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
        <Image
          src="/avera-logo.png"
          alt="Avera"
          width={48}
          height={48}
          className="object-contain"
        />
        <span className="font-logo text-white font-semibold text-xl tracking-[0.15em] uppercase">
          AVERA
        </span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <a
              key={href}
              href={href}
              className={`text-sm transition-colors pb-0.5 ${
                isActive
                  ? "text-white border-b border-[#7D95E0]"
                  : "text-gray-400 hover:text-white"
              }`}
              style={
                isActive
                  ? { textShadow: "0 0 12px rgba(125, 149, 224, 0.8)" }
                  : undefined
              }
            >
              {label}
            </a>
          );
        })}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-6">
        {session ? (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold bg-[#315798]">
              {session.user.email?.[0]?.toUpperCase() ?? "?"}
            </div>
            <button
              onClick={handleSignOut}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <a
              href="/signin"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Sign In
            </a>
            <a
              href="/signin"
              className="bg-[#315798] hover:bg-[#7D95E0] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-300"
            >
              Sign Up
            </a>
          </>
        )}
      </div>

    </nav>
  );
}