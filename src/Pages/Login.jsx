import React, { use } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { logIn } = use(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="font-semibold text-2xl text-center mb-10 mt-5">
            Login your account
          </h1>
          <form onSubmit={handleLogIn} className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>

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
