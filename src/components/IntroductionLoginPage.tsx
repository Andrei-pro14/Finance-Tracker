function IntroductionRegisterPage() {
  return (
    <div className="flex w-full min-h-22 md:w-full md:min-h-80 lg:max-w-6/12 lg:min-h-dvh bg-[#16120A] justify-center items-center flex-col">
      <div className="hidden lg:block md:block justify-center items-center">
        <h1 className="flex font-bold text-3xl justify-center items-center text-white p-4">
          Aducem ordine în banii tăi
        </h1>
        <p className="flex text-[#A2A09D] p-4 justify-center items-center mx-auto max-w-150 text-center font-bold">
          Folosește CashControl pentru a prelua controlul asupra finanțelor
          personale și află cum poți să economisești.
        </p>
      </div>
      <div className="block lg:hidden md:hidden justify-center items-center">
        <img
          src="https://www.cashcontrol.ro/_astro/logo_cashcontrol.BvNBZIxQ.svg"
          alt=""
          className="w-50"
        />
      </div>
    </div>
  );
}
export default IntroductionRegisterPage;
