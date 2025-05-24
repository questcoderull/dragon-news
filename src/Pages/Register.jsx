import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    // console.log({ name, email, photoURL, password });

    // calling the function for creating a new user.

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="font-semibold text-2xl text-center mb-10 mt-5">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="name"
              className="input"
              placeholder="Name"
              required
            />

            {/* PhotUrl */}
            <label className="label">Photo URL</label>
            <input
              name="photoURL"
              type="name"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </form>

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
