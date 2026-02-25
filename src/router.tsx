import LoadingPage from "./pages/LoadingPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import Expenses from "./pages/Expenses.tsx";
import Incomes from "./pages/Incomes.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import Reports from "./pages/Reports.tsx";
import Settings from "./pages/Settings.tsx";
import LoginPage from "./pages/LoginPage.tsx";

const route = [
  {
    path: "/",
    element: <LoadingPage />,
    showNavbar: false,
  },
  {
    path: `/dashboard`,
    element: <DashboardPage />,
    showNavbar: true,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    showNavbar: false,
  },
  {
    path: "/login",
    element: <LoginPage />,
    showNavbar: false,
  },
  {
    path: "/user-page",
    element: <UserPage />,
    showNavbar: true,
  },
  {
    path: "/expenses",
    element: <Expenses />,
    showNavbar: true,
  },
  {
    path: "/incomes",
    element: <Incomes />,
    showNavbar: true,
  },
  {
    path: "/search-page",
    element: <SearchPage />,
    showNavbar: true,
  },
  {
    path: "/reports",
    element: <Reports />,
    showNavbar: true,
  },
  {
    path: "/settings",
    element: <Settings />,
    showNavbar: true,
  },
];

export default route;
