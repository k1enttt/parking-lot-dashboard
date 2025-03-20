import CardTable from "@/components/CardTable";
import CarSlotTable from "@/components/CarSlotTable";
import { getAllCards, getCardByCode } from "@/lib/supabase/card";
import { getAllCarSlots, getCarSlotById, updateCarSlotIsEmpty } from "@/lib/supabase/carSlot";
import { Card, CarSlot } from "@/schemas";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const cards = await getAllCards(supabase) as Card[];
  const cardKien = await getCardByCode(supabase, 'kien123')
  const carSlots = await getAllCarSlots(supabase) as CarSlot[];
  const carSlot = await getCarSlotById(supabase, 1)
  const update = await updateCarSlotIsEmpty(supabase, 1, true)


  return (
    <div className="flex items-start justify-center gap-10">
      <pre>{JSON.stringify(carSlots, null, 2)}</pre>
      <CardTable data={cards} />
      <CarSlotTable data={carSlots} />
    </div>
  );
}
