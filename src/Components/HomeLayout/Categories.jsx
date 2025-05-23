import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => {
  return res.json();
});

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h1 className="font-bold text-center">
        All categories {categories.length}
      </h1>

      <div className="grid grid-cols-1 mt-5 gap-3 ">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className="btn bg-white border-0 font-semibold text-accent hover:bg-base-300"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
