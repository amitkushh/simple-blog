import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center my-10 px-10">
      <div className=" flex flex-col justify-center items-center p-10 bg-blue-300 rounded-lg">
        <h1 className="text-2xl font-semibold mb-5 text-white">Login</h1>
        <form
          action=""
          className="flex flex-col justify-center items-center gap-5"
        >
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            className="py-2 w-full pl-2 rounded-md"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
            className="py-2 w-full pl-2 rounded-md"
          />
          <button className="bg-blue-700 mt-5 rounded-md px-4 py-2 hover:bg-blue-400 text-white">
            Login
          </button>
          <span className="capitalize text-center">
            If you have already an account{" "}
            <Link to="/sign-up">
              <b>click here</b>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
