import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "lucide-react";
import { useUserStore } from "../../stores/useUserStore.ts";
import { toast, ToastContainer } from "react-toastify";

interface SheetProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isPassword: boolean;
  isName: boolean;
  password: string | undefined;
  setPassword: React.Dispatch<React.SetStateAction<string | undefined>>;
  confirmPass: string;
  setConfirmPass: React.Dispatch<React.SetStateAction<string>>;
  name: string | undefined;
  setName: React.Dispatch<React.SetStateAction<string | undefined>>;
  username: string | undefined;
  setUsername: React.Dispatch<React.SetStateAction<string | undefined>>;
  isUsername: boolean;
}

export default function UserEditSheet({
  open,
  setOpen,
  isName,
  isPassword,
  name,
  setName,
  password,
  setPassword,
  confirmPass,
  setConfirmPass,
  username,
  setUsername,
  isUsername,
}: SheetProps) {
  const { editUser } = useUserStore();
  const confirmPassError = () =>
    toast.error("Password doesn’t match with the Confirm Password");

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            setOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-40"
            leave="ease-in duration-200"
            leaveFrom="opacity-40"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/15" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-[500px] h-full bg-white shadow-xl p-6">
                    <Dialog.Title className="text-[28px] font-bold mt-5 flex justify-between">
                      {isPassword ? "Edit Password" : ""}
                      {isName ? "Edit Name" : ""}
                      {isUsername ? "Edit Username" : ""}

                      <XIcon
                        onClick={() => {
                          setOpen(false);
                        }}
                        className="text-[#85827C] cursor-pointer hover:scale-95"
                      />
                    </Dialog.Title>
                    <div className="w-full h-px bg-[#E0E0E0] mt-4" />

                    {isPassword && (
                      <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col py-6">
                          <legend className="px-1">Password</legend>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            placeholder="Password"
                            className="w-100 h-15 border outline-none p-2 text-xl  rounded-xl"
                            onFocus={(e) => e.target.select()}
                          />
                        </div>
                        <div className="flex flex-col py-6">
                          <legend className="px-1">Confirm Password</legend>
                          <input
                            value={confirmPass}
                            onChange={(e) => {
                              setConfirmPass(e.target.value);
                            }}
                            type="password"
                            placeholder="Confirm Password"
                            className="w-100 h-15 border outline-none p-2 text-xl  rounded-xl"
                            onFocus={(e) => e.target.select()}
                          />
                        </div>

                        <button
                          onClick={() => {
                            if (password === confirmPass) {
                              setOpen(false);
                              editUser({
                                password: password,
                                confirmPass: confirmPass,
                              });
                            } else {
                              confirmPassError();
                            }
                          }}
                          disabled={password === "" || confirmPass === ""}
                          className="w-85 py-2 mt-5 bg-[#FFCD1D] disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-default disabled:shadow-none disabled:scale-100 cursor-pointer rounded-4xl hover:scale-98 font-semibold hover:bg-[#E6B800]"
                        >
                          Save
                        </button>
                      </div>
                    )}
                    {isName && (
                      <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col py-6">
                          <legend className="px-1">Name</legend>
                          <input
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            type="text"
                            placeholder="Name"
                            className="w-100 h-15 border outline-none p-2 text-xl  rounded-xl"
                            onFocus={(e) => e.target.select()}
                          />
                        </div>

                        <button
                          onClick={() => {
                            setOpen(false);
                            editUser({
                              firstName: name,
                            });
                          }}
                          className="w-85 py-2 mt-5 bg-[#FFCD1D] cursor-pointer rounded-4xl hover:scale-98 font-semibold hover:bg-[#E6B800]"
                        >
                          Save
                        </button>
                      </div>
                    )}
                    {isUsername && (
                      <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col py-6">
                          <legend className="px-1">Username</legend>
                          <input
                            value={username}
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                            type="text"
                            placeholder="Username"
                            className="w-100 h-15 border outline-none p-2 text-xl  rounded-xl"
                            onFocus={(e) => e.target.select()}
                          />
                        </div>

                        <button
                          onClick={() => {
                            setOpen(false);
                            editUser({
                              userName: username,
                            });
                          }}
                          className="w-85 py-2 mt-5 bg-[#FFCD1D] cursor-pointer rounded-4xl hover:scale-98 font-semibold hover:bg-[#E6B800]"
                        >
                          Save
                        </button>
                      </div>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
            <ToastContainer />
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
