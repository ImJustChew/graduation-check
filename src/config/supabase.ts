import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "");

export type Waiver = Database["public"]["Tables"]["waivers"]["Row"];
export type User = Database["public"]["Tables"]["users"]["Row"];

export default supabase;