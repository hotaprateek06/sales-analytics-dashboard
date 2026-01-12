import { NextResponse } from "next/server";
import { salesData } from "@/data/salesData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const year = searchParams.get("year");
  const minSales = searchParams.get("minSales");

  let result = salesData;

  if (year) {
    result = result.filter(
      (item) => item.year === Number(year)
    );
  }

  if (minSales) {
    result = result.filter(
      (item) => item.sales >= Number(minSales)
    );
  }

  return NextResponse.json(result);
}
