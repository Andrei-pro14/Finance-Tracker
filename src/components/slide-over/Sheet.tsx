import { Dialog, Select, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XIcon } from "lucide-react";
import type { ExpenseData, IncomesData } from "../../types/type.ts";

interface SheetProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isExpense: boolean;
  setIsExpense: React.Dispatch<React.SetStateAction<boolean>>;
  setAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
  setDate: React.Dispatch<React.SetStateAction<string | undefined>>;
  setCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
  amount: number | undefined;
  date: string | undefined;
  category: string | undefined;
  setDescription: React.Dispatch<React.SetStateAction<string | undefined>>;
  description: string | undefined;
  setExpense: (expenseData: any) => void;
  setIncomes: (incomesData: any) => void;
}

export default function Sheet({
  setDescription,
  description,
  open,
  setOpen,
  isExpense,
  setIsExpense,
  setAmount,
  setCategory,
  setDate,
  amount,
  date,
  category,
  setExpense,
  setIncomes,
}: SheetProps) {
  const [amountIsZero, setAmountIsZero] = useState(false);

  const handleExpenseData = () => {
    const newExpense: ExpenseData = {
      id: Date.now(),
      amount: amount ? amount : 0,
      date: date,
      category: category ? category : "No Category",
      description: description ? description : "",
      isExpense: true,
      isIncome: false,
    };
    setExpense(newExpense);
  };
  const handleIncomesData = () => {
    const newIncomes: IncomesData = {
      id: Date.now(),
      amount: amount ? amount : 0,
      date: date,
      category: category ? category : "No Category",
      description: description ? description : "",
      isIncome: true,
      isExpense: false,
    };
    setIncomes(newIncomes);
  };

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            setOpen(false);
            setIsExpense(false);
            setAmount(0);
            setAmountIsZero(false);
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
            <div className="absolute inset-0 overflow-hidden ">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-[500px] h-full bg-white shadow-xl p-6 border border-gray-200 dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500">
                    <Dialog.Title className="text-[28px] font-bold mt-5 flex justify-between">
                      {isExpense ? "Add Expense" : "Add Incomes"}

                      <XIcon
                        onClick={() => {
                          setOpen(false);
                          setAmount(0);
                          setAmountIsZero(false);
                        }}
                        className="text-[#85827C] cursor-pointer hover:scale-95"
                      />
                    </Dialog.Title>
                    <div className="w-full h-px bg-[#E0E0E0] mt-4" />
                    {isExpense ? (
                      <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col py-6">
                          <legend className="px-1">Amount</legend>
                          <input
                            type="number"
                            value={amount}
                            onChange={(e) => {
                              setAmount(+e.target.value);
                            }}
                            className="w-100 h-15 border outline-none p-2 text-xl  rounded-xl"
                            onFocus={(e) => e.target.select()}
                          />
                          {amountIsZero && (
                            <span className="flex ml-2 text-sm text-red-500">
                              Amount must be a number longer than 0
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col py-2">
                          <legend className="px-1">Date</legend>
                          <input
                            type="date"
                            value={date}
                            onChange={(e) => {
                              setDate(e.target.value);
                            }}
                            className="w-100 h-15 border outline-none p-2 text-xl  rounded-xl"
                            onFocus={(e) => e.target.select()}
                          />
                        </div>

                        <div className="flex flex-col py-6 ">
                          <legend className="px-1 ">Category</legend>
                          <Select
                            name="status"
                            aria-label="Project status"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-100 h-15 border outline-none p-2 text-xl  rounded-xl"
                          >
                            <div className="dark:text-black transition-colors duration-500">
                              <optgroup label="None">
                                <option value="No Category">No Category</option>
                              </optgroup>

                              <optgroup label="Home">
                                <option value="Utilities">Utilities</option>
                                <option value="Phone & Internet">
                                  Phone & Internet
                                </option>
                              </optgroup>
                              <optgroup label="Shopping">
                                <option value="Cleaning">Cleaning</option>
                                <option value="Clothing">Clothing</option>
                              </optgroup>

                              <optgroup label="Fun">
                                <option value="Restaurant">Restaurant</option>
                                <option value="Streaming">Streaming</option>
                                <option value="Sport">Sport</option>
                              </optgroup>

                              <optgroup label="Car">
                                <option value="Fuel">Fuel</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Tolls">Tolls</option>
                              </optgroup>
                            </div>
                          </Select>
                        </div>
                        <div className="flex flex-col py-2">
                          <textarea
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className="w-100 h-25 border outline-none p-2 text-xl  rounded-lg"
                          ></textarea>
                        </div>

                        <button
                          onClick={() => {
                            if (amount !== 0) {
                              handleExpenseData();
                              setOpen(false);
                              setAmount(0);
                            } else {
                              setAmountIsZero(true);
                            }
                          }}
                          className="w-85 py-2 mt-5 bg-[#FFCD1D] cursor-pointer rounded-4xl hover:scale-98 font-semibold hover:bg-[#E6B800]"
                        >
                          Add Expense
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col py-6">
                          <legend className="px-1">Amount</legend>
                          <input
                            type="number"
                            value={amount}
                            onChange={(e) => {
                              setAmount(+e.target.value);
                            }}
                            className="w-100 h-15 border outline-none p-2 text-xl  rounded-xl"
                            onFocus={(e) => e.target.select()}
                          />
                          {amountIsZero && (
                            <span className="flex ml-2 text-sm text-red-500">
                              Amount must be a number longer than 0
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col py-2">
                          <legend className="px-1">Date</legend>
                          <input
                            type="date"
                            value={date ? date.slice(0, 10) : ""}
                            onChange={(e) => {
                              setDate(e.target.value);
                            }}
                            className="w-100 h-15 border outline-none p-2 text-xl  rounded-xl"
                            onFocus={(e) => e.target.select()}
                          />
                        </div>

                        <div className="flex flex-col py-6">
                          <legend className="px-1">Category</legend>
                          <Select
                            name="status"
                            aria-label="Project status"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-100 h-15 border outline-none p-2 text-xl  rounded-xl"
                          >
                            <div className="dark:text-black transition-colors duration-500">
                              <optgroup label="None">
                                <option value="No Category">No Category</option>
                              </optgroup>

                              <optgroup label="Home">
                                <option value="Utilities">Utilities</option>
                                <option value="Phone & Internet">
                                  Phone & Internet
                                </option>
                              </optgroup>
                              <optgroup label="Shopping">
                                <option value="Cleaning">Cleaning</option>
                                <option value="Clothing">Clothing</option>
                              </optgroup>

                              <optgroup label="Fun">
                                <option value="Restaurant">Restaurant</option>
                                <option value="Streaming">Streaming</option>
                                <option value="Sport">Sport</option>
                              </optgroup>

                              <optgroup label="Car">
                                <option value="Fuel">Fuel</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Tolls">Tolls</option>
                              </optgroup>
                            </div>
                          </Select>
                        </div>
                        <div className="flex flex-col py-2">
                          <textarea
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className="w-100 h-25 border outline-none p-2 text-xl  rounded-lg"
                          ></textarea>
                        </div>
                        <button
                          onClick={() => {
                            if (amount !== 0) {
                              handleIncomesData();
                              setOpen(false);
                            } else {
                              setAmountIsZero(true);
                            }
                          }}
                          className="w-85 py-2 mt-5 bg-[#FFCD1D] cursor-pointer rounded-4xl hover:scale-98 font-semibold hover:bg-[#E6B800]"
                        >
                          Add Incomes
                        </button>
                      </div>
                    )}
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
