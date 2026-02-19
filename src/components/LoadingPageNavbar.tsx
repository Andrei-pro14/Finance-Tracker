import { useNavigate } from "react-router-dom";
import { User2Icon } from "lucide-react";
import { useUserStore } from "../stores/useUserStore.ts";

function LoadingPageNavbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
  const { user } = useUserStore();

  return (
    <div className="mx-auto max-w-screen-lg h-[60px] flex flex-row items-center justify-between w-full ">
      <span>
        <img
          src="https://www.cashcontrol.ro/_astro/logo_cashcontrol.BvNBZIxQ.svg"
          alt=""
          className="w-50"
        />
      </span>
      {token ? (
        <button
          onClick={() => {
            navigate("/user-page");
          }}
          className="flex px-3 py-3 rounded-4xl gap-2 font-bold hover:bg-[#FFCD1D] hover:cursor-pointer hover:scale-98 bg-white border border-gray-200 dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500"
        >
          <User2Icon />{" "}
          <p>
            {user?.firstName} {user?.lastName}
          </p>
        </button>
      ) : (
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="flex px-4 py-2 rounded-4xl font-bold hover:bg-[#FFCD1D] hover:cursor-pointer hover:scale-98 bg-white border border-gray-200 dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500"
        >
          Cont nou
        </button>
      )}
    </div>
  );
}
export default LoadingPageNavbar;
