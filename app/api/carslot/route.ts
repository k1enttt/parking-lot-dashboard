import { NextResponse } from 'next/server';

export async function GET() {
  let carSlots;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/CarSlot`, {
      headers: {
        'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
      }
    });
    carSlots = await response.json();
    return NextResponse.json({ carSlots });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch car slots' });
  }
}