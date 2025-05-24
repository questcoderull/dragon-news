import React from "react";
import { Link } from "react-router";

const NewsDetailsCatd = ({ news }) => {
  // console.log(news);
  return (
    <div className="space-y-5">
      <img
        className="w-full h-[350px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h1 className="text-2xl">{news.title}</h1>

      <p>{news.details}</p>

      <Link to={`/category/${news.category_id}`} className="btn btn-secondary">
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCatd;
