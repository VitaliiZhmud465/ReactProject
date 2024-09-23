// @flow strict

import AboutApp from "components/AboutPage/AboutApp/AboutApp";
import AboutBrand from "components/AboutPage/AboutBrand/AboutBrand";
import AboutSlide from "components/AboutPage/AboutSlide/AboutSlide";
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function AboutPage(props) {
  return (
    <HomeLayout>
      <AboutSlide/>
      <AboutBrand/>
      <AboutApp/>
    </HomeLayout>
  );
}

export default AboutPage;
