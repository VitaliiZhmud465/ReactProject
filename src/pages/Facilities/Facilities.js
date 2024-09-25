
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import CBCSlide from "components/Facilities/CBCSlide/CBCSlide";
import CBCFacility from "components/Facilities/CBCFacility/CBCFacility";
import CBCHome from "components/Facilities/CBCHome/CBCHome";
import CBCMap from "components/Facilities/CBCMap/CBCMap";
import React from "react";


function Facilities(props) {
  return (
    <HomeLayout>
      <CBCSlide/>
      <CBCFacility/>
      <CBCHome/>
      <CBCMap/>
    </HomeLayout>
  );
}

export default Facilities;
