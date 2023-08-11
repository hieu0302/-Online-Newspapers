import React from "react";
import useFetchNews from "../../hook/useFetchNews";
import NewsList from "../../Component/NewsList/newList";
import { useSelector } from "react-redux";

const Recently = () => {
  return (
    <div className="sourceContentSearch">
      <div className="news">
        <h1> #Recently: </h1>
      </div>
    </div>
  );
};

export default Recently;
