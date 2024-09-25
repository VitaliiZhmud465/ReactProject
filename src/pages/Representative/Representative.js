import RepresentativeTop from "components/Representative/RepresentativeTop/RepresentativeTop";
import RepresentativeOpportunity from "components/Representative/RepresentativeOpportunity/RepresentativeOpportunity";
import RepresentativeFuture from "components/Representative/RepresentativeFuture/RepresentativeFuture";
import HomeLayout from "layouts/HomeLayout/HomeLayout";

import React from "react";

function Representative(props) {
  return (
    <HomeLayout>
      <RepresentativeTop />
      <RepresentativeOpportunity />
      <RepresentativeFuture />
    </HomeLayout>
  );
}

export default Representative;
