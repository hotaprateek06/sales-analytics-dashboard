"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { SalesRecord } from "@/types/sales";
import { ChartType } from "@/types/chart";
import Card from "@/components/atoms/Card";

type Props = {
  data: SalesRecord[];
  chartType: ChartType;
};

const COLORS = ["#3b82f6", "#22c55e", "#f97316", "#a855f7", "#ef4444"];

export default function SalesChart({ data, chartType }: Props) {
  return (
    <Card>
      {/* IMPORTANT: fixed + min height */}
      <div className="w-full h-[360px] min-h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "bar" && (
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="sales"
                fill="#3b82f6"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          )}

          {chartType === "line" && (
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#22c55e"
                strokeWidth={3}
              />
            </LineChart>
          )}

          {chartType === "pie" && (
            <PieChart>
              <Tooltip />
              <Pie
                data={data}
                dataKey="sales"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={120}
              >
                {data.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
