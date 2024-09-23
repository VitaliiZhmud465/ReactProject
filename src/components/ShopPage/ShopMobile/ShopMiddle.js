import { Col, Row } from "antd";
import AdvertiseMobileWidget from "components/AdvertiseWidget/AdvertiseMobileWidget";
import AdvertiseWidget from "components/AdvertiseWidget/AdvertiseWidget";
import BestSellingWidget from "components/BestSellingWidget/BestSellingWidget";
import CommunityWidget from "components/CommunityWidget/CommunityWidget";
import DealsSpecialWidget from "components/DealsSpecialWidget/DealsSpecialWidget";
import { RightArrowDescription } from "components/Description/RightArrowDescription/RightArrowDescription";
import { DiscoverWidget } from "components/DiscoverWidget/DiscoverWidget";
import ExclusiveDealWidget from "components/ExclusiveDealWidget/ExclusiveDealWidget";
import FeaturedBrandWidget from "components/FeaturedBrandWidget/FeaturedBrandWidget";
import FeaturedStoreWidget from "components/FeaturedStoreWidget/FeaturedStoreWidget";
import { MissdealWidget } from "components/MissdealWidget/MissdealWidget";
import TrendingBrandWidget from "components/TrendingBrandWidget/TrendingBrandWidget";
import React from "react";
import "./ShopMobile.css";
const ShopMiddle = (props) => {
  const {
    discoverList,
    sellingList,
    featuredStoreList,
    communityList,
    dealList,
    brandList,
    dealSpecialList,
    trendingBrandList,
    exclusiveList,
    advertiseList,
    onFeaturedAll,
  } = props;
  return (
    <div className="shop-middle">
      <div className="mt-20">
        <RightArrowDescription
          title="Featured Brands"
          onClick={onFeaturedAll}
        />
      </div>
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
        <RightArrowDescription
          title="Exclusive Deals For You"
          onClick={onFeaturedAll}
        />
        <div className="mt-10">
          <ExclusiveDealWidget dataList={exclusiveList} />
        </div>
      </div>
      <div className="mt-20">
        <AdvertiseMobileWidget dataList={advertiseList} />
      </div>
    </div>
  );
};

export default ShopMiddle;
