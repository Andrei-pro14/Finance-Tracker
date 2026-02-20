import { useUserStore } from "../stores/useUserStore.ts";
import {
  Award,
  Bookmark,
  EyeIcon,
  EyeOff,
  KeyRound,
  Mail,
  Pencil,
  Settings,
  User2Icon,
} from "lucide-react";
import { useEffect, useState } from "react";
import UserEditSheet from "../components/slide-over/UserEditSheet.tsx";

function UserPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isName, setIsName] = useState(false);
  const [password, setPassword] = useState<string | undefined>("");
  const [confirmPass, setConfirmPass] = useState("");
  const [name, setName] = useState<string | undefined>("");
  const [username, setUsername] = useState<string | undefined>("");
  const [isUsername, setIsUsername] = useState(false);
  const { user } = useUserStore();
  useEffect(() => {
    setPassword(user?.password);
    setName(user?.firstName);
    setUsername(user?.userName);
  }, [user]);
  console.log(user?.password);
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
        <div className="flex flex-col gap-5 justify-between w-full p-8">
          <div className="flex gap-8 items-center">
            <span>
              <Mail />
            </span>
            <div className="flex flex-col">
              <span className="text-sm">Email</span>
              <span className="flex font-semibold text-sm">{user?.gmail}</span>
            </div>
          </div>
          <div className="flex justify-between gap-8 items-center">
            <div className="flex gap-8 items-center">
              <span>
                <KeyRound />
              </span>
              <div className="flex flex-col">
                <span className="text-sm">Password</span>
                <span className="flex font-semibold text-sm">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    value={user?.password}
                    onChange={() => {}}
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              {showPassword ? (
                <span
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="w-8 h-8 hover:bg-gray-200 hover:text-bgray-400 rounded-lg transition-all cursor-pointer flex justify-center items-center"
                >
                  <EyeIcon size={20} />
                </span>
              ) : (
                <span
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="w-8 h-8 hover:bg-gray-200 hover:text-gray-400 rounded-lg transition-all cursor-pointer flex justify-center items-center"
                >
                  <EyeOff size={20} />
                </span>
              )}
              <span
                onClick={() => {
                  setOpen(true);
                  setIsPassword(true);
                  setIsName(false);
                  setIsUsername(false);
                }}
                className="w-8 h-8 hover:bg-gray-200 hover:text-blue-400 rounded-lg transition-all cursor-pointer flex justify-center items-center"
              >
                <Pencil size={20} />
              </span>
            </div>
          </div>
          <div className="flex justify-between gap-8 items-center">
            <div className="flex gap-8 items-center">
              <span>
                <User2Icon />
              </span>
              <div className="flex flex-col">
                <span className="text-sm">Name</span>
                <span className="flex font-semibold text-sm">
                  {user?.firstName}
                </span>
              </div>
            </div>
            <span
              onClick={() => {
                setOpen(true);
                setIsPassword(false);
                setIsName(true);
                setIsUsername(false);
              }}
              className="w-8 h-8 hover:bg-gray-200 hover:text-blue-400 rounded-lg transition-all cursor-pointer flex justify-center items-center"
            >
              <Pencil size={20} />
            </span>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col min-w-full h-42 border bg-white mt-5 border-gray-200 shadow-xl rounded-xl dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500`}
      >
        <div className="flex w-full p-8 gap-8 items-center h-16 border border-gray-300 border-t-0 border-l-0 border-r-0">
          <span>
            <Award size={30} className="text-[#85827C]" />
          </span>
          <h1 className="flex font-semibold text-2xl">Account Settings</h1>
        </div>

        <div className="flex justify-between w-full p-8 gap-8 items-center">
          <div className="flex items-center gap-8">
            <span>
              <Bookmark />
            </span>
            <div className="flex flex-col">
              <span className="text-sm">Username</span>
              <span className="flex font-semibold text-sm">
                {user?.userName}
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <span
              onClick={() => {
                setOpen(true);
                setIsPassword(false);
                setIsName(false);
                setIsUsername(true);
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
        isPassword={isPassword}
        isName={isName}
        password={password}
        setPassword={setPassword}
        confirmPass={confirmPass}
        setConfirmPass={setConfirmPass}
        name={name}
        setName={setName}
        setUsername={setUsername}
        username={username}
        isUsername={isUsername}
      />
      <footer className="flex justify-center mt-10 text-gray-500">
        Copyright © CashControl 2011 - 2026.
      </footer>
    </div>
  );
}

export default UserPage;
