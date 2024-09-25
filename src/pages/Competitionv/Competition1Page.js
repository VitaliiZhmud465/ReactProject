
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import JCBLSlide from "components/Competitionv/JCBLSlide/JCBLSlide";
import React from "react";
import JCBLStructure from "components/Competitionv/JCBLStructure/JCBLStructure";
import JCBLIntro from "components/Competitionv/JCBLIntro/JCBLIntro";


function Competition2Page(props) {
  return (
    <HomeLayout>
      <JCBLSlide/>
      <JCBLStructure/>
      <JCBLIntro/>
    </HomeLayout>
  );
}

export default Competition2Page;
