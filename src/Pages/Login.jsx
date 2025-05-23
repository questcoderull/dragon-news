import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="font-semibold text-2xl text-center mb-10 mt-5">
            Login your account
          </h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>

          <p className="mt-3 font-semibold text-center">
            Dont’t Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
