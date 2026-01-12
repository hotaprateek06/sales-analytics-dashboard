"use client";

import Card from "@/components/atoms/Card";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import YearSelector from "@/components/molecules/YearSelector";

type Props = {
  year: 2022 | 2023 | 2024;
  threshold: number;
  onYearChange: (year: 2022 | 2023 | 2024) => void;
  onThresholdChange: (value: number) => void;
  onReset: () => void;
};

export default function SalesFilter({
  year,
  threshold,
  onYearChange,
  onThresholdChange,
  onReset,
}: Props) {
  return (
    <Card>
      <div className="flex flex-col md:flex-row gap-6 items-end">
        <div>
          <p className="text-sm text-slate-400 mb-2">Year</p>
          <YearSelector selectedYear={year} onChange={onYearChange} />
        </div>

        <div className="w-full md:w-60">
          <p className="text-sm text-slate-400 mb-2">
            Minimum Sales
          </p>
          <Input
            type="number"
            placeholder="e.g. 200000"
            value={threshold || ""}
            onChange={(e) =>
              onThresholdChange(
                e.target.value === "" ? 0 : Number(e.target.value)
              )
            }
          />
        </div>

        <Button
          label="Reset"
          variant="secondary"
          onClick={onReset}
        />
      </div>
    </Card>
  );
}

