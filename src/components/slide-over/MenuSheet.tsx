import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import {
  CircleDollarSign,
  LayoutGrid,
  PieChart,
  Search,
  Settings,
  Wallet,
  XIcon,
} from "lucide-react";

interface MenuSheetProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuSheet({ open, setOpen }: MenuSheetProps) {
  const navigate = useNavigate();
  const icons = [
    {
      id: "Dashboard",
      icon: <LayoutGrid />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      id: "Expenses",
      icon: <CircleDollarSign />,
      label: "Expenses",
      path: "/expenses",
    },
    { id: "Incomes", icon: <Wallet />, label: "Incomes", path: "/incomes" },
    { id: "Search", icon: <Search />, label: "Search", path: "/search-page" },
    { id: "Reports", icon: <PieChart />, label: "Reports", path: "/reports" },
    {
      id: "Settings",
      icon: <Settings />,
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/15" />
          </Transition.Child>

          <div className="fixed inset-y-0 left-0 flex max-w-full ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="w-80 bg-white p-6 shadow-xl border border-gray-200 dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500">
                <Dialog.Title className="flex flex-row justify-between items-center text-3xl font-bold mb-4">
                  Menu
                  <XIcon
                    onClick={() => {
                      setOpen(false);
                    }}
                    className="text-[#85827C] cursor-pointer hover:scale-95"
                  />
                </Dialog.Title>
                <Dialog.Panel>
                  {icons.map((item, index) => (
                    <div key={index} className="flex p-1">
                      <button
                        onClick={() => {
                          navigate(`${item.path}`);
                          setOpen(false);
                        }}
                        className={`flex w-full p-4 mt-2 text-xl gap-6 cursor-pointer justify-self-start items-center ${window.location.pathname === item.path ? " bg-[#FFEECD]" : ""}  rounded-lg hover:text-[#16120A] `}
                      >
                        {item.icon} {item.label}
                      </button>
                    </div>
                  ))}
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
