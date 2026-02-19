import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  UserIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/16/solid";
import { CircleUser } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LogOutDialog from "../dialogs/LogOutDialog.tsx";
import { useState } from "react";
import { useUserStore } from "../../stores/useUserStore.ts";

export default function DropdownMenu() {
  const [openDialog, setOpenDialog] = useState(false);
  const { user } = useUserStore();
  const navigate = useNavigate();
  return (
    <div className="flex top-24 ml-10 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 cursor-pointer rounded-md text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white ">
          <CircleUser size={30} />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl bg-gray-200 p-1 text-sm/6  ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 border border-gray-300 dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500"
        >
          <MenuItem>
            <div className="flex flex-col p-2">
              <h1 className="flex font-semibold">{user?.firstName}</h1>
              <span className="flex text-gray-500">{user?.gmail}</span>
            </div>
          </MenuItem>
          <div className="my-1 h-px bg-gray-300" />
          <MenuItem>
            <button
              onClick={() => {
                navigate("/user-page");
              }}
              className="group flex cursor-pointer w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
            >
              <UserIcon className="size-4 fill-gray-500" />
              Profile
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-gray-300" />
          <MenuItem>
            <button
              onClick={() => {
                setOpenDialog(true);
              }}
              className="group flex cursor-pointer w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10 "
            >
              <ArrowRightEndOnRectangleIcon className="size-4 fill-gray-500" />
              Log Out
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
      <LogOutDialog setOpenDialog={setOpenDialog} openDialog={openDialog} />
    </div>
  );
}
