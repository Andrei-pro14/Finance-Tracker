import CategoriesContainer from "../components/CategoriesContainer.tsx";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

function Settings() {
  const [enabled, setEnabled] = useState(() => {
    const saved = localStorage.getItem("dark");
    return saved && JSON.parse(saved);
  });

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(enabled));

    if (enabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [enabled]);

  return (
    <div className="flex flex-col min-w-full justify-around max-h-full p-15 ">
      <div className="flex flex-col lg:flex-row gap-10 w-full h-full">
        <CategoriesContainer />
        <div className="flex items-center justify-between px-2 min-w-140 h-20 rounded-xl border border-gray-300 shadow-2xl">
          <span className="text-xl font-mono">Dark/Light Mode</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-7 w-12 items-center rounded-full bg-gray-200 transition data-checked:bg-blue-600"
          >
            <span className="size-5 flex justify-center items-center translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6">
              {enabled ? <MoonIcon className="text-black" /> : <SunIcon />}
            </span>
          </Switch>
        </div>
      </div>
      <footer className="flex justify-center mt-40 lg:ml-30 text-gray-500">
        Copyright © CashControl 2011 - 2026.
      </footer>
    </div>
  );
}
export default Settings;
