import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="font-semibold text-2xl text-center mb-10 mt-5">
            Register your account
          </h1>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input type="name" className="input" placeholder="Name" />

            {/* PhotUrl */}
            <label className="label">Photo URL</label>
            <input type="name" className="input" placeholder="Photo URL" />

            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>

          <p className="mt-3 font-semibold text-center">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-secondary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
