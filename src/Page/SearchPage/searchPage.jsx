import React, { useEffect, useState } from "react";
import useFetchNews from "../../hook/useFetchNews";
import NewsList from "../../Component/NewsList/newList";
import { useSelector } from "react-redux";
import "./searchPage.css";

const SearchNews = () => {
  const search = useSelector((state) => state.updateSearch);

  // const { data: searchNews } = useFetchNews(
  //   `keyword=${search.text}&articlesCount=20`
  // );
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://eventregistry.org/api/v1/article/getArticles?keyword=${search.text}&articlesCount=20&resultType=articles&includeArticleConcepts=true&includeArticleCategories=true&lang=eng&articlesSortBy=relevance&articleBodyLen=300&apiKey=13d0a4bb-beb5-474a-80f4-b73d3d3d05af`
        );
        const data = await response.json();
        setData(data.articles.results);
      } catch (error) {}
    };

    fetchData();
  }, [search]);

  return (
    <div className="searchContent">
      <div className="news">
        <h1> Search: #{search.text}</h1>
        <NewsList getnews={data} />
      </div>
    </div>
  );
};

export default SearchNews;
