import { type ReactNode } from "react";
import NavBar from "../NavBar.tsx";
import LeftSideNavbar from "../LeftSideNavbar.tsx";
import {
  BarChart,
  CircleDollarSign,
  LayoutGrid,
  Search,
  Settings,
  Wallet,
} from "lucide-react";
import BalanceOverview from "../BalanceOverview.tsx";

interface NavbarLayoutProps {
  showNavbar: boolean;
  children: ReactNode;
}

function NavbarLayout({ showNavbar, children }: NavbarLayoutProps) {
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
    { id: "Reports", icon: <BarChart />, label: "Reports", path: "/reports" },
    {
      id: "Settings",
      icon: <Settings />,
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <div className="flex-1 overflow-hidden min-h-dvh  bg-white dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500">
      {showNavbar && <NavBar />}
      <div className="flex flex-row overflow-hidden">
        {showNavbar && <LeftSideNavbar icons={icons} />}
        <main className="flex-1">{children}</main>
        {showNavbar && (
          <div className="ml-4 ">
            <BalanceOverview />
          </div>
        )}
      </div>
    </div>
  );
}
export default NavbarLayout;
