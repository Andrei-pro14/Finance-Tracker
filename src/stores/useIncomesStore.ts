import { create } from "zustand/react";
import type { IncomesData } from "../types/type.ts";
import { persist } from "zustand/middleware";

interface IncomesStoreProps {
  incomes: IncomesData[];
  setIncomes: (incomes: IncomesData[]) => void;
  deleteIncomes: (id: number) => void;
  editIncomes: (
    id: number | undefined,
    updateIncomes: Partial<IncomesData>,
  ) => void;
}

export const useIncomesStore = create<IncomesStoreProps>()(
  persist(
    (set) => ({
      incomes: [],
      setIncomes: (incomes: IncomesData[]) =>
        set((state: any) => ({
          incomes: [...state.incomes, incomes],
        })),
      deleteIncomes: (id: number) =>
        set((state) => ({
          incomes: state.incomes.filter((x) => x.id !== id),
        })),
      editIncomes: (id, updateIncomes) =>
        set((state) => ({
          incomes: state.incomes.map((item) =>
            item.id === id ? { ...item, ...updateIncomes } : item,
          ),
        })),
    }),
    {
      name: "expense-storage",
    },
  ),
);
