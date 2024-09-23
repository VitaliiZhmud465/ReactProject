import { Col, Row } from "antd";
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";
import React from "react";
import "./HomeBranch.css";
import Branch1 from "../../../assets/png/branch1.jpg";
import Branch2 from "../../../assets/png/branch2.jpg";
import Branch3 from "../../../assets/png/branch3.jpg";
import Branch4 from "../../../assets/png/branch4.jpg";
import Branch5 from "../../../assets/png/branch5.jpg";
import Branch6 from "../../../assets/png/branch6.jpg";
const HomeBranch = (props) => {
  const items = [
    {
      icon: Branch1,
      contnt: `COASTAL BASKETBALL CENTRE`,
      name: `CBC`,
    },
    {
      icon: Branch2,
      contnt: `COASTAL BASKETBALL ACADEMY`,
      name: `CBA`,
    },
    {
      icon: Branch3,
      contnt: `COASTAL BASKETBALL UNITED`,
      name: `REPRESENTATIVE`,
    },
    {
      icon: Branch4,
      contnt: `COASTAL BASKETBALL LEAGUE`,
      name: `CBL`,
    },
    {
      icon: Branch5,
      contnt: `JUNIOR COASTAL BASKETBALL LEAGUE`,
      name: `JCBL`,
    },
    {
      icon: Branch6,
      contnt: `COASTAL BASKETBALL HIGH SCHOOL LEAGUE`,
      name: ``,
    },
    
  ];
  return (
    <div className="customer-rect">
      <BottomDescription
        title1="OUR DYNAMIC"
        title2="BRANCHES"
        content="Explore our all of Branches"
      />
      <div className="customer-main">
        <Row justify="space-between" className="mt-40">
          {items.map((x, index) => {
            return (
              <Col key={index}>
                <div className="branch-content">
                  <div className="image-wrapper">
                    <img src={x.icon} className="branch-img" alt="Branch Icon" />
                  </div>
                  <p className="font-14 bold mt-5 text-center">
                    {x.contnt} <span style={{ color: 'var(--redColor)' }}>{x.name}</span>
                  </p>
                </div>

              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default HomeBranch;