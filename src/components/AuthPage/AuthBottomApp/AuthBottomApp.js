import { Col, Row } from "antd";
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";
import React from "react";
import "./AuthBottomApp.css";
import IconJoin from "../../../assets/png/app_chat.png";
import { RoundButton } from "components/ButtonWidget/RoundButton/RoundButton";
const AuthBottomApp = (props) => {
  const screenWidthSize = window.innerWidth;
  return (
    <div className="auth-app-rect">
      <Row className="auth-app-main" justify="space-between" align="center">
          <Col xs={24} md={12} className="p-50">
            <div className="font-18 bold blue mt-30">HAVING TROUBLE ON THE APP?</div>
            <div className="font-36 bold white mt-20">
            Reach out to our support agent on
            </div>
            <div className="font-36 bold white">
            the app for assistance
            </div>
          </Col>
          <Col xs={24} md={12} className="pr-30">
            <img src={IconJoin} className="auth-app-user-img" />
          </Col>
        </Row>
    </div>
  );
};

export default AuthBottomApp;
