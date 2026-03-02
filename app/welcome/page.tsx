"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import ConstellationBackground from "@/app/components/ConstellationBackground";
import { createClient } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

export default function WelcomePage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        router.push("/signin");
      }
    });
  }, [router]);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ConstellationBackground />
      <div className="relative z-[1] min-h-screen flex flex-col items-center justify-center px-6">
        <Navbar />

        <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto pt-40">
          <Link href="/" className="flex items-center gap-2 mb-16 hover:opacity-90 transition-opacity">
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

          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            You&apos;re on the list.
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            We&apos;ll be in touch as Avera becomes available for your network.
          </p>
          {user?.email && (
            <p className="text-[#7D95E0] text-sm mb-8">
              Signed in as {user.email}
            </p>
          )}
          <button
            onClick={handleSignOut}
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
