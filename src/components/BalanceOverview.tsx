import { ListIndentIncrease, PlusIcon } from "lucide-react";
import Sheet from "./slide-over/Sheet.tsx";
import { useEffect, useState } from "react";
import BalanceOverviewSheet from "./slide-over/BalanceOverviewSheet.tsx";
import { useExpenseStore } from "../stores/useExpenseStore.ts";
import { useIncomesStore } from "../stores/useIncomesStore.ts";

function BalanceOverview() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [isExpense, setIsExpense] = useState(false);
  const [amount, setAmount] = useState<number | undefined>(0);
  const [date, setDate] = useState<string | undefined>(
    `${new Date().toISOString().slice(0, 10)}`,
  );
  const [category, setCategory] = useState<string | undefined>("");
  const [descriptiopn, setDescriptiopn] = useState<string | undefined>("");
  const { expense, setExpense } = useExpenseStore();
  const { incomes, setIncomes } = useIncomesStore();
  const [expenseAmountCount, setExpenseAmountCount] = useState(0);
  const [incomesAmountCount, setIncomesAmountCount] = useState(0);
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
    <div>
      <div className="hidden  lg:block w-full max-w-lg  mx-auto py-4 px-4">
        <div className="bg-gray-100  w-120 rounded-2xl sticky top-10 shadow-md border border-gray-200 dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500">
          <div className="p-6 px-10 flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex text-white w-full">
                <button
                  onClick={() => {
                    setAmount(0);
                    setOpen(true);
                    setIsExpense(true);
                    setDate(new Date().toISOString().slice(0, 10));
                  }}
                  className="flex-1 flex gap-2 justify-center cursor-pointer items-center h-9 bg-[#F44336] hover:bg-[#AA2E25] transition-all rounded-l-full"
                >
                  <PlusIcon size={18} />
                  Expense
                </button>

                <button
                  onClick={() => {
                    setAmount(0);
                    setOpen(true);
                    setIsExpense(false);
                    setDate(new Date().toISOString().slice(0, 10));
                  }}
                  className="flex-1 flex gap-2 justify-center cursor-pointer items-center h-9 bg-[#2E7D32] hover:bg-[#205723] transition-all rounded-r-full"
                >
                  <PlusIcon size={18} />
                  Income
                </button>
              </div>

              <div className="w-full h-px bg-[#E0E0E0] mt-4" />
            </div>

            <div className="flex flex-col">
              <h1 className="flex font-bold text-xl">Balance</h1>

              <div className="flex w-full justify-between items-center">
                <span className="text-md text-[#866B7D] py-2">Income</span>
                <span>{incomesAmountCount.toLocaleString("de-DE")}$</span>
              </div>
              <div className="flex w-full justify-between items-center">
                <span className="text-md text-[#866B7D] py-2">Expense</span>
                <span>{expenseAmountCount.toLocaleString("de-DE")}$</span>
              </div>
              <div className="w-full h-px bg-[#E0E0E0] mt-1" />
              <div className="flex w-full justify-between items-center">
                <span className="text-md text-[#866B7D] py-2">Balance</span>
                <span>{balance.toLocaleString("de-DE")}$</span>
              </div>
              <Sheet
                setIncomes={setIncomes}
                setExpense={setExpense}
                setDescription={setDescriptiopn}
                description={descriptiopn}
                setAmount={setAmount}
                amount={amount}
                setDate={setDate}
                date={date}
                setCategory={setCategory}
                category={category}
                open={open}
                setOpen={setOpen}
                isExpense={isExpense}
                setIsExpense={setIsExpense}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div
          onClick={() => {
            setOpen2(true);
          }}
          className="flex w-12 h-12 m-5 justify-center cursor-pointer hover:scale-98 hover:bg-gray-300 items-center bg-gray-200 rounded-2xl border border-gray-200 dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500"
        >
          <button className="cursor-pointer hover:scale-98">
            <ListIndentIncrease size={35} />
          </button>
        </div>
        <BalanceOverviewSheet
          open2={open2}
          setOpen2={setOpen2}
          incomesCount={incomesAmountCount}
          expenseCount={expenseAmountCount}
          balance={balance}
        />
      </div>
    </div>
  );
}

export default BalanceOverview;
