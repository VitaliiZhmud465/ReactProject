import { Col, Row } from "antd";
import React from "react";
import "./AdvertiseDesc.css";
import Icon1 from "../../../assets/png/feature1.png";
import Icon2 from "../../../assets/png/feature4.png";
import Icon3 from "../../../assets/png/feature5.png";
import Icon4 from "../../../assets/png/feature2.png";
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";
import { CircleImageButton } from "components/ButtonWidget/CircleImageButton/CircleImageButton";
import { RoundButton } from "components/ButtonWidget/RoundButton/RoundButton";
import { ROUTE_ADVERTISE_CPC, ROUTE_ADVERTISE_CPI, ROUTE_ADVERTISE_CPL } from "constants/navigation_constants";
import { useHistory } from "react-router-dom";
const AdvertiseDesc = (props) => {
  const history = useHistory()
  const itemList = [
    {
      title: "COST PER CLICK",
      content: "View all our benefits and features for our CPC offering",
      count: "X",
      link: ROUTE_ADVERTISE_CPC
    },
    {
      title: "COST PER CLICK",
      content: "View all our benefits and features for our CPI offering",
      count: "X",
      link: ROUTE_ADVERTISE_CPI
    },
    {
      title: "COST PER LIKE",
      content: "View all our benefits and features for our CPC offering",
      count: "X",
      link: ROUTE_ADVERTISE_CPL
    },
  ];
  const itemUI = itemList.map((x, index) => {
    return (
      <Col key={index} xs={24} sm={24} md={24} xl={8}>
        <div className="advertise-item">
          <p className="font-17 bold text-center">{x.title}</p>
          <p className="font-15 text-center mt-20">
            {x.content}
          </p>
          <p className="font-30 bold text-center mt-20">{x.count}</p>
          <p className="font-15 text-center">PER MONTH</p>
          <div className="text-center mt-30">
            <RoundButton className="blue-round" onClick={()=>{
              history.push(x.link)
            }}>VIEW MORE</RoundButton>
          </div>
        </div>
      </Col>
    );
  });
  return (
    <div className="advertise-brand">
      <BottomDescription
        title="BENEFITS"
        content1="Our platform reaches thousands of"
        content2="shoppers across the province"
      />
      <p className="mt-20 font-15">
        SeeMeSave is available across South Africa, bringing exclusive deals,
        products and brands to thousands of our customers daily. Let us work
        with you to position your product, brand or store within our virtual
        market - with tailored options and offerings to suit your needs. Contact
        us for any enquiries, we are also able to tailor an offering best suited
        to your needs. Fill out the form on the Contact Us page and we’ll get
        back to you soonest. See below for detailed packages:
      </p>
      <Row className="mt-60" justify="center" align="middle" gutter={[32, 32]}>
        {itemUI}
      </Row>
    </div>
  );
};

export default AdvertiseDesc;
