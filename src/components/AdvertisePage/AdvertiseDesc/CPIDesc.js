import React from "react";
import { Col, Row } from "antd";
import "./AdvertiseDesc";
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";
import { RoundButton } from "components/ButtonWidget/RoundButton/RoundButton";
import CPCItem from "./CPCItem";
const CPIDesc = (props) => {
  const itemList = [
    {
      key: "1",
      content: "",
    },
    {
      key: "2",
      content: "",
    },
    {
      key: "3",
      content: "",
    },
    {
      key: "4",
      content: "",
    },
    {
      key: "5",
      content: "",
    },
    {
      key: "6",
      content: "",
    },
    {
      key: "7",
      content: "",
    },
  ];
  const itemUI = itemList.map((x, index) => {
    return <CPCItem item={x} key={index} />;
  });
  return (
    <div style={{ background: "var(--whiteColor)" }}>
      <div className="advertise-brand">
        <BottomDescription
          title="PRICING MODEL"
          content1="See below for more information on"
          content2="the cost per 1k impressions"
        />
        <p className="mt-20 font-15">
          Contact us for any enquiries, we are also able to tailor a package
          best suited to your needs. Fill out the form on the Contact Us page
          with the subject line “CPI Model” and we’ll get back to you soonest.
        </p>
        <p className="p-40 font-17 bold">
          Basic Breakdown - Benefits and Features
        </p>
        <Row justify="space-between" gutter={[8, 8]}>
          {itemUI}
        </Row>
        <Row
          justify="space-between"
          align="middle"
          gutter={[8, 8]}
          className="mt-20"
        >
          <Col>
            <p className="font-15">*Terms and conditions apply.</p>
          </Col>
          <Col>
            <Row gutter={[16, 4]}>
              <Col>
                <RoundButton
                  className="dark-blue-round"
                  style={{ width: "100%" }}
                >
                  VIEW BROCHURE
                </RoundButton>
              </Col>
              <Col>
                <RoundButton className="blue-round" style={{ width: "100%" }}>
                  Get STARTED
                </RoundButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CPIDesc;
