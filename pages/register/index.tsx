import React from "react";

const Register = () => {
  return (
    <div className="register-container items-center flex flex-col">
      <div className="register-title my-10 text-3xl">Register</div>
      <div className="register-container border-solid border-black border-2 pb-3 px-5">
        <div className="form flex flex-col">
          <label htmlFor="username" className="mt-3 ml-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            id=""
            className="border-solid border-black border-2 rounded-lg px-2 py-1"
          />
          <label htmlFor="email" className="mt-3 ml-1">
            Email
          </label>
          <input
            type="text"
            name="email"
            id=""
            className="border-solid border-black border-2 rounded-lg px-2 py-1"
          />
          <label htmlFor="password" className="mt-3 ml-1">
            password
          </label>
          <input
            type="text"
            name="password"
            id=""
            className="border-solid border-black border-2 rounded-lg px-2 py-1"
          />
          <button
            type="submit"
            className="submit flex items-start mt-5 border-solid border-2 bg-slate-500 w-fit p-2 rounded-xl"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
