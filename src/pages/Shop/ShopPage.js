import React from "react";
import { Row, Col } from "antd";
import ShopCenter from "components/ShopPage/ShopCenter/ShopCenter";
import ShopLeft from "components/ShopPage/ShopLeft/ShopLeft";
import ShopRight from "components/ShopPage/ShopRight/ShopRight";
import MainLayout from "layouts/MainLayout/MainLayout";
import SearchWidget from "components/SearchWidget/SearchWidget";
import { useState } from "react";
import ShopMobile from "components/ShopPage/ShopMobile/ShopMobile";
import BrandIcon1 from "assets/png/brand1.png";
import BrandIcon2 from "assets/png/brand2.png";
import BrandIcon3 from "assets/png/brand3.png";
import BrandIcon4 from "assets/png/brand4.png";
import BrandIcon5 from "assets/png/brand5.png";
import BrandIcon6 from "assets/png/brand6.png";
import BrandIcon7 from "assets/png/brand7.png";
import BrandIcon8 from "assets/png/brand8.png";
import TrendingBrandIcon from "assets/png/bankcard.png";
import ExclusiveLogo from "assets/png/promotion.png";
import ProductIcon from "assets/png/deal_special.png";
import Adver1 from "assets/png/adver4.png";
import Adver2 from "assets/png/adver2.png";
import Adver3 from "assets/png/adver1.png";
import Adver4 from "assets/png/adver5.png";
import ShopMiddle from "components/ShopPage/ShopMobile/ShopMiddle";

function ShopPage(props) {
  const screenWidthSize = window.innerWidth;
  const [selType, setSelType] = useState("0");
  const [typeList, setTypeList] = useState([{ id: 0, value: "0", label: "-" }]);
  const [categoryList, setCategoryList] = useState([
    { id: 0, title: "Bables" },
    { id: 0, title: "Dairy" },
    { id: 0, title: "Laundry" },
    { id: 0, title: "Fresh Foods" },
    { id: 0, title: "Healthcare" },
    { id: 0, title: "School" },
    { id: 0, title: "Bath" },
    { id: 0, title: "Bakery" },
    { id: 0, title: "Groceries" },
  ]);
  const [followerList, setFollowerList] = useState([
    { id: 0, name: "Bables" },
    { id: 0, name: "Dairy" },
    { id: 0, name: "Laundry" },
    { id: 0, name: "Fresh Foods" },
    { id: 0, name: "Healthcare" },
  ]);
  const [discoverList, setDiscoverList] = useState([
    { id: -1, title: "Add Post" },
    { id: 1, title: "SparKias.." },
    { id: 2, title: "SparKias.." },
    { id: 3, title: "SparKias.." },
    { id: 4, title: "SparKias.." },
    { id: 5, title: "SparKias.." },
    { id: 6, title: "SparKias.." },
  ]);
  const [dealList, setDealList] = useState([
    {
      id: 0,
      title: "Youth Day Special With Spar Kismet",
      description:
        "Purchase any of our hampers and get 5% off when you checkout. This offer is valid for one day only.",
    },
    {
      id: 1,
      title: "Youth Day Special With Spar Kismet",
      description:
        "Purchase any of our hampers and get 5% off when you checkout. This offer is valid for one day only.",
    },
    {
      id: 2,
      title: "Youth Day Special With Spar Kismet",
      description:
        "Purchase any of our hampers and get 5% off when you checkout. This offer is valid for one day only.",
    },
    {
      id: 3,
      title: "Youth Day Special With Spar Kismet",
      description:
        "Purchase any of our hampers and get 5% off when you checkout. This offer is valid for one day only.",
    },
    {
      id: 4,
      title: "Youth Day Special With Spar Kismet",
      description:
        "Purchase any of our hampers and get 5% off when you checkout. This offer is valid for one day only.",
    },
  ]);
  const [sellingList, setSellingList] = useState([
    {
      id: 0,
      image_url: "",
      title: "Bokomo",
      description: "Bran Flakes",
      unit: "g",
      size: 450,
      currency: "R",
      price: "27.99",
      count: 1,
    },
    {
      id: 1,
      image_url: "",
      title: "Jacobs",
      description: "Bran Flakes",
      unit: "g",
      size: 450,
      currency: "R",
      price: "27.99",
      count: 1,
    },
    {
      id: 2,
      image_url: "",
      title: "Sunlight",
      description: "Bran Flakes",
      unit: "g",
      size: 450,
      currency: "R",
      price: "27.99",
      count: 1,
    },
  ]);
  const [featuredStoreList, setFeaturedStoreList] = useState([
    {
      id: 0,
      logo: "",
      title: "B Nagiash's",
      description: "Midrand",
      background_image: "",
    },
    {
      id: 1,
      logo: "",
      title: "Spar",
      description: "Kismet",
      background_image: "",
    },
    {
      id: 2,
      logo: "",
      title: "Devland",
      description: "Hyper",
      background_image: "",
    },
  ]);
  const [communityList, setCommunityList] = useState([
    {
      id: 0,
      avatar: "",
      description:
        "A quick update on my dinner from the Spar deli today. Which Spar, can you guess?",
      user_name: "B Nagiash's",
      user_info: "Midrand",
      like_count: 12,
      comment_count: 21,
    },
    {
      id: 0,
      avatar: "",
      description:
        "A quick update on my dinner from the Spar deli today. Which Spar, can you guess?",
      user_name: "B Nagiash's",
      user_info: "Midrand",
      like_count: 12,
      comment_count: 21,
    },
    {
      id: 0,
      avatar: "",
      description:
        "A quick update on my dinner from the Spar deli today. Which Spar, can you guess?",
      user_name: "B Nagiash's",
      user_info: "Midrand",
      like_count: 12,
      comment_count: 21,
    },
  ]);
  const [brandList, setBrnadList] = useState([
    { logo: BrandIcon1, title: "Brand" },
    { logo: BrandIcon2, title: "Brand" },
    { logo: BrandIcon3, title: "Brand" },
    { logo: BrandIcon4, title: "Brand" },
    { logo: BrandIcon5, title: "Brand" },
    { logo: BrandIcon6, title: "Brand" },
    { logo: BrandIcon7, title: "Brand" },
    { logo: BrandIcon8, title: "Brand" },
  ]);
  const [dealSpecialList, setDealSpecialList] = useState([
    {
      id: 0,
      logo: ProductIcon,
      title: "B Nagiash's",
      description: "Midrand",
      background_image: "",
    },
    {
      id: 0,
      logo: ProductIcon,
      title: "B Nagiash's",
      description: "Midrand",
      background_image: "",
    },
  ]);
  const [trendingBrandList, setTrendingBrandList] = useState([
    { logo: TrendingBrandIcon, title: "Brand" },
    { logo: TrendingBrandIcon, title: "Brand" },
    { logo: TrendingBrandIcon, title: "Brand" },
  ]);
  const [exclusiveList, setExclusiveList] = useState([
    {
      id: 0,
      logo: ExclusiveLogo,
      currency: "R",
      left_time: "01:00:00",
      price: "165.99",
      old_price: "199.99",
      title: "B Nagiash's",
      description:
        "From our deli, Mozzarella, Tonna and Quatro Formaggi pizzas to kick off the weekend.",
    },
  ]);
  const [advertiseLeftList, setAdvertiseLeftList] = useState([
    { id: 1, src: Adver1 },
    { id: 2, src: Adver2 },
  ]);
  const [advertiseRightList, setAdvertiseRightList] = useState([
    { id: 3, src: Adver3 },
    { id: 4, src: Adver4 },
  ]);
  const onFeaturedAll = () => {};
  const onFollowAll = () => {};
  const onCategoryAllClick = () => {};
  return (
    <MainLayout>
      <SearchWidget />
      <div className="bg-grey">
        <div className="main-section">
          <Row justify="center">
            <Col xs={0} sm={0} md={0} xl={6} xxl={6}>
              <ShopLeft
                selType={selType}
                setSelType={setSelType}
                typeList={typeList}
                categoryList={categoryList}
                followerList={followerList}
                advertiseList={advertiseLeftList}
              />
            </Col>
            <Col xs={0} sm={0} md={12} xl={12} xxl={12}>
              <ShopCenter
                discoverList={discoverList}
                dealList={dealList}
                sellingList={sellingList}
                featuredStoreList={featuredStoreList}
                communityList={communityList}
              />
            </Col>
            <Col xs={0} sm={0} md={0} xl={6} xxl={6}>
              <ShopRight
                brandList={brandList}
                dealSpecialList={dealSpecialList}
                trendingBrandList={trendingBrandList}
                exclusiveList={exclusiveList}
                advertiseList={advertiseRightList}
                onFeaturedAll={onFeaturedAll}
              />
            </Col>
            <Col xs={24} sm={24} md={0} xl={0} xxl={0}>
              <ShopMobile
                discoverList={discoverList}
                dealList={dealList}
                sellingList={sellingList}
                featuredStoreList={featuredStoreList}
                communityList={communityList}
                brandList={brandList}
                dealSpecialList={dealSpecialList}
                trendingBrandList={trendingBrandList}
                exclusiveList={exclusiveList}
                advertiseList={[...advertiseLeftList, ...advertiseRightList]}
                onFeaturedAll={onFeaturedAll}
              />
            </Col>
            <Col xs={0} sm={0} md={12} xl={0} xxl={0}>
              <ShopMiddle
                discoverList={discoverList}
                dealList={dealList}
                sellingList={sellingList}
                featuredStoreList={featuredStoreList}
                communityList={communityList}
                brandList={brandList}
                dealSpecialList={dealSpecialList}
                trendingBrandList={trendingBrandList}
                exclusiveList={exclusiveList}
                advertiseList={[...advertiseLeftList, ...advertiseRightList]}
                onFeaturedAll={onFeaturedAll}
              />
            </Col>
          </Row>
        </div>
      </div>
    </MainLayout>
  );
}

export default ShopPage;
