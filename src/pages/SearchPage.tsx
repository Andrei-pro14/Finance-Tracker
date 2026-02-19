import {
  ArrowDown,
  ArrowRight,
  CircleDollarSign,
  SearchIcon,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import { useExpenseStore } from "../stores/useExpenseStore.ts";
import { useIncomesStore } from "../stores/useIncomesStore.ts";
import type { ExpenseData } from "../types/type.ts";

function SearchPage() {
  const [amountSearch, setAmountSearch] = useState(0);
  const [categorySearch, setCategorySearch] = useState("");
  const [fromDateSearch, setFromDateSearch] = useState("");
  const [toDateSearch, setToDateSearch] = useState("");
  const [filterFinance, setFilterFinance] = useState<ExpenseData[]>([]);
  const { expense } = useExpenseStore();
  const { incomes } = useIncomesStore();
  const allFinance: any[] = [];
  allFinance.push(...incomes, ...expense);
  const handleSearchClick = () => {
    const filteredFinance = allFinance.filter((item) => {
      const amountMatch = !amountSearch || item.amount === amountSearch;
      const categoryMatch = item.category
        .toLowerCase()
        .includes(categorySearch.toLowerCase());
      const itemDate = new Date(item.date);
      const fromDate = fromDateSearch
        ? new Date(new Date(fromDateSearch).setHours(23, 59, 59, 999))
        : undefined;
      const toDate = toDateSearch
        ? new Date(new Date(toDateSearch).setHours(23, 59, 59, 999))
        : undefined;
      const dateMatch =
        (!fromDate || itemDate >= fromDate) && (!toDate || itemDate <= toDate);

      return amountMatch && categoryMatch && dateMatch;
    });
    setFilterFinance(filteredFinance);
  };

  return (
    <div className="flex flex-col w-full h-full p-10 lg:px-40 lg:py-10 ">
      <h1 className="flex text-3xl font-bold">Search</h1>
      <div className="flex flex-col lg:flex-row lg:items-end items-center p-2 justify-baseline gap-3 min-w-full min-h-30 shadow-xl rounded-md  border border-[#E6E6E6]">
        <div className="flex flex-col w-full flex-1 lg:min-w-[180px] lg:max-w-[300px]">
          <legend className="px-1 text-sm">Amount</legend>
          <input
            type="number"
            value={amountSearch}
            onChange={(e) => {
              setAmountSearch(+e.target.value);
            }}
            onFocus={(e) => e.target.select()}
            className="p-2 text-lg outline-none border-2 border-gray-500 rounded-xl h-12 w-full"
          />
        </div>
        <div className="flex flex-col w-full flex-1 lg:min-w-[180px] lg:max-w-[300px]">
          <legend className="px-1 text-sm">Category</legend>
          <input
            type="text"
            value={categorySearch}
            onChange={(e) => {
              setCategorySearch(e.target.value);
            }}
            className="p-2 text-lg outline-none border-2 border-gray-500 rounded-xl h-12 w-full"
          />
        </div>
        <div className="flex flex-col w-full flex-1 lg:min-w-[180px] lg:max-w-[300px]">
          <legend className="px-1 text-sm">From Date</legend>
          <input
            type="date"
            value={fromDateSearch}
            onChange={(e) => {
              setFromDateSearch(e.target.value);
            }}
            className="p-2 text-lg outline-none border-2 border-gray-500 rounded-xl h-12 w-full"
          />
        </div>
        <ArrowRight className="hidden lg:block mb-2" />
        <ArrowDown className="block lg:hidden mt-2" />
        <div className="flex flex-col w-full flex-1 lg:min-w-[180px] lg:max-w-[300px]">
          <legend className="px-1 text-sm">To Date</legend>
          <input
            type="date"
            value={toDateSearch}
            onChange={(e) => {
              setToDateSearch(e.target.value);
            }}
            className="p-2 text-lg outline-none border-2 border-gray-500 rounded-xl h-12 w-full"
          />
        </div>
        <button
          onClick={() => {
            if (
              amountSearch !== 0 ||
              categorySearch !== "" ||
              toDateSearch !== "" ||
              fromDateSearch !== ""
            ) {
              handleSearchClick();
            } else {
              setFilterFinance([]);
            }
          }}
          className="bg-yellow-400 h-12 px-10 rounded-xl w-full lg:w-auto mt-2 border border-yellow-500 shadow-sm cursor-pointer hover:bg-yellow-500 hover:scale-98"
        >
          Search
        </button>
      </div>
      {filterFinance.length > 0 ? (
        <div className="flex flex-col justify-center shadow-xl rounded-md bg-white border border-[#E6E6E6] items-center mt-10 dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500">
          {filterFinance.map((item, index) => {
            const dateObj = new Date(`${item.date}T00:00:00`);
            const shortDate = dateObj.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            });
            return (
              <div
                key={index}
                className={`flex flex-col w-full h-20 p-2  border-[#E0E0E0] justify-center ${index !== filterFinance.length - 1 && "border border-t-0 border-l-0 border-r-0"}`}
              >
                <div>
                  <span className="text-[#866B7D] text-md lg:text-sm">
                    {shortDate}
                  </span>
                  <div className="flex flex-row justify-between gap-2">
                    <div className="flex gap-2">
                      <span className="flex justify-center items-center">
                        {item.isExpense ? (
                          <CircleDollarSign size={20} />
                        ) : (
                          <Wallet size={20} />
                        )}
                      </span>
                      <span className="font-semibold text-lg lg:text-md">
                        {item.amount.toLocaleString("de-DE")}$
                      </span>
                      <span
                        className={`flex justify-center items-center ${item.category === "No Category" ? "bg-gray-200 text-[#444748] h-5 text-sm lg:h-5 mt-1 p-2 lg:text-xs rounded-sm" : `${item.isExpense ? "bg-[#930005] text-[#E3C9D5]" : "bg-[#338833] text-white"} h-5 text-sm lg:h-5 mt-1  p-2 lg:text-xs rounded-sm`}`}
                      >
                        {item.category === "" ? "Utilities" : item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-2 min-w-full min-h-70 shadow-xl rounded-md bg-white mt-10 border border-[#E6E6E6] justify-center items-center dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500">
          <SearchIcon size={30} />
          <span>No results found</span>
        </div>
      )}
      <footer className="flex justify-center mt-10 text-gray-500">
        Copyright © CashControl 2011 - 2026.
      </footer>
    </div>
  );
}
export default SearchPage;
