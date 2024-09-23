import HomeBranch from "components/HomePage/HomeBranch/HomeBranch";
import HomeFeature from "components/HomePage/HomeFeature/HomeFeature";
import HomeSlide from "components/HomePage/HomeSlide/HomeSlide";
import HomeNews from "components/HomePage/HomeNews/HomeNews";
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
    </HomeLayout>
  );
}

export default HomePage;
