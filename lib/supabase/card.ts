import { SupabaseClient } from "@supabase/supabase-js";

export async function getAllCards(supabase: SupabaseClient) {
  return (await supabase.from("Card").select()).data;
}

export async function getCardByCode(supabase: SupabaseClient, code: string) {
  return (await supabase.from("Card").select().eq("code", code)).data;
}