import React, { useState } from "react";
import "./ShopLeft.css";
import { RoundSelect } from "components/SelectWidget/RoundSelect";
import { Col, Row } from "antd";
import SecurityIcon from "assets/png/ic_security_blue.png";
import CategoryWidget from "components/CategoryWidget/CategoryWidget";
import AdvertiseWidget from "components/AdvertiseWidget/AdvertiseWidget";
import ChatOpenWidget from "components/ChatOpenWidget/ChatOpenWidget";
import ChatIcon1 from "assets/png/feature2.png";
import ChatIcon2 from "assets/png/feature1.png";
import FollowerWidget from "components/FollowerWidget/FollowerWidget";
import { RightArrowDescription } from "components/Description/RightArrowDescription/RightArrowDescription";
import { FollowusWidget } from "components/FollowusWidget/FollowusWidget";
const ShopLeft = (props) => {
  const {advertiseList, selType, setSelType, typeList, setTypeList, categoryList, followerList, onFollowAll, onCategoryAllClick} = props
 
  return (
    <div className="shop-left">
      <Row gutter={8}>
        <Col>
          <img className="security-img" src={SecurityIcon} />
        </Col>
        <Col>
          <p className="font-16 bold mb-10">Select a Delivery Option</p>
        </Col>
      </Row>
      <RoundSelect
        style={{ width: "100%", textAlign: "center" }}
        value={selType}
        onChange={setSelType}
        optionList={typeList}
      />
      <div className="mt-20">
        <CategoryWidget
          dataList={categoryList}
          all={true}
          allClick={onCategoryAllClick}
        />
      </div>
      <div className="mt-20">
        <ChatOpenWidget
          logo={ChatIcon1}
          title="Need support?"
          description="Chat with a support agent now"
        />
      </div>
      <div className="mt-20">
        <AdvertiseWidget dataList={advertiseList} />
      </div>
      <div className="mt-20">
        <RightArrowDescription title="People You May Know" onClick={onFollowAll}/>
      </div>
      <div className="mt-10">
        <FollowerWidget dataList={followerList} />
      </div>
      <div className="mt-20">
        <ChatOpenWidget
          logo={ChatIcon2}
          title="Stay On Top"
          description="Keep uo with our monthly newsletter"
        />
      </div>
      <div className="mt-20">
        <p className="font-16 bold">Follow Us</p>
      </div>
      <FollowusWidget/>
    </div>
  );
};

export default ShopLeft;
