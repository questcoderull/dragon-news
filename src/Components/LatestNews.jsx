import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 p-3 bg-base-200">
      <p className="text-base-100 bg-secondary px-3 py-2 font-bold">Latest</p>
      <Marquee pauseOnHover={true} speed={60}>
        <p className=" font-bold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
