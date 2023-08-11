import { Carousel } from "antd";
import { Link } from "react-router-dom";
import "./carousel.css";
import NoImage from "../image/no-image-available-icon-6.png";

const CarouselNews = ({ newsData }) => {
  return (
    <div className="carousel">
      <Carousel autoplay>
        {newsData.map((news) => (
          <Link to={news.url} key={news.uri} target={"_blank"}>
            <h1>{news.title}</h1>
            <img src={news.image === null ? NoImage : news.image} style={{}} />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselNews;
