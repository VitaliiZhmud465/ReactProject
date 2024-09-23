import { Col, Row } from "antd";
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";
import React from "react";
import "./AboutApp.css";
import IconDownload from "../../../assets/png/ic_download.png";
import IconEdit from "../../../assets/png/ic_edit.png";
import IconBag from "../../../assets/png/ic_bag.png";
import { CircleShadowButton } from "components/ButtonWidget/CircleShadowButton/CircleShadowButton";
const AboutApp = (props) => {
  const screenWidthSize = window.innerWidth;
  return (
    <div className="about-app-rect">
      <Row className="about-app-main" justify="start" align="center">
        <Col md={12} className="p-50">
          <div className="font-18 bold blue">3 SIMPLE STEMPS</div>
          <div className="font-36 bold white mt-20">
            Is all it takes to get started
          </div>
          <div className="font-36 bold white">
            on the SeeMeSaveApp
          </div>
        </Col>
        <Col md={12} className="p-50">
          <Row gutter={[20, 20]}>
            <Col>
              <CircleShadowButton text="Download" src={IconDownload} />
            </Col>
            <Col>
              <CircleShadowButton text="Sign Up" src={IconEdit} />
            </Col>
            <Col>
              <CircleShadowButton text="Shop" src={IconBag} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutApp;
