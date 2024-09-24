
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import CBCSlide from "components/Competition/CBCSlide/CBCSlide";
import CBCFacility from "components/Competition/CBCFacility/CBCFacility";
import CBCHome from "components/Competition/CBCHome/CBCHome";
import CBCMap from "components/Competition/CBCMap/CBCMap";
import React from "react";


function Competition1Page(props) {
  return (
    <HomeLayout>
      <CBCSlide/>
      <CBCFacility/>
      <CBCHome/>
      <CBCMap/>
    </HomeLayout>
  );
}

export default Competition1Page;
