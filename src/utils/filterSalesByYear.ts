import { SalesRecord } from "@/types/sales";

export function filterSalesByYear(
  data: SalesRecord[],
  year: SalesRecord["year"]
) {
  return data.filter((item) => item.year === year);
}
