import React from "react";
import useFetchNews from "../../hook/useFetchNews";
import NewsList from "../../Component/NewsList/newList";
import { useSelector } from "react-redux";
import "./src.css";

const Source = () => {
  const user = useSelector((state) => state.user);
  // const { data } = src;

  const { data: sourceNews } = useFetchNews(
    `sourceUri=${user.src}&articlesCount=20`
  );
  return (
    <div className="sourceContentSearch">
      <div className="news">
        <h1> News: #{user.src}</h1>
        <NewsList getnews={sourceNews} />
      </div>
    </div>
  );
};

export default Source;
