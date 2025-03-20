import { NextResponse } from "next/server";

export async function GET(request: Request, params: Promise<{ code: string }>) {
  const { code } = await params;
  console.log(code); // chưa lấy được [code] trên url

  if (!code) {
    return NextResponse.json(
      { error: "Code parameter is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/Card`,
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch card");
    }

    const card = await response.json();
    return NextResponse.json({ card });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch card" },
      { status: 500 }
    );
  }
}
