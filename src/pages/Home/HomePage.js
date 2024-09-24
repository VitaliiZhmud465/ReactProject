import HomeBranch from "components/HomePage/HomeBranch/HomeBranch";
import HomeFeature from "components/HomePage/HomeFeature/HomeFeature";
import HomeSlide from "components/HomePage/HomeSlide/HomeSlide";
import HomeNews from "components/HomePage/HomeNews/HomeNews";
import HomeEvent from "components/HomePage/HomeEvent/HomeEvent";
import HomeAbout from "components/HomePage/HomeAbout/HomeAbout";
import HomeLayout from "layouts/HomeLayout/HomeLayout";

import React from "react";

function HomePage(props) {
  return (
    <HomeLayout>
      <HomeSlide/>
      <HomeBranch/>
      <HomeFeature 
        style={{ backgroundColor: 'var(--redColor)' }} 
        content="REGISTER NOW FOR OUR UPCOMING LEAGUES"
        btnTitle="REGISTER NOW"
        bgBtn="var(--darkPurple)"
      />
      <HomeNews />
      <HomeFeature 
        style={{ backgroundColor: 'var(--darkPurple)' }} 
        content="JOIN OUR ACADEMY AND TAKE YOUR GAME TO THE NEXT LEVEL."
        btnTitle="JOIN NOW"
        bgBtn="var(--redColor)"
      />
      <HomeEvent />
      <HomeAbout/>
    </HomeLayout>
  );
}

export default HomePage;
