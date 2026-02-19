import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "lucide-react";

interface DescriptionDialogProps {
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  openDialog: boolean;
  description: string | undefined;
}

export default function DescriptionDialog({
  setOpenDialog,
  openDialog,
  description,
}: DescriptionDialogProps) {
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
                  Description
                  <span
                    onClick={() => {
                      setOpenDialog(false);
                    }}
                    className="hover:text-red-600 rounded-lg transition-all cursor-pointer justify-center items-center "
                  >
                    <XIcon size={20} />
                  </span>
                </Dialog.Title>

                <div className="mt-5 text-sm text-gray-600">{description}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
