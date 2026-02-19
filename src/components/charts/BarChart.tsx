import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { colorChart } from "./chartColor/chartColor.tsx";
import type { ExpenseData, IncomesData } from "../../types/type.ts";

interface CustomBarChartProps {
  data: ExpenseData[] | IncomesData[];
}

export default function CustomBarChart({ data }: CustomBarChartProps) {
  const data02 = data.map((item: any) => ({
    category: item.category,
    value: item.amount,
    month: new Date(`${item.date}T00:00:00`).toLocaleDateString("en-US", {
      month: "short",
    }),
  }));

  const prepareStackedData = (item: any) => {
    return item.reduce((acc: any[], item: any) => {
      const month = item.month;
      const category =
        item.category && item.category.trim() !== ""
          ? item.category
          : "No Category";

      let row = acc.find((r) => r.month === month);
      if (!row) {
        row = { month };
        acc.push(row);
      }

      row[category] = (row[category] || 0) + item.value;

      return acc;
    }, []);
  };

  const extractCategories = (item: any) => {
    return Array.from(
      new Set(
        item.map((e: any) =>
          e.category && e.category.trim() !== "" ? e.category : "No Category",
        ),
      ),
    );
  };

  const stackedData = prepareStackedData(data02);
  const categories = extractCategories(data02);

  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart data={stackedData}>
        <XAxis dataKey="month" />
        <YAxis />
        {categories.map((category: any) => (
          <Bar
            key={category}
            dataKey={category}
            stackId="data"
            fill={colorChart(category)}
          />
        ))}
        <Tooltip />
        <Legend verticalAlign="bottom" align="center" />
      </BarChart>
    </ResponsiveContainer>
  );
}
