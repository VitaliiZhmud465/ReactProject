
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import JCBLSlide from "components/Competition/JCBLSlide/JCBLSlide";
import React from "react";
import JCBLStructure from "components/Competition/JCBLStructure/JCBLStructure";


function Competition2Page(props) {
  return (
    <HomeLayout>
      <JCBLSlide/>
      <JCBLStructure/>
    </HomeLayout>
  );
}

export default Competition2Page;
