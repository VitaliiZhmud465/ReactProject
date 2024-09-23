import { Row, Col } from "antd";
import BestSellingWidget from "components/BestSellingWidget/BestSellingWidget";
import CommunityWidget from "components/CommunityWidget/CommunityWidget";
import { DiscoverWidget } from "components/DiscoverWidget/DiscoverWidget";
import FeaturedStoreWidget from "components/FeaturedStoreWidget/FeaturedStoreWidget";
import { MissdealWidget } from "components/MissdealWidget/MissdealWidget";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./ShopCenter.css";

const ShopCenter = (props) => {
  const { discoverList, sellingList, featuredStoreList, communityList, dealList } = props
  return (
    <div className="shop-center">
      <p className="font-16 bold mb-10">Discover</p>
      <DiscoverWidget dataList={discoverList} />
      <p className="font-16 bold mt-20 mb-10">Can't Miss Deals</p>
      <MissdealWidget dataList={dealList} />
      <Row className="mt-20 mb-10" justify="space-between">
        <Col>
          <p className="font-16 bold">Best Selling</p>
        </Col>
        <Col>
          <p className="font-16 bold pointer">View All</p>
        </Col>
      </Row>
      <BestSellingWidget dataList={sellingList} />
      <Row className="mt-20 mb-10" justify="space-between">
        <Col>
          <p className="font-16 bold">Featured Stores</p>
        </Col>
        <Col>
          <p className="font-16 bold pointer">View All</p>
        </Col>
      </Row>
      <FeaturedStoreWidget dataList={featuredStoreList} />
      <Row className="mt-20 mb-10" justify="space-between">
        <Col>
          <p className="font-16 bold">Community Updates</p>
        </Col>
        <Col>
          <p className="font-16 bold pointer">View All</p>
        </Col>
      </Row>
      <CommunityWidget dataList={communityList} />
    </div>
  );
};

export default ShopCenter;
