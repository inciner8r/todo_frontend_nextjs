import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
interface userInput {
  username: string;
  password: string;
}

const Login = () => {
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      router.push("/todos");
    }
  }, []);

  const [UserInput, setUserInput] = useState<userInput>({
    username: "",
    password: "",
  });
  const router = useRouter();

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputString = JSON.stringify(UserInput);
    const postResponse = await axios
      .post("http://localhost:8080/login", UserInput)
      .then((res) => {
        localStorage.setItem("jwt", res.data["jwt"]);
        router.push("/todos");
      });
  };

  return (
    <div className="register-container items-center flex flex-col">
      <div className="register-title my-10 text-3xl">Login</div>
      <div className="register-container border-solid border-black border-2 pb-3 px-5">
        <form className="form flex flex-col" onSubmit={(e) => loginUser(e)}>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
