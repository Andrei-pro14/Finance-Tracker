import type { UserData } from "../types/type.ts";
import { create } from "zustand/react";
import { persist } from "zustand/middleware";

interface UseUserStoreProps {
  user: UserData | null;
  setUser: (userData: UserData) => void;
  editUser: (updateUser: Partial<UserData>) => void;
}

export const useUserStore = create<UseUserStoreProps>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      editUser: (updateUser) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updateUser } : null,
        })),
    }),
    {
      name: "expense-storage",
    },
  ),
);
