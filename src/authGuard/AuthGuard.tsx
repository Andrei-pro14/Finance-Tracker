import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AuthGuard() {
  const authPage = [
    "/dashboard",
    "/user-page",
    "/expenses",
    "/incomes",
    "/search-page",
    "/reports",
    "/settings",
  ];
  const authLogin = ["/login", "/register"];
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token && authPage.includes(window.location.pathname)) {
      navigate("/login");
    } else if (token && authLogin.includes(window.location.pathname)) {
      navigate("/");
    }
  }, [window.location.pathname]);
  return null;
}
export default AuthGuard;
