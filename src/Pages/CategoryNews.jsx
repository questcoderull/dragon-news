import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredData = data.filter((news) => news.category_id == id);
      // console.log(filteredData);

      setCategoryNews(filteredData);
    }
  }, [id, data]);

  return (
    <div>
      <h1 className="text-center font-bold mb-4">
        Total <span className="text-secondary">{categoryNews.length} </span>{" "}
        news found
      </h1>

      <div className="grid grid-cols-1">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
