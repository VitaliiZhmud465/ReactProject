import React, { useState } from "react";
import "./ShopRight.css";
import { RightArrowDescription } from "components/Description/RightArrowDescription/RightArrowDescription";
import FeaturedBrandWidget from "components/FeaturedBrandWidget/FeaturedBrandWidget";
import DealsSpecialWidget from "components/DealsSpecialWidget/DealsSpecialWidget";
import TrendingBrandWidget from "components/TrendingBrandWidget/TrendingBrandWidget";
import ChatOpenWidget from "components/ChatOpenWidget/ChatOpenWidget";
import AdvertiseWidget from "components/AdvertiseWidget/AdvertiseWidget";
import ChatIcon1 from "assets/png/feature2.png";
import ExclusiveDealWidget from "components/ExclusiveDealWidget/ExclusiveDealWidget";
const ShopRight = (props) => {
  const { brandList,dealSpecialList,trendingBrandList,exclusiveList, advertiseList, onFeaturedAll } = props
  
  return (
    <div className="shop-right">
      <RightArrowDescription title="Featured Brands" onClick={onFeaturedAll} />
      <FeaturedBrandWidget dataList={brandList} />
      <div className="mt-20">
        <RightArrowDescription
          title="Deals and Specials"
          onClick={onFeaturedAll}
        />
        <DealsSpecialWidget dataList={dealSpecialList} />
      </div>
      <div className="mt-20">
        <RightArrowDescription
          title="Brands Trending Near Me"
          onClick={onFeaturedAll}
        />
        <TrendingBrandWidget dataList={trendingBrandList} />
      </div>
      <div className="mt-20">
        <ChatOpenWidget
          logo={ChatIcon1}
          title="Where's My Order?"
          description="Check the status of your order now"
          chatText="Track My Order"
        />
      </div>
      <div className="mt-20">
        <RightArrowDescription
          title="Exclusive Deals For You"
          onClick={onFeaturedAll}
        />
        <div className="mt-10">
          <ExclusiveDealWidget dataList={exclusiveList} />
        </div>
      </div>
      <div className="mt-20">
        <AdvertiseWidget dataList={advertiseList} />
      </div>
      
    </div>
  );
};

export default ShopRight;
