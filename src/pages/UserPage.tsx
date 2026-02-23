import { useUserStore } from "../stores/useUserStore.ts";
import {
  Bookmark,
  Mail,
  Pencil,
  Settings,
} from "lucide-react";
import { useEffect, useState } from "react";
import UserEditSheet from "../components/slide-over/UserEditSheet.tsx";

function UserPage() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState<string | undefined | null>("");
  const { user } = useUserStore();
  useEffect(() => {
    setUsername(user?.username);
  }, [user]);
  return (
    <div className="flex flex-col min-w-full h-full p-15">
      <div
        className={`flex flex-col min-w-full h-70 border border-gray-200 shadow-xl rounded-xl`}
      >
        <div className="flex w-full p-8 gap-8 items-center h-16 border border-gray-300 border-t-0 border-l-0 border-r-0">
          <span>
            <Settings size={30} className="text-[#85827C]" />
          </span>
          <h1 className="flex font-semibold text-2xl">Email & Password</h1>
        </div>
        <div className="flex flex-col gap-10 justify-between w-full p-8">
          <div className="flex gap-8 items-center">
            <span>
              <Mail />
            </span>
            <div className="flex flex-col">
              <span className="text-sm">Email</span>
              <span className="flex font-semibold text-sm">{user?.email}</span>
            </div>
          </div>
          <div className="flex justify-between gap-8 items-center">
           <div className="flex justify-between gap-8 items-center">
              <span>
              <Bookmark />
            </span>
             <div className="flex flex-col">
               <span className="text-sm">Username</span>
               <span className="flex font-semibold text-sm">{user?.username}</span>
             </div>
           </div>
            <span
                onClick={() => {
                  setOpen(true);
                }}
                className="w-8 h-8 hover:bg-gray-200 hover:text-blue-400 rounded-lg transition-all cursor-pointer flex justify-center items-center"
            >
                <Pencil size={20} />
              </span>
          </div>
        </div>
      </div>
      <UserEditSheet
        open={open}
        setOpen={setOpen}
        setUsername={setUsername}
        username={username}
      />
      <footer className="flex justify-center mt-10 text-gray-500">
        Copyright © CashControl 2011 - 2026.
      </footer>
    </div>
  );
}

export default UserPage;
