import LoadingPageNavbar from "../components/LoadingPageNavbar.tsx";
import { useNavigate } from "react-router-dom";

function LoadingPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  return (
    <div className="min-w-full min-h-dvh relative bg-[#000000] overflow-hidden">
      <LoadingPageNavbar />

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-400 rounded-full blur-[160px] opacity-30" />

      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-yellow-400 rounded-full blur-[180px] opacity-25" />

      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange-300 rounded-full blur-[150px] opacity-20" />

      <div className="relative z-10 mx-auto pt-24 w-full md:max-w-screen-lg flex-grow flex flex-col items-center justify-center px-6">
        <h1 className="flex mx-auto text-2xl text-white font-medium gap-2 md:text-4xl lg:text-5xl">
          Aducem{" "}
          <p className="underline mx-auto decoration-[#FFCD1D]">ordine</p> în{" "}
          <p className="underline mx-auto decoration-[#FFCD1D] ">
            finanțele tale
          </p>
        </h1>

        <h2 className="text-sm md:text-md lg:text-xl text-white/50 text-center w-full md:max-w-[880px] py-5">
          Urmărește-ți toate cheltuielile, veniturile, facturile și
          împrumuturile pentru a afla ce se întâmplă cu banii tăi. Folosește
          CashControl și preia controlul banilor tăi și află cum să
          economisești.
        </h2>

        {token ? (
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className="flex w-full md:px-4 py-2 md:w-auto justify-center cursor-pointer items-center font-bold text-lg rounded-4xl bg-[#FFCD1D]"
          >
            Mergi spre Dashboard
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="flex w-full md:px-4 py-2 md:w-auto justify-center cursor-pointer items-center font-bold text-lg rounded-4xl bg-[#FFCD1D]"
          >
            Creează un cont gratuit
          </button>
        )}

        <div className="hidden lg:block pt-[206px] align-computer-container">
          <img
            src="https://www.cashcontrol.ro/_astro/banner_home_desktop.CrfZXqEb_Z1XGoCK.webp"
            alt=""
          />
        </div>

        <div className="z-40 hidden md:block lg:hidden pt-[98px] align-laptop-container">
          <img
            src="https://www.cashcontrol.ro/_astro/banner_home_tablet.1SRyP0O2_ZxXnbV.webp"
            alt=""
          />
        </div>

        <div className="z-40 md:hidden pt-[247px] align-phone-container">
          <img
            src="https://www.cashcontrol.ro/_astro/banner_home_mobile.CK1yCBw7_sgbxt.webp"
            alt="Cash Mobile"
            width="342"
            height="315"
          />
        </div>
      </div>

      <footer className="min-w-full h-20 flex flex-row justify-center items-center text-[#82807B] gap-4 p-5 absolute bottom-0 bg-[#27251C]">
        <span>Also available by phone:</span>
        <a href="https://play.google.com/store/apps/details?id=com.mindmagnetsoftware.cashcontrol">
          <img
            src="https://www.cashcontrol.ro/_astro/apps_googleplay.BsTHq1Zo.svg"
            alt=""
          />
        </a>
        <a href="https://apps.apple.com/us/app/cashcontrol/id1512914049">
          <img
            src="https://www.cashcontrol.ro/_astro/apps_appstore.4Dxv5TkH.svg"
            alt=""
          />
        </a>
      </footer>
    </div>
  );
}

export default LoadingPage;
