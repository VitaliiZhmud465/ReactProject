import { Col, Input, Row } from "antd";
import React from "react";
import "./ContactDesc.css";
import Icon1 from "../../../assets/png/ic_email.png";
import Icon2 from "../../../assets/png/ic_location.png";
import Icon3 from "../../../assets/png/ic_time.png";
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";
import { CircleImageButton } from "components/ButtonWidget/CircleImageButton/CircleImageButton";
import { RoundButton } from "components/ButtonWidget/RoundButton/RoundButton";
const { TextArea } = Input;
const ContactDesc = (props) => {
  return (
    <div className="contact-brand">
      <BottomDescription
        title="WE’D LIKE TO HEAR FROM YOU"
        content1="Enter your details below to get in"
        content2="touch with us"
      />
      <div className="contact-form">
        <Input placeholder="Full Name" className="home-input" />
        <Input
          placeholder="Email Address"
          type="email"
          className="home-input"
        />
        <Input placeholder="Subject" className="home-input" />
        <TextArea placeholder="Message" className="home-input" rows={4} />
        <Row justify="end" className="mt-20">
          <Col>
            <RoundButton className="blue-round">SUBMIT</RoundButton>
          </Col>
        </Row>
      </div>
      <Row justify="space-between" className="text-center contact-rect mt-30" gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <div>
            <img src={Icon1} className="contact-item-img" />
          </div>
          <p className="font-15 bold mt-30">Contact</p>
          <p className="font-14 mt-10">info@seemesave.com</p>
          <p className="font-14">www.seemesave.com</p>
        </Col>
        <Col xs={24} md={8}>
          <div>
            <img src={Icon2} className="contact-item-img" />
          </div>
          <p className="font-15 bold mt-30">Global Headquarters</p>
          <p className="font-14 mt-10">Located in Johannesburg</p>
          <p className="font-14">South Africa</p>
        </Col>
        <Col xs={24} md={8}>
          <div>
            <img src={Icon3} className="contact-item-img" />
          </div>
          <p className="font-15 bold mt-30">Business Hours</p>
          <p className="font-14 mt-10">Monday-Friday</p>
          <p className="font-14">08:00am-17:00pm GMT+2</p>
        </Col>
      </Row>
    </div>
  );
};

export default ContactDesc;
