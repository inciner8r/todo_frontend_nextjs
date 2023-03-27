import axios from "axios";
import React, { FormEventHandler, useState } from "react";
interface userInput {
  username: string;
  email: string;
  password: string;
}
const Register = () => {
  const [UserInput, setUserInput] = useState<userInput>({
    username: "",
    email: "",
    password: "",
  });
  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputString = JSON.stringify(UserInput);
    const postResponse = await axios
      .post("http://localhost:8080/register", UserInput)
      .then((res) => console.log(res));
  };
  return (
    <div className="register-container items-center flex flex-col">
      <div className="register-title my-10 text-3xl">Register</div>
      <div className="register-container border-solid border-black border-2 pb-3 px-5">
        <form className="form flex flex-col" onSubmit={(e) => registerUser(e)}>
          <label htmlFor="username" className="mt-3 ml-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            id=""
            className="border-solid border-black border-2 rounded-lg px-2 py-1"
            value={UserInput.username}
            onChange={(e) =>
              setUserInput({ ...UserInput, [e.target.name]: e.target.value })
            }
          />
          <label htmlFor="email" className="mt-3 ml-1">
            Email
          </label>
          <input
            type="text"
            name="email"
            id=""
            className="border-solid border-black border-2 rounded-lg px-2 py-1"
            value={UserInput.email}
            onChange={(e) =>
              setUserInput({ ...UserInput, [e.target.name]: e.target.value })
            }
          />
          <label htmlFor="password" className="mt-3 ml-1">
            password
          </label>
          <input
            type="password"
            name="password"
            id=""
            className="border-solid border-black border-2 rounded-lg px-2 py-1"
            value={UserInput.password}
            onChange={(e) =>
              setUserInput({ ...UserInput, [e.target.name]: e.target.value })
            }
          />
          <button
            type="submit"
            className="submit flex items-start mt-5 border-solid border-2 bg-slate-500 w-fit p-2 rounded-xl"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
