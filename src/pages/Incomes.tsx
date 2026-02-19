import { useEffect, useState } from "react";
import type { ExpenseData, IncomesData } from "../types/type.ts";
import { useExpenseStore } from "../stores/useExpenseStore.ts";
import { useIncomesStore } from "../stores/useIncomesStore.ts";
import { NotebookPen, Pencil, PlusIcon, Trash, Wallet } from "lucide-react";
import Sheet from "../components/slide-over/Sheet.tsx";
import EditSheet from "../components/slide-over/EditSheet.tsx";
import DescriptionDialog from "../components/dialogs/DescriptionDialog.tsx";
import { toast, ToastContainer } from "react-toastify";

function Incomes() {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [isExpense, setIsExpense] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [expenseItem, setExpenseItem] = useState<ExpenseData | undefined>();
  const [incomesItem, setIncomesItem] = useState<IncomesData | undefined>();
  const [amount, setAmount] = useState<number | undefined>(0);
  const [date, setDate] = useState<string | undefined>(
    `${new Date().toISOString().slice(0, 10)}`,
  );
  const [category, setCategory] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>("");
  const { incomes, setIncomes, deleteIncomes } = useIncomesStore();
  const { setExpense } = useExpenseStore();
  const notify = () => toast.warning("There are no description!");

  useEffect(() => {
    setDate(incomesItem?.date);
    setAmount(incomesItem?.amount);
    setCategory(incomesItem?.category);
    setDescription(incomesItem?.description);
  }, [incomesItem]);
    console.log(setExpenseItem)
  return (
    <div className="flex flex-col w-full min-h-full p-10">
      <div
        className={`flex flex-col p-4 min-w-full ${incomes.length > 0 ? "" : "h-70"} border border-gray-200 shadow-xl rounded-xl`}
      >
        <h1 className="flex text-2xl font-semibold">Incomes</h1>
        {incomes.length > 0 ? (
          <div className="flex flex-col justify-center items-center mt-16">
            {incomes.map((item, index) => {
              const dateObj = new Date(`${item.date}T00:00:00`);
              const shortDate = dateObj.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
              });
              return (
                <div
                  key={index}
                  className={`flex flex-col w-full h-20 p-2  border-[#E0E0E0] justify-center ${index !== incomes.length - 1 && "border border-t-0 border-l-0 border-r-0"}`}
                >
                  <span className="text-[#866B7D] text-md lg:text-sm">
                    {shortDate}
                  </span>
                  <div className="flex flex-row justify-between gap-2">
                    <div className="flex gap-2">
                      <span className="font-semibold text-lg lg:text-md">
                        {item.amount.toLocaleString("de-DE")}$
                      </span>
                      <span
                        className={`flex justify-center items-center ${item.category === "No Category" ? "bg-gray-200 text-[#444748] h-5 text-sm lg:h-5 mt-1 p-2 lg:text-xs rounded-sm" : "bg-[#338833] h-5 text-sm lg:h-5 mt-1 text-white p-1 lg:text-xs rounded-sm"}`}
                      >
                        {item.category === "" ? "Utilities" : item.category}
                      </span>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-2">
                      <button
                        onClick={() => {
                          if (item.description.length > 0) {
                            setOpenDialog(true);
                            setDescription(item.description);
                          } else {
                            notify();
                          }
                        }}
                        className={`w-8 h-8  ${item.description.length <= 0 ? "" : "hover:bg-gray-200 hover:text-orange-400  cursor-pointer"} rounded-lg transition-all flex justify-center items-center`}
                      >
                        <NotebookPen size={20} />
                      </button>
                      <span
                        onClick={() => {
                          setOpen(true);
                          setIsExpense(false);
                          setIsEditing(true);
                          setIncomesItem(item);
                        }}
                        className="w-8 h-8 hover:bg-gray-200 hover:text-blue-400 rounded-lg transition-all cursor-pointer flex justify-center items-center"
                      >
                        <Pencil size={20} />
                      </span>
                      <span
                        onClick={() => {
                          deleteIncomes(item.id);
                        }}
                        className="w-8 h-8 hover:bg-gray-200 hover:text-red-500 rounded-lg transition-all cursor-pointer flex justify-center items-center"
                      >
                        <Trash size={20} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-2 min-w-full min-h-full justify-center items-center">
            <Wallet size={50} />
            <span>No expenses available</span>
            <button
              onClick={() => {
                setOpen(true);
                setIsExpense(false);
                setIsEditing(false);
                setAmount(0);
                setDate(new Date().toISOString().slice(0, 10));
              }}
              className="flex py-2 px-2 justify-center items-center gap-2 mt-2 rounded-4xl cursor-pointer hover:bg-[#FFBA33] transition-all hover:scale-98 bg-[#FFCD1D]"
            >
              <PlusIcon size={15} /> Add Incomes
            </button>
          </div>
        )}
      </div>
      {open && (
        <Sheet
          setIncomes={setIncomes}
          setExpense={setExpense}
          setDescription={setDescription}
          description={description}
          setDate={setDate}
          date={date}
          setCategory={setCategory}
          setAmount={setAmount}
          amount={amount}
          category={category}
          open={open}
          setOpen={setOpen}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
        />
      )}
      {isEditing && (
        <EditSheet
          expenseItem={expenseItem}
          incomesItem={incomesItem}
          isEditing={isEditing}
          setDescription={setDescription}
          description={description}
          setDate={setDate}
          date={date}
          setCategory={setCategory}
          setAmount={setAmount}
          amount={amount}
          category={category}
          open={open}
          setOpen={setOpen}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
        />
      )}
      <DescriptionDialog
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        description={description}
      />
      <ToastContainer />
        <footer className="flex justify-center mt-10 text-gray-500">
            Copyright © CashControl 2011 - 2026.
        </footer>
    </div>
  );
}
export default Incomes;
