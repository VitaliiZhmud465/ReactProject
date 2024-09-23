import { Col, Row } from "antd";
import React from "react";
import "./AboutBrand.css";
import Icon1 from "../../../assets/png/feature1.png";
import Icon2 from "../../../assets/png/feature4.png";
import Icon3 from "../../../assets/png/feature5.png";
import Icon4 from "../../../assets/png/feature2.png";
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";
import { CircleImageButton } from "components/ButtonWidget/CircleImageButton/CircleImageButton";
const AboutBrand = (props) => {
  return (
    <div className="about-brand">
      <BottomDescription
        title="HOW DO WE DO THIS?"
        content1="We partner with sustainable local"
        content2="and international brands and stores"
      />
      <p className="mt-20 font-15">
        We work closely with our selected partners to bring you the best deals
        and promotions within your area. Our geo-location feature lets you shop
        the best products, stores and brands suited to your pocket. Driven by
        innovation and fuelled by passion, we are committed to providing
        excellent service delivery and customer support through our platform.
        Our core is motivated by happy customers, partners and brands. Our app
        brings you the best:
      </p>
      <Row className="mt-20" justify="space-between" gutter={[32, 32]}>
        <Col>
          <CircleImageButton src={Icon1} className="feature-circle-rect" />
          <div>
            <p className="font-17 bold text-left">Deals</p>
            <p className="font-15 text-left">Bringing you the best pocket-</p>
            <p className="font-15 text-left">friendly deals and promotions</p>
            <p className="font-15 text-left">wherever you are 24/7.</p>
          </div>
        </Col>
        <Col>
          <CircleImageButton src={Icon2} className="feature-circle-rect" />
          <div>
            <p className="font-17 bold text-left">Community</p>
            <p className="font-15 text-left">Keep in touch with other</p>
            <p className="font-15 text-left">community members on the</p>
            <p className="font-15 text-left">app and share your experiences.</p>
          </div>
        </Col>
        <Col>
          <CircleImageButton src={Icon3} className="feature-circle-rect" />
          <div>
            <p className="font-17 bold text-left">Support</p>
            <p className="font-15 text-left">Our friendly customer service</p>
            <p className="font-15 text-left">
              team is ever-ready to assist you
            </p>
            <p className="font-15 text-left">with any queries you may have. </p>
          </div>
        </Col>
        <Col>
          <CircleImageButton src={Icon4} className="feature-circle-rect" />
          <div>
            <p className="font-17 bold text-left">Savings</p>
            <p className="font-15 text-left">Saving you more bucks at there</p>
            <p className="font-15 text-left">end of every month with our</p>
            <p className="font-15 text-left">tailored offerings. </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutBrand;
