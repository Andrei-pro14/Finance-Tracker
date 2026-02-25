import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.ts";
import { useUserStore } from "../stores/useUserStore.ts";

function RegisterBox() {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCredentials, setUserCredentials] = useState<any>();
  const [error, setError] = useState<any>();

  // const handleRegister = async (email: string, password: string) => {
  //     try {
  //         const userCredentials = await createUserWithEmailAndPassword(
  //             auth,
  //             email,
  //             password,
  //         );
  //         await updateProfile(userCredentials.user, {
  //             displayName: userName,
  //         });
  //         const userData = {
  //             email: userCredentials.user.email,
  //             username: userCredentials.user.displayName,
  //         };
  //         setUser(userData);
  //         setUserCredentials(userCredentials.user);
  //     } catch (error: any) {
  //         setError(error.code);
  //     }
  // };
  const handleLogin = async (email: string, password: string) => {
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const userData = {
        email: userCredential.user.email,
        username: userCredential.user.displayName,
      };
      console.log("login user data:", userCredential);
      setUser(userData);
      setUserCredentials(userCredential.user);
    } catch (error: any) {
      setError(error.code);
    }
  };

  useEffect(() => {
    const accessToken = userCredentials?.accessToken;
    if (accessToken !== undefined) {
      localStorage.setItem("accessToken", accessToken);
      navigate("/dashboard");
    }
  }, [userCredentials]);
  console.log(error);
  return (
    <div className="flex flex-col w-full min-h-[865px] md:min-h-[633px] lg:min-h-dvh justify-center items-center">
      <h1 className="flex text-3xl font-bold">Log in</h1>
      <p className="text-[#6F6B64] p-2">Completeaza cerintele de mai jos</p>
      <div className="flex flex-row mt-6"></div>
      <div className="flex flex-col gap-2">
        <label className="flex ml-3 text-gray-700">Gmail</label>
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="text"
          placeholder="Gmail"
          className="flex outline-none border border-gray-500 rounded-xl min-w-104 min-h-13 p-2 m-2"
        />
        {error === "auth/invalid-email" ? (
          <div className="flex items-center max-w-80 max-h-6 -mt-2 rounded-sm ml-3 border border-red-500  text-red-500">
            <p className="flex ml-2 text-md">You put here an invalid email!</p>
          </div>
        ) : (
          ""
        )}

        <label className="flex ml-3 text-gray-700">Password</label>
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          placeholder="Password"
          className="flex outline-none border border-gray-500 rounded-xl min-w-104 min-h-13 p-2 m-2"
        />
        {error === "auth/invalid-credential" && (
          <div className="flex items-center max-w-[95%] max-h-6 -mt-2 rounded-sm ml-3 border border-red-500  text-red-500">
            <p className="flex ml-2 text-md">
              Something is wrong with email or password!
            </p>
          </div>
        )}
        <div className="flex max-w-100 flex-row mt-2 gap-2">
          <p className="flex ml-3 text-gray-500 italic">
            If you dont have account:
          </p>
          <a href="/register">Register</a>
        </div>
      </div>
      <button
        onClick={() => {
          handleLogin(email, password);
        }}
        disabled={email === "" || password === ""}
        className="flex px-40 py-2 md:w-auto justify-center mt-7 hover:bg-[#FFBA33] transition-all hover:shadow-xl disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-default disabled:shadow-none cursor-pointer items-center font-bold text-lg rounded-4xl bg-[#FFCD1D]"
      >
        Log in
      </button>
    </div>
  );
}
export default RegisterBox;
