
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import JCBLSlide from "components/Competition/JCBLSlide/JCBLSlide";
import React from "react";
import JCBLStructure from "components/Competition/JCBLStructure/JCBLStructure";
import JCBLIntro from "components/Competition/JCBLIntro/JCBLIntro";


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
