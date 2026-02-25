import { BadgeDollarSign, type LucideIcon } from "lucide-react";

interface BalanceBoxProps {
  title: string;
  icon: LucideIcon;
  amount: number;
}

function BalanceBox({ title, icon: Icon, amount }: BalanceBoxProps) {
  return (
    <div className="w-full max-w-sm sm:max-w-md h-auto border border-gray-300 shadow-lg rounded-lg py-2 p-3">
      {amount === 0 ? (
        <div className="flex flex-col items-center justify-center py-[15px] p-3 mt-2">
          <BadgeDollarSign size={30} />
          <span className="font-semibold text-sm">No Finance Here</span>
        </div>
      ) : (
        <div className="flex p-4 items-center gap-4 ">
          <span>
            <Icon size={30} className="text-gray-500" />
          </span>
          <div className="flex flex-col">
            <span className={`text-gray-500 dark:text-white`}>{title}</span>
            <span className="text-gray-800 font-semibold dark:text-white text-2xl">
              {amount.toLocaleString("de-DE")}$
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default BalanceBox;
