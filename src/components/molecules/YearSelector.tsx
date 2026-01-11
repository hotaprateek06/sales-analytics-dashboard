import Button from "@/components/atoms/Button";

type Props = {
  selectedYear: 2022 | 2023 | 2024;
  onChange: (year: 2022 | 2023 | 2024) => void;
};

export default function YearSelector({ selectedYear, onChange }: Props) {
  const years: Props["selectedYear"][] = [2022, 2023, 2024];

  return (
    <div className="flex gap-2">
      {years.map((year) => (
        <Button
          key={year}
          label={year.toString()}
          variant={selectedYear === year ? "primary" : "secondary"}
          onClick={() => onChange(year)}
        />
      ))}
    </div>
  );
}
