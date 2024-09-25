
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import CompetitionSlide from "components/Competition/CompetitionSlide/CompetitionSlide";
import CompetitionDetail from "components/Competition/CompetitionDetail/CompetitionDetail";
import CompetitionRegister from "components/Competition/CompetitionRegister/CompetitionRegister";

import React from "react";

function Facilities(props) {
  return (
    <HomeLayout>
        <CompetitionSlide />
        <CompetitionDetail />
        <CompetitionRegister />
    </HomeLayout>
  );
}

export default Facilities;
