import { create } from "zustand/react";
import type { ExpenseData } from "../types/type.ts";
import { persist } from "zustand/middleware";

interface ExpenseStoreProps {
  expense: ExpenseData[];
  setExpense: (expense: ExpenseData) => void;
  deleteExpense: (id: number) => void;
  editExpense: (
    id: number | undefined,
    updateExpense: Partial<ExpenseData>,
  ) => void;
}

export const useExpenseStore = create<ExpenseStoreProps>()(
  persist(
    (set) => ({
      expense: [],
      setExpense: (expense) =>
        set((state) => ({
          expense: [...state.expense, expense],
        })),
      deleteExpense: (id: number) =>
        set((state) => ({
          expense: state.expense.filter((x) => x.id !== id),
        })),
      editExpense: (id, updatedExpense) =>
        set((state) => ({
          expense: state.expense.map((item) =>
            item.id === id ? { ...item, ...updatedExpense } : item,
          ),
        })),
    }),
    {
      name: "expense-storage",
    },
  ),
);
