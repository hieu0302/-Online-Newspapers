import useFetchNews from "../../hook/useFetchNews";
import NewsList from "../../Component/NewsList/newList";
import { useSelector } from "react-redux";
import Background from "../../Component/image/sports1.jpg";
import "./sport.css";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Sports = () => {
  //   const user = useSelector((state) => state.user);
  // const { data } = src;

  const { data: news1 } = useFetchNews(
    `categoryUri=news/Sports&sourceUri=skysports.com&keyword=fifa&articlesCount=1`
  );

  const { data: news2 } = useFetchNews(
    `sourceUri=espn.com&keyword=fifa&articlesCount=1`
  );
  const { data: news3 } = useFetchNews(`sourceUri=90min.com&articlesCount=1`);
  const { data: news4 } = useFetchNews(
    `sourceUri=espn.com&keyword=tennis&articlesCount=1`
  );
  const { data: news5 } = useFetchNews(
    `sourceUri=foxsports.com&articlesCount=1`
  );

  const { data: news6 } = useFetchNews(
    `sourceUri=foxsports.com&articlesCount=20`
  );

  return (
    <div
      className="sourceContent"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="news">
        <h1> Sports</h1>
      </div>
      <div>
        <div class="wrapper">
          <div class="box item1">
            <NewsList getnews={news1} />
          </div>
          <div class="box item2">
            <NewsList getnews={news2} />
          </div>
          <div class="box item2">
            <NewsList getnews={news3} />
          </div>
          <div class="box item2">
            <NewsList getnews={news4} />
          </div>
          <div class="box item2">
            <NewsList getnews={news5} />
          </div>
        </div>
      </div>
      <div className="contentUnder">
        <NewsList getnews={news6} />
      </div>
    </div>
  );
};

export default Sports;
