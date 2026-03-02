import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl) throw new Error("NEXT_PUBLIC_SUPABASE_URL is required");
if (!supabasePublishableKey) throw new Error("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY is required");

export const supabase = createSupabaseClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    flowType: "pkce",
    persistSession: true,
    storageKey: "avera-auth",
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});

export function createClient() {
  return supabase;
}
