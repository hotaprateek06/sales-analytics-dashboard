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
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [data, setData] = useState<SalesRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    const params = new URLSearchParams({
      year: year.toString(),
      minSales: threshold.toString(),
    });

    fetch(`/api/sales?${params}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [year, threshold]);

  const handleReset = () => {
    setYear(2024);
    setThreshold(0);
    setChartType("bar");
  };

  return (
    <DashboardLayout title={`Sales Dashboard – ${year}`}>
      <div className="grid gap-6">
        <SalesFilter
          year={year}
          threshold={threshold}
          onYearChange={setYear}
          onThresholdChange={setThreshold}
          onReset={handleReset}
        />

        <div className="flex flex-wrap gap-3">
          <Button label="Bar" onClick={() => setChartType("bar")} />
          <Button label="Line" onClick={() => setChartType("line")} />
          <Button label="Pie" onClick={() => setChartType("pie")} />
        </div>

        {loading ? (
          <p className="text-slate-400">Loading data...</p>
        ) : (
          <SalesChart data={data} chartType={chartType} />
        )}
      </div>
    </DashboardLayout>
  );
}
