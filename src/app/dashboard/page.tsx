"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/templates/DashboardLayout";
import SalesChart from "@/components/organisms/SalesChart";
import SalesFilter from "@/components/organisms/SalesFilter";
import Button from "@/components/atoms/Button";
import { SalesRecord } from "@/types/sales";
import { ChartType } from "@/types/chart";

export default function DashboardPage() {
  const [year, setYear] = useState<2022 | 2023 | 2024>(2024);
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [data, setData] = useState<SalesRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/sales?year=${year}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [year]);

  return (
    <DashboardLayout title={`Sales Dashboard – ${year}`}>
      <div className="grid gap-6">
        <SalesFilter year={year} onYearChange={setYear} />

        <div className="flex flex-wrap gap-3">
          <Button label="Bar" onClick={() => setChartType("bar")} />
          <Button label="Line" onClick={() => setChartType("line")} />
          <Button label="Pie" onClick={() => setChartType("pie")} />
        </div>

        {loading ? (
          <p className="text-slate-400">Loading sales data...</p>
        ) : (
          <SalesChart data={data} chartType={chartType} />
        )}
      </div>
    </DashboardLayout>
  );
}
