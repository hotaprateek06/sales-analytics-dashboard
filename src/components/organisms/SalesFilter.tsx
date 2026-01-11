"use client";

import Card from "@/components/atoms/Card";
import YearSelector from "@/components/molecules/YearSelector";

type Props = {
  year: 2022 | 2023 | 2024;
  onYearChange: (year: 2022 | 2023 | 2024) => void;
};

export default function SalesFilter({ year, onYearChange }: Props) {
  return (
    <Card>
      <div>
        <p className="text-sm text-slate-400 mb-2">Select Year</p>
        <YearSelector selectedYear={year} onChange={onYearChange} />
      </div>
    </Card>
  );
}

