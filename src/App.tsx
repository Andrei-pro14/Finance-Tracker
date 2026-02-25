import { Route, Routes } from "react-router-dom";
import route from "./router.tsx";
import NavbarLayout from "./components/layout/NavbarLayout.tsx";
import AuthGuard from "./authGuard/AuthGuard.tsx";
import { useEffect } from "react";

function App() {
  const darkMode = localStorage.getItem("dark");
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("dark");
    if (isDarkMode === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div>
      <AuthGuard />
      <Routes>
        {route.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <NavbarLayout showNavbar={route.showNavbar}>
                {route.element}
              </NavbarLayout>
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
