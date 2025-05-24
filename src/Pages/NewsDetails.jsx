import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightAside from "../Components/HomeLayout/RightAside";
import NewsDetailsCatd from "../Components/NewsDetailsCatd";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(data);

  const [news, setNews] = useState({});
  // console.log(news);

  useEffect(() => {
    const NewsDetails = data.find((singleNews) => singleNews.id == id);

    setNews(NewsDetails);
  }, [data, id]);

  return (
    <div>
      <header className="pt-3">
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h1 className="font-semibold mb-5">News Details</h1>
          <NewsDetailsCatd news={news}></NewsDetailsCatd>
        </section>

        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
