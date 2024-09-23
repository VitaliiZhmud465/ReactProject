import LegalDesc from "components/LegalPage/LegalDesc/LegalDesc";
import LegalSlide from "components/LegalPage/LegalSlide/LegalSlide";
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import React from "react";

function LegalPage(props) {
  return (
    <HomeLayout>
      <LegalSlide/>
      <LegalDesc/>
    </HomeLayout>
  );
}

export default LegalPage;
