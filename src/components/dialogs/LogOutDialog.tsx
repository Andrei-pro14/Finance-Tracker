import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

interface DescriptionDialogProps {
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  openDialog: boolean;
}

export default function LogOutDialog({
  setOpenDialog,
  openDialog,
}: DescriptionDialogProps) {
  const navigate = useNavigate();
  return (
    <>
      <Transition appear show={openDialog} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            setOpenDialog(false);
          }}
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
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl border border-gray-200 dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500">
                <Dialog.Title className="text-lg flex justify-between font-semibold text-gray-900 dark:text-white transition-colors duration-500">
                  Log out warning
                </Dialog.Title>

                <div className="flex flex-col justify-center mt-5 text-sm text-gray-600 dark:text-white transition-colors duration-500">
                  If you log out you will lose all the finance. <br />
                  <i>Are you sure?</i>
                </div>
                <div className="flex flex-row justify-end gap-3 mt-2 text-white">
                  <button
                    onClick={() => {
                      setOpenDialog(false);
                    }}
                    className="flex px-4 py-2 rounded-lg bg-gray-500 cursor-pointer hover:scale-99"
                  >
                    No
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem("userToken");
                      localStorage.removeItem("expense-storage");
                      navigate("/");
                    }}
                    className="flex px-4 py-2 rounded-lg bg-gray-300 cursor-pointer hover:scale-99"
                  >
                    Yes
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
