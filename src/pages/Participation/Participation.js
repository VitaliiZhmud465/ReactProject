
import HomeLayout from "layouts/HomeLayout/HomeLayout";
import ParticipationSlide from "components/Participation/ParticipationSlide/ParticipationSlide";
import ParticipationLeague from "components/Participation/ParticipationLeague/ParticipationLeague";
import ParticipationCarousel from "components/Participation/ParticipationCarousel/ParticipationCarousel";
import ParticipationJoin from "components/Participation/ParticipationJoin/ParticipationJoin";

import React from "react";

function Participation(props) {
  return (
    <HomeLayout>
        <ParticipationSlide />
        <ParticipationLeague />
        <ParticipationCarousel />
        <ParticipationJoin />
    </HomeLayout>
  );
}

export default Participation;
