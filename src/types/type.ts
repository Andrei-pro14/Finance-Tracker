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
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  gmail: string;
  password: string;
  confirmPass: string;
  phoneNumber: number;
}
