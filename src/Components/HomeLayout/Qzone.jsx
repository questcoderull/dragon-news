import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playGroundImg from "../../assets/playground.png";
const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h1 className="font-bold mb-5">I am zone</h1>

      <div className="space-y-5 flex justify-center">
        <div>
          <img src={swimmingImg} alt="" />
          <img src={classImg} alt="" />
          <img src={playGroundImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Qzone;
