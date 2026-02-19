import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuSheet from "./slide-over/MenuSheet.tsx";
import DropdownMenu from "./dropdown/DropdownMenu.tsx";

function NavBar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex w-full min-h-[80px] bg-[#16120A] p-3 px-4 justify-between">
        <div className="flex flex-row justify-center items-center gap-4">
          <div
            onClick={() => {
              setOpen(true);
            }}
            className="block lg:hidden items-center justify-center text-white cursor-pointer transition-all hover:scale-97"
          >
            <Menu />
          </div>
          <img
            src="https://www.cashcontrol.ro/_astro/logo_cashcontrol.BvNBZIxQ.svg"
            alt=""
            className="w-35 md:w-40 lg:w-50 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        <div className="flex justify-center items-center text-white">
          <DropdownMenu />
        </div>
      </div>
      <MenuSheet open={open} setOpen={setOpen} />
    </div>
  );
}
export default NavBar;
