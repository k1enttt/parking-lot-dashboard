import { SupabaseClient } from "@supabase/supabase-js";

export async function getAllCarSlots(supabase: SupabaseClient) {
  return (await supabase.from("CarSlot").select()).data;
}

export async function getCarSlotById(supabase: SupabaseClient, id: number) {
  return (await supabase.from("CarSlot").select().eq("id", id)).data;
}

export async function updateCarSlotIsEmpty(supabase: SupabaseClient, id: number, isEmpty: boolean) {
  return (await supabase.from("CarSlot").update({ isEmpty }).eq("id", id)).data;
}