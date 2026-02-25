import BalanceBox from "../components/BalanceBox.tsx";
import { useEffect, useState } from "react";
import { useExpenseStore } from "../stores/useExpenseStore.ts";
import { useIncomesStore } from "../stores/useIncomesStore.ts";
import {
  ChartNoAxesCombined,
  CircleDollarSign,
  Scale,
  Wallet,
} from "lucide-react";
import CustomPieChart from "../components/charts/PieChart.tsx";
import CustomBarChart from "../components/charts/BarChart.tsx";

function Reports() {
  const [expenseAmountCount, setExpenseAmountCount] = useState(0);
  const [incomesAmountCount, setIncomesAmountCount] = useState(0);
  const { expense } = useExpenseStore();
  const { incomes } = useIncomesStore();
  useEffect(() => {
    let count = 0;
    let count2 = 0;
    for (let i = 0; i < expense.length; i++) {
      count += expense[i].amount;
    }
    for (let i = 0; i < incomes.length; i++) {
      count2 += incomes[i].amount;
    }
    setExpenseAmountCount(count);
    setIncomesAmountCount(count2);
  }, [expense, incomes]);
  const balance = incomesAmountCount - expenseAmountCount;
  return (
    <div className="flex flex-col w-full h-full p-10 lg:px-40 lg:py-10 overflow-auto ">
      <h1 className="flex font-bold text-3xl">Reports</h1>
      <div className="flex flex-col md:justify-center md:items-center sm:justify-center sm:items-center md:flex-row lg:flex-row  gap-2 mt-10 ">
        <BalanceBox
          amount={expenseAmountCount}
          title={"Spent"}
          icon={CircleDollarSign}
        />
        <BalanceBox
          amount={incomesAmountCount}
          title={"Total Incomes"}
          icon={Wallet}
        />
        <BalanceBox amount={balance} title={"Balance"} icon={Scale} />
      </div>
      <div className="flex flex-col w-full min-h-120 border border-gray-300 shadow-lg rounded-lg mt-10 ">
        <span className="flex text-2xl w-full h-15 items-center border border-gray-300 border-t-0 border-l-0 border-r-0 font-semibold p-2 dark:text-white text-gray-700">
          Expense
        </span>
        {expense.length > 0 ? (
          <div className="flex flex-col lg:flex-row min-h-120">
            <div className="flex justify-center items-center w-full h-100 lg:h-120 border border-gray-300 border-t-0 border-r-0 border-l-0 lg:border-r-1 lg:border-b-0">
              <CustomPieChart data={expense} />
            </div>
            <div className="flex justify-center items-center px-3 w-full h-100 lg:h-120">
              <CustomBarChart data={expense} />
            </div>
          </div>
        ) : (
          <div className="flex justify-center gap-3 items-center flex-col min-h-120">
            <ChartNoAxesCombined size={40} />
            <span className="flex text-xl font-semibold text-gray-400">
              No Data For Reports
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full min-h-120 border border-gray-300 shadow-lg rounded-lg mt-10 ">
        <span className="flex text-2xl w-full h-15 items-center border border-gray-300 border-t-0 border-l-0 border-r-0 font-semibold p-2 dark:text-white text-gray-700">
          Incomes
        </span>
        {incomes.length > 0 ? (
          <div className="flex flex-col lg:flex-row min-h-120">
            <div className="flex justify-center items-center w-full h-100 lg:h-120 border border-gray-300 border-t-0 border-r-0 border-l-0 lg:border-r-1 lg:border-b-0">
              <CustomPieChart data={incomes} />
            </div>
            <div className="flex justify-center items-center px-3 w-full h-100 lg:h-120">
              <CustomBarChart data={incomes} />
            </div>
          </div>
        ) : (
          <div className="flex justify-center gap-3 items-center flex-col min-h-120">
            <ChartNoAxesCombined size={40} />
            <span className="flex text-xl font-semibold text-gray-400">
              No Data For Reports
            </span>
          </div>
        )}
      </div>
      <footer className="flex justify-center mt-10 text-gray-500">
        Copyright © CashControl 2011 - 2026.
      </footer>
    </div>
  );
}
export default Reports;
