import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3 mt-10 mb-10">
      <img src={logo} alt="logo" />
      <p className="text-accent">Journalism Without Fear or Favour</p>

      {/* showing date dynamically */}

      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE , MMMM  MM ,  yyyy")}
      </p>
    </div>
  );
};

export default Header;
