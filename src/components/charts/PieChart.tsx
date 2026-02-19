import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { colorChart, colorTextChart } from "./chartColor/chartColor.tsx";
import type { ExpenseData, IncomesData } from "../../types/type.ts";
import { useEffect, useState } from "react";

interface CustomPieChartProps {
  data: ExpenseData[] | IncomesData[];
}

const renderInnerLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  category,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={`${colorTextChart(category)}`}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function CustomPieChart({ data }: CustomPieChartProps) {
  const [titleConfirm, setTitleConfirm] = useState(false);

  const data02: any = data.map((item) => ({
    name: item.category,
    value: item.amount,
    isExpense: item.isExpense,
  }));
  const filterData = data02.reduce((acc: any, item: any) => {
    const category =
      item.name || item.name.trim() !== "" ? item.name.trim() : "No Category";
    const value = Number(item.value) || 0;
    const found = acc.find((i: any) => i.category === category);
    if (found) {
      found.value += value;
    } else {
      acc.push({ category, value });
    }
    return acc;
  }, []);
  useEffect(() => {
    data02.forEach((item: any) => {
      setTitleConfirm(item.isExpense);
    });
  }, [data02]);
  return (
    <div style={{ width: "100%", height: 405 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <text x="50%" y={20} textAnchor="middle" fill="gray">
            <tspan fontSize="17" className="font-semibold">
              {titleConfirm ? "Expenses by Category" : "Incomes by Category"}
            </tspan>
          </text>

          <Pie
            data={filterData}
            dataKey="value"
            nameKey="category"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={140}
            labelLine={false}
            label={renderInnerLabel}
          >
            {filterData.map((item: any, index: any) => (
              <Cell key={index} fill={colorChart(item.category) || "#BDBDBD"} />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
