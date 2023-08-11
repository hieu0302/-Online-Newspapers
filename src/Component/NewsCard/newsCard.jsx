import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoImage from "../image/no-image-available-icon-6.png";
import { useDispatch } from "react-redux";
import { update } from "../../redux/srcSlice";
import Moment from "react-moment";
import "./NewsCard.css";

const NewsCard = ({ data }) => {
  const [listItem, setListItem] = useState([]);

  const dispatch = useDispatch();
  if (data) {
    const { source, title, image, url, dateTime, uri } = data;
    const handleOnclick = () => {
      const updateSrc = {
        src: source.uri,
      };
      dispatch(update(updateSrc));
    };

    const onClickId = () => {
      setListItem((prevList) => [...prevList, uri]);
      localStorage.getItem("id", JSON.stringify(listItem));
    };
    console.log(listItem);

    return (
      <div className="card">
        <Link
          onClick={onClickId}
          className="linkCard"
          to={url}
          target={"_blank"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="zoomImage">
            <img src={!image ? NoImage : image} />
          </div>
          <div className="title">
            <h3 title={title}>{title}</h3>
          </div>
        </Link>
        <div className="timeSrc">
          <Link
            onClick={handleOnclick}
            to={"/soure"}
            style={{
              textDecoration: "none",
              fontSize: "0.8rem",
            }}
            className="src"
          >
            #{source.uri}
          </Link>
          <br />
          <Moment fromNow style={{ color: "gray", fontSize: "0.8rem" }}>
            {dateTime}
          </Moment>
        </div>
      </div>
    );
  } else return null;
  // const { content } = data;
  // console.log(content);
};

export default NewsCard;

// fetch(
//   "https://api.newscatcherapi.com/v2/latest_headlines?topic=sport&lang=vi",
//   {
//     headers: {
//       "x-api-key": "-ZUcL34lfBIRTMi2dCkfyByAAdbJ1skX0k9ju28VvS4",
//     },
//   }
// )
//   .then((response) => response.json())
//   .then((json) => setData(json));
