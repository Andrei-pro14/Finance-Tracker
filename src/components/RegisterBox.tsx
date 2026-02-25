import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.ts";
import { useUserStore } from "../stores/useUserStore.ts";

function RegisterBox() {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [userCredentials, setUserCredentials] = useState<any>();
  const [error, setError] = useState<any>();

  const handleRegister = async (email: string, password: string) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredentials.user, {
        displayName: userName,
      });
      const userData = {
        email: userCredentials.user.email,
        username: userCredentials.user.displayName,
      };
      setUser(userData);
      setUserCredentials(userCredentials.user);
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
      <h1 className="flex text-3xl font-bold">Creează un cont gratuit</h1>
      <p className="text-[#6F6B64] p-2">Completeaza cerintele de mai jos</p>
      <div className="flex flex-row mt-6"></div>
      <div className="flex flex-col gap-2">
        <label className="flex ml-3 text-gray-700">Username</label>
        <input
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          type="text"
          placeholder="Username"
          className="flex outline-none border border-gray-500 rounded-xl min-w-104 min-h-13 p-2 m-2"
        />

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
        {error === "auth/email-already-in-use" ? (
          <div className="flex items-center max-w-80 max-h-6 -mt-2 rounded-sm ml-3 border border-red-500  text-red-500">
            <p className="flex ml-2 text-md">Already exist this user!</p>
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
        {error === "auth/weak-password" && (
          <div className="flex items-center max-w-80 max-h-6 -mt-2 rounded-sm ml-3 border border-red-500  text-red-500">
            <p className="flex ml-2 text-md">
              Password should be at least 6 characters!
            </p>
          </div>
        )}

        <label className="flex ml-3 text-gray-700">Confirm Password</label>
        <input
          value={confirmPass}
          onChange={(event) => {
            setConfirmPass(event.target.value);
          }}
          type="password"
          placeholder="Confirm Password"
          className="flex outline-none border border-gray-500 rounded-xl min-w-104 min-h-13 p-2 m-2"
        />
        {error === "Password doesn’t match with the Confirm Password" && (
          <div className="flex items-center max-w-80 min-h-8 -mt-2 rounded-sm ml-3 border border-red-500 text-red-500">
            <p className="flex ml-2 text-md">
              Confirm Password doesn’t match with the Password!
            </p>
          </div>
        )}
      </div>
      <button
        onClick={() => {
          if (confirmPass === password || !error) {
            handleRegister(email, password);
            setError("");
          } else {
            setError("Password doesn’t match with the Confirm Password");
          }
        }}
        disabled={
          userName === "" ||
          email === "" ||
          password === "" ||
          confirmPass === ""
        }
        className="flex px-40 py-2 md:w-auto justify-center mt-3 hover:bg-[#FFBA33] transition-all hover:shadow-xl disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-default disabled:shadow-none cursor-pointer items-center font-bold text-lg rounded-4xl bg-[#FFCD1D]"
      >
        Register
      </button>
    </div>
  );
}
export default RegisterBox;
