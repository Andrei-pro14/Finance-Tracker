import { Route, Routes } from "react-router-dom";
import route from "./router.tsx";
import NavbarLayout from "./components/layout/NavbarLayout.tsx";
import AuthGuard from "./authGuard/AuthGuard.tsx";
import { useUserStore } from "./stores/useUserStore.ts";
import { useEffect } from "react";

function App() {
  const { user, setUser } = useUserStore();
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data[data.length - 1]);
      });
  }, []);
  const darkMode = localStorage.getItem("dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  console.log(user);
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
