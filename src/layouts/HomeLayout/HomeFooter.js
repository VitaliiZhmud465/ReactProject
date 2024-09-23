import React, { useEffect, useState } from "react";
import { Row, Col, Divider } from "antd";

import { useHistory } from "react-router-dom";
import { CircleImageButton } from "components/ButtonWidget/CircleImageButton/CircleImageButton";
import { IconWidget } from "components/IconWidget/IconWidget";
import {
  FOOTER_CONTACTUS_IMTES,
  FOOTER_QUICK_IMTES,
  FOOTER_SITEMAP_IMTES,
  FOOTER_ASSOCIATION_IMTES,
} from "constants/navigation_constants";
import { FollowusWidget } from "components/FollowusWidget/FollowusWidget";
import { PlayStoreWidget } from "components/PlayStoreWidget/PlayStoreWidget";
import FooterLogo from '../../assets/png/footer_logo.png';

const HomeFooter = () => {
  const history = useHistory();
  const screenWidthSize = window.innerWidth;
  const siteMapItem = FOOTER_SITEMAP_IMTES.map((info, index) => {
    return (
      <div
        className={`footer-menu-item ${info.main ? "active" : ""}`}
        key={index}
        onClick={() => {
          if (!info.main) history.push(info.route);
        }}
      >
        {info.title}
      </div>
    );
  });
  const quickItem = FOOTER_QUICK_IMTES.map((info, index) => {
    return (
      <div
        className={`footer-menu-item ${info.main ? "active" : ""}`}
        key={index}
        onClick={() => {
          if (!info.main) history.push(info.route);
        }}
      >
        {info.title}
      </div>
    );
  });
  const contactItem = FOOTER_CONTACTUS_IMTES.map((info, index) => {
    return (
      <div
        className={`footer-menu-item ${info.main ? "active" : ""}`}
        key={index}
        onClick={() => {
          if (!info.main) history.push(info.route);
        }}
      >
        {info.title}
      </div>
    );
  });
  const associationItem = FOOTER_ASSOCIATION_IMTES.map((info, index) => {
    return (
      <div
        className={`footer-menu-item ${info.main ? "active" : ""}`}
        key={index}
        onClick={() => {
          if (!info.main) history.push(info.route);
        }}
      >
        {info.title}
      </div>
    );
  });
  return (
    <footer className="footer">
      {screenWidthSize > 768 ? (
        <>
          <Row justify="space-between" className="footer-rect">
            <Col>
              <img src={FooterLogo} />
            </Col>
            <Col>
              <FollowusWidget />
            </Col>
          </Row>
          <Row justify="space-between" className="footer-rect">
            <Col>
              {siteMapItem}
            </Col>
            <Col>
              {quickItem}
            </Col>
            <Col>
              {contactItem}
            </Col>
            <Col>
              {associationItem}
            </Col>
          </Row>
        </>
      ) : (
        <>
        </>
      )}
      <div className="main-rect">
        <Divider className="footer-divider"></Divider>
      </div>
      <div className="footer-text">© COPYRIGHT COASTAL BASKETBALL</div>
    </footer>
  );
};

export default HomeFooter;