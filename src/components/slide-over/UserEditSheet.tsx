import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "lucide-react";
import { useUserStore } from "../../stores/useUserStore.ts";
import { ToastContainer } from "react-toastify";

interface SheetProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  username: any;
  setUsername: React.Dispatch<React.SetStateAction<any>>;
}

export default function UserEditSheet({
  open,
  setOpen,
  username,
  setUsername,
}: SheetProps) {
  const { editUser } = useUserStore();

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
                      Edit Username
                      <XIcon
                        onClick={() => {
                          setOpen(false);
                        }}
                        className="text-[#85827C] cursor-pointer hover:scale-95"
                      />
                    </Dialog.Title>
                    <div className="w-full h-px bg-[#E0E0E0] mt-4" />
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
                            username: username,
                          });
                        }}
                        className="w-85 py-2 mt-5 bg-[#FFCD1D] cursor-pointer rounded-4xl hover:scale-98 font-semibold hover:bg-[#E6B800]"
                      >
                        Save
                      </button>
                    </div>
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
