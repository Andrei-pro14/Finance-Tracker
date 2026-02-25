import IntroductionLoginPage from "../components/IntroductionLoginPage.tsx";
import LoginBox from "../components/LoginBox.tsx";

function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row">
      <IntroductionLoginPage />
      <LoginBox />
    </div>
  );
}
export default LoginPage;
