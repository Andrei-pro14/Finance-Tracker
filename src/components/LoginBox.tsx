import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function LoginBox() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const notity = () => toast.error("Already exist this user");
  const gmailError = () => toast.error("Gmail must contain @ and gmail.com");
  const confirmPassError = () =>
    toast.error("Password doesn’t match with the Confirm Password");

  const handleRegister = async () => {
    const newUser = {
      firstName,
      lastName,
      userName,
      gmail,
      password,
      confirmPass,
      phoneNumber,
    };

    const res = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    return await res.json();
  };

  return (
    <div className="flex flex-col w-full min-h-[865px] md:min-h-[633px] lg:min-h-dvh justify-center items-center">
      <h1 className="flex text-3xl font-bold">Creează un cont gratuit</h1>
      <p className="text-[#6F6B64] p-2">Completeaza cerintele de mai jos</p>
      <div className="flex flex-row mt-6">
        <div className="flex flex-col">
          <label className="flex ml-3 text-gray-700">First Name</label>
          <input
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            type="text"
            placeholder="First Name"
            className="flex outline-none border border-gray-500 rounded-xl min-w-50 min-h-13 p-2 m-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="flex ml-3 text-gray-700">Last Name</label>
          <input
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
            type="text"
            placeholder="Last Name"
            className="flex outline-none border border-gray-500 rounded-xl min-w-50 min-h-13 p-2 m-2"
          />
        </div>
      </div>
      <div className="flex flex-col">
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
          value={gmail}
          onChange={(event) => {
            setGmail(event.target.value);
          }}
          type="text"
          placeholder="Gmail"
          className="flex outline-none border border-gray-500 rounded-xl min-w-104 min-h-13 p-2 m-2"
        />

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
        <label className="flex ml-3 text-gray-700">Phone Number</label>
        <input
          value={phoneNumber}
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
          type="number"
          placeholder="Phone Number (optional)"
          className="flex outline-none border border-gray-500 rounded-xl min-w-104 min-h-13 p-2 m-2"
        />
      </div>
      <button
        onClick={async () => {
          const res = await fetch("http://localhost:5000/user");
          const data = await res.json();

          const identical = data.some(
            (user: any) => userName === user.userName || gmail === user.gmail,
          );
          if (identical) {
            localStorage.removeItem("userToken");
            navigate("/login");
            notity();
            return;
          }
          if (!gmail.includes("@gmail.com")) {
            localStorage.removeItem("userToken");
            navigate("/login");
            gmailError();
            return;
          }
          if (password !== confirmPass) {
            localStorage.removeItem("userToken");
            navigate("/login");
            confirmPassError();
            return;
          }

          await handleRegister();
          localStorage.setItem("userToken", Date.now().toString());
          navigate("/dashboard");
        }}
        disabled={
          firstName === "" ||
          lastName === "" ||
          userName === "" ||
          gmail === "" ||
          password === "" ||
          confirmPass === ""
        }
        className="flex px-40 py-2 md:w-auto justify-center mt-2 hover:bg-[#FFBA33] transition-all hover:shadow-xl disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-default disabled:shadow-none cursor-pointer items-center font-bold text-lg rounded-4xl bg-[#FFCD1D]"
      >
        Continua
      </button>
      <ToastContainer />
    </div>
  );
}
export default LoginBox;
