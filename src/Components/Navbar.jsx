import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("succesful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center mt-10  w-11/12 mx-auto">
      <div>
        {user ? (
          <div className="border border-secondary py-2 px-5 rounded hover:text-white hover:bg-secondary transition">
            {user.email}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="w-12  rounded"
          src={`${user ? user.photo_url : userIcon}`}
          alt=""
        />
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary px-10"
            type="button"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-primary px-10"
            type="button"
          >
            Login{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
