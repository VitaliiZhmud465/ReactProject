import React, { useEffect, useState } from "react";
import { Row, Col, Drawer } from "antd";
import Logo from "../../assets/png/logo.png";
import {
  NAV_MENU_IMTES
} from "constants/navigation_constants";
import { useHistory } from "react-router-dom";
import "./HomeLayout.css";
import { RoundButton } from "components/ButtonWidget/RoundButton/RoundButton";
import { IconWidget } from "components/IconWidget/IconWidget";
import { MenuOutlined } from "@ant-design/icons";
import { ROUTE_LOGIN, ROUTE_SIGNUP } from "constants/navigation_constants";
const NavDrawer = () => {
  const history = useHistory();
  const getActiveLink = (route) => {
    if (history.location.pathname == route) {
      return true;
    } else {
      if (route != "/" && history.location.pathname.includes(route)) {
        return true;
      }
    }
    return false;
  };
  const menuUI = NAV_MENU_IMTES.map((info, index) => {
    return (
      <Col
        className={`nav-menu-item ${getActiveLink(info.route) ? "active" : ""}`}
        key={index}
        onClick={() => {
          history.push(info.route);
        }}
      >
        {info.title}
      </Col>
    );
  });
  return (
    <nav className={`nav-drawer`}>
      <div>
        <IconWidget src={Logo} className="nav-logo" />
      </div>
      <Row className="text-left mt-40">{menuUI}</Row>
      <div style={{ position: "absolute", bottom: 20, left: 0, right: 0 }}>
        <RoundButton
          onClick={() => {
            history.push(ROUTE_LOGIN);
          }}
        >
          Login
        </RoundButton>
        <RoundButton
          onClick={() => {
            history.push(ROUTE_SIGNUP);
          }}
        >
          Sign Up
        </RoundButton>
      </div>
    </nav>
  );
};

export default NavDrawer;
