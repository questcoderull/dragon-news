import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  return (
    <div className="bg-white shadow-md rounded-lg space-y-4 border border-base-300  mb-7">
      {/* Header */}
      <div className="flex justify-between items-center bg-base-200 p-5">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), "dd-MM-yyyy")}
            </p>
          </div>
        </div>
        <div className="flex space-x-3 text-xl text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>
      <div div className="p-4">
        {/* Title */}
        <h2 className="font-bold text-lg lg:text-xl">{title}</h2>

        {/* Thumbnail */}
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-lg object-cover"
        />

        {/* Details */}
        <p className="text-gray-600 text-sm mb-5">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
          <span className="text-orange-500 font-semibold cursor-pointer">
            {" "}
            Read More
          </span>
        </p>

        {/* Footer: Rating and Views */}
        <div className="flex justify-between items-center border-t border-base-300 ">
          <div className="flex items-center space-x-1 text-orange-500 pt-5">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
            <span className="ml-2 text-black">{rating.number}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
