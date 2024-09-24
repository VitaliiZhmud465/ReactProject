import AcademyCBATop from "components/AcademyCBA/AcademyCBATop/AcademyCBATop";
import AcademyCBAPrograms from "components/AcademyCBA/AcademyCBAProgram/AcademyCBAProgram";
import AcademyCBAEnrolment from "components/AcademyCBA/AcademyCBAEnrolment/AcademyCBAEnrolment";
import HomeLayout from "layouts/HomeLayout/HomeLayout";

import React from "react";

function AcademyCBA(props) {
  return (
    <HomeLayout>
      <AcademyCBATop />
      <AcademyCBAPrograms />
      <AcademyCBAEnrolment />
    </HomeLayout>
  );
}

export default AcademyCBA;
