"use client";

import { useState } from "react";
import DashboardLayout from "@/components/templates/DashboardLayout";
import SalesChart from "@/components/organisms/SalesChart";
import SalesFilter from "@/components/organisms/SalesFilter";
import Button from "@/components/atoms/Button";

import { salesData } from "@/data/salesData";
import { filterSalesByYear } from "@/utils/filterSalesByYear";
import { ChartType } from "@/types/chart";

export default function DashboardPage() {
  const [year, setYear] = useState<2022 | 2023 | 2024>(2024);
  const [chartType, setChartType] = useState<ChartType>("bar");

  const yearlyData = filterSalesByYear(salesData, year);

  return (
    <DashboardLayout title={`Sales Dashboard – ${year}`}>
      <div className="grid gap-6">
        <SalesFilter year={year} onYearChange={setYear} />

        <div className="flex flex-wrap gap-3">
          <Button label="Bar" onClick={() => setChartType("bar")} />
          <Button label="Line" onClick={() => setChartType("line")} />
          <Button label="Pie" onClick={() => setChartType("pie")} />
        </div>

        <SalesChart data={yearlyData} chartType={chartType} />
      </div>
    </DashboardLayout>
  );
}
