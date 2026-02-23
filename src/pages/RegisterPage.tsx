import IntroductionRegisterPage from "../components/IntroductionRegisterPage.tsx";
import RegisterBox from "../components/RegisterBox.tsx";

function RegisterPage() {
  return (
    <div className="flex flex-col lg:flex-row">
      <IntroductionRegisterPage />
      <RegisterBox />
    </div>
  );
}
export default RegisterPage;
