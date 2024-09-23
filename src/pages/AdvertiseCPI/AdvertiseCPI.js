import React from "react";
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import CPIDesc from "components/AdvertisePage/AdvertiseDesc/CPIDesc";
import CPISlide from "components/AdvertisePage/AdvertiseSlide/CPISlide";

function AdvertiseCPIPage(props) {
  return (
    <HomeLayout>
      <CPISlide/>
      <CPIDesc/>
    </HomeLayout>
  );
}

export default AdvertiseCPIPage;
