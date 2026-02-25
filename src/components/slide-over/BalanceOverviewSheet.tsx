import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { PlusIcon, XIcon } from "lucide-react";
import Sheet from "./Sheet.tsx";
import { useExpenseStore } from "../../stores/useExpenseStore.ts";
import { useIncomesStore } from "../../stores/useIncomesStore.ts";

interface SheetProps {
  open2: boolean;
  setOpen2: React.Dispatch<React.SetStateAction<boolean>>;
  incomesCount: number;
  expenseCount: number;
  balance: number;
}

export default function BalanceOverviewSheet({
  open2,
  setOpen2,
  balance,
  incomesCount,
  expenseCount,
}: SheetProps) {
  const [open, setOpen] = useState(false);
  const [isExpense, setIsExpense] = useState(false);
  const [amount, setAmount] = useState<number | undefined>(0);
  const [date, setDate] = useState<string | undefined>(
    `${new Date().toISOString().slice(0, 10)}`,
  );
  const [category, setCategory] = useState<string | undefined>("");
  const [descriptiopn, setDescriptiopn] = useState<string | undefined>("");
  const { setExpense } = useExpenseStore();
  const { setIncomes } = useIncomesStore();
  return (
    <>
      <Transition appear show={open2} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            setOpen2(false);
            setIsExpense(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-40"
            leave="ease-in duration-200"
            leaveFrom="opacity-40"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/15" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden ">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                {/* Panel animated */}
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-[500px] h-full bg-white shadow-xl p-6 border border-gray-600 dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500">
                    <Dialog.Title className="text-[28px] font-bold mt-5">
                      <XIcon
                        className="flex cursor-pointer"
                        onClick={() => {
                          setOpen2(false);
                        }}
                      />
                    </Dialog.Title>
                    <div className="bg-gray-100 w-120 rounded-2xl sticky top-10 shadow-md">
                      <div className="p-6 px-10 flex flex-col gap-4">
                        <div className="flex flex-col">
                          <div className="flex text-white w-full">
                            <button
                              onClick={() => {
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

                        <div className="flex flex-col dark:text-black transition-colors duration-500">
                          <h1 className="flex font-bold text-xl">Balance</h1>

                          <div className="flex w-full justify-between items-center">
                            <span className="text-md text-[#866B7D] py-2">
                              Income
                            </span>
                            <span>{incomesCount.toLocaleString("de-DE")}$</span>
                          </div>
                          <div className="flex w-full justify-between items-center">
                            <span className="text-md text-[#866B7D] py-2">
                              Expense
                            </span>
                            <span>{expenseCount.toLocaleString("de-DE")}$</span>
                          </div>
                          <div className="w-full h-px bg-[#E0E0E0] mt-1" />
                          <div className="flex w-full justify-between items-center">
                            <span className="text-md text-[#866B7D] py-2">
                              Balance
                            </span>
                            <span>{balance.toLocaleString("de-DE")}$</span>
                          </div>
                          <Sheet
                            setIncomes={setIncomes}
                            setExpense={setExpense}
                            setDescription={setDescriptiopn}
                            description={descriptiopn}
                            amount={amount}
                            setCategory={setCategory}
                            category={category}
                            date={date}
                            setAmount={setAmount}
                            setDate={setDate}
                            open={open}
                            setOpen={setOpen}
                            isExpense={isExpense}
                            setIsExpense={setIsExpense}
                          />
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
