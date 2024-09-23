import React from "react";
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import CPLDesc from "components/AdvertisePage/AdvertiseDesc/CPLDesc";
import CPLSlide from "components/AdvertisePage/AdvertiseSlide/CPLSlide";

function AdvertiseCPLPage(props) {
  return (
    <HomeLayout>
      <CPLSlide/>
      <CPLDesc/>
    </HomeLayout>
  );
}

export default AdvertiseCPLPage;
