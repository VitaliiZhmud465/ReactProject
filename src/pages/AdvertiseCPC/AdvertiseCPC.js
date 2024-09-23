import CPCDesc from "components/AdvertisePage/AdvertiseDesc/CPCDesc";
import CPCSlide from "components/AdvertisePage/AdvertiseSlide/CPCSlide";
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import React from "react";

function AdvertiseCPCPage(props) {
  return (
    <HomeLayout>
      <CPCSlide/>
      <CPCDesc/>
    </HomeLayout>
  );
}

export default AdvertiseCPCPage;
