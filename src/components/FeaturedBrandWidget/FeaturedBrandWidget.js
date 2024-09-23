import { Row, Col } from "antd";
import React from "react";
import "./FeaturedBrandWidget.css";
const FeaturedBrandWidget = (props) => {
  const { dataList, all, onClick } = props;
  if (dataList == undefined) return;
  return (
    <Row gutter={[4, 2]}>
      {dataList.map((x, index) => {
        return (
          <Col key={index} md={6}>
            <div className="featured-brand-item" onClick={onClick}>
              <img src={x.logo} className="featured-brand-item-img"/>
              <p className="font-12">{x.title}</p>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default FeaturedBrandWidget;
