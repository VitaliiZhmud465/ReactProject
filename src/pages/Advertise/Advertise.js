import AdvertiseDesc from "components/AdvertisePage/AdvertiseDesc/AdvertiseDesc";
import AdvertiseSlide from "components/AdvertisePage/AdvertiseSlide/AdvertiseSlide";
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import React from "react";

function AdvertisePage(props) {
  return (
    <HomeLayout>
      <AdvertiseSlide/>
      <AdvertiseDesc/>
    </HomeLayout>
  );
}

export default AdvertisePage;
