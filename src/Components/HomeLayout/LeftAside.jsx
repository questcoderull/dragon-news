import React, { Suspense } from "react";
import Categories from "./Categories";

const LeftAside = () => {
  return (
    <div className="text-center">
      <Suspense
        fallback={<span className="loading loading-dots loading-xl "></span>}
      >
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
