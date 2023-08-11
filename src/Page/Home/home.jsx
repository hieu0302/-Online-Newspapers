import React from "react";
import useFetchNews from "../../hook/useFetchNews";
import NewsList from "../../Component/NewsList/newList";
import "./home.css";
import "./content.css";
import CarouselNews from "../../Component/Carousel/carousel";

const Home = () => {
  const { data: football } = useFetchNews(
    "sourceUri=sportskeeda.com&keyword=fifa&articlesCount=5"
    //
  );
  const { data: news } = useFetchNews("sourceUri=nytimes.com&articlesCount=10");
  const { data: news2 } = useFetchNews("articlesCount=3&keyword=hot");
  const { data: news3 } = useFetchNews(
    "categoryUri=news/Technology&articlesCount=5"
  );
  const { data: news4 } = useFetchNews(
    "categoryUri=	news/Arts_and_Entertainment&keyword=music&articlesCount=5"
  );
  const { data: Business } = useFetchNews(
    "keyword=trending&sourceUri:bbc24news.com&articlesCount=5"
  );

  return (
    <div className="home">
      <section className="main_body" style={{ display: "flex" }}>
        <div
          className="main_left"
          style={{
            width: "625px",
          }}
        >
          <CarouselNews newsData={news} />
          <div className="main_left_2">
            <NewsList getnews={news2} />
          </div>
          <div className=" underContent">
            <div className="titleContent">
              <h2>Sport</h2>
            </div>
            <NewsList getnews={football} />
          </div>
          <div className=" underContent">
            <div className="titleContent">
              <h2>Technology</h2>
            </div>
            <NewsList getnews={news3} />
          </div>
          <div className=" underContent">
            <div className="titleContent">
              <h2>Entertainment</h2>
            </div>
            <NewsList getnews={news4} />
          </div>
        </div>

        <div className="main_right">
          <h2 style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
            #Trending
          </h2>
          <NewsList getnews={Business} />
        </div>
      </section>
    </div>
  );
};

export default Home;
