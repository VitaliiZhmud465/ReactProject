import React from "react";
import AuthBottomApp from "components/AuthPage/AuthBottomApp/AuthBottomApp";
import AuthLayout from "layouts/HomeLayout/AuthLayout";
import ForgotSection from "components/AuthPage/ForgotSection/ForgotSection";

function ForgotPage(props) {
  return (
    <AuthLayout>
        <ForgotSection/>
        <AuthBottomApp/>
    </AuthLayout>
  );
}

export default ForgotPage;
