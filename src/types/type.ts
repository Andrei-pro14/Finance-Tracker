export interface ExpenseData {
  id: number;
  amount: number;
  date: string | undefined;
  category: string;
  description: string;
  isExpense: boolean;
  isIncome: boolean;
}
export interface IncomesData {
  id: number;
  amount: number;
  date: string | undefined;
  category: string;
  description: string;
  isExpense: boolean;
  isIncome: boolean;
}
export interface UserData {
  username: string | null;
  email: string | null;
  password?: string | null;
  confirmPass?: string | null;
}
