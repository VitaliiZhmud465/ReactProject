import React from "react";
import AuthBottomApp from "components/AuthPage/AuthBottomApp/AuthBottomApp";
import AuthLayout from "layouts/HomeLayout/AuthLayout";
import OtpSection from "components/AuthPage/OtpSection/OtpSection";

function OtpPage(props) {
  return (
    <AuthLayout>
        <OtpSection/>
        <AuthBottomApp/>
    </AuthLayout>
  );
}

export default OtpPage;
