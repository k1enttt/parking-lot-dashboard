import { NextResponse } from 'next/server';

export async function GET() {
  let cards
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/Card`, {
      headers: {
        'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
      }
    });
    cards = await response.json();
    return Response.json({ cards })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch cards' });
  }
}