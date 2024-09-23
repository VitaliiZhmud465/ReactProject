import { Col, Row } from "antd";
import React from "react";
import "./AdvertiseDesc.css";
import IconTick from "../../../assets/png/ic_tick.png";
const CPCItem = (props) => {
  const { item } = props;
  return (
    <div className="cpc-item">
      <Row justify="space-between">
        <Col>
          <span className="font-14 bold">Benefit #{item.key}</span>
          <span className="font-14"> - Explanation of Benefit</span>
        </Col>
        <Col>
          <img src={IconTick} className="tick-img" />
        </Col>
      </Row>
    </div>
  );
};

export default CPCItem;
