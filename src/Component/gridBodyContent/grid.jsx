import React from "react";
import { Col, Row } from "antd";
import "./grid.css";
import { Link } from "react-router-dom";

const Grid = ({ newsData }) => {
  const news1 = newsData[0];

  return (
    <div className="grid" style={{ width: "625px" }}>
      <Row>
        {newsData.map((news) => (
          <Col span={24} key={news.uri}>
            <Link to={news.url} style={{ color: "black" }}>
              <h3>{news.title}</h3>
              <img src={news.image} style={{ width: "300px" }} />
            </Link>
          </Col>
        ))}
      </Row>

      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>

      <Row>
        <Col span={24}>col</Col>
      </Row>
    </div>
  );
};

export default Grid;
