import { NextResponse } from "next/server";
import { salesData } from "@/data/salesData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");

  if (year) {
    const filtered = salesData.filter(
      (item) => item.year === Number(year)
    );
    return NextResponse.json(filtered);
  }

  return NextResponse.json(salesData);
}
