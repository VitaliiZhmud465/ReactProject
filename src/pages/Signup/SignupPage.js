import React from "react";
import AuthLayout from "layouts/HomeLayout/AuthLayout";
import SignupSection from "components/AuthPage/SignupSection/SignupSection";
import AuthBottomApp from "components/AuthPage/AuthBottomApp/AuthBottomApp";

function SignupPage(props) {
  return (
    <AuthLayout>
        <SignupSection/>
        <AuthBottomApp/>
    </AuthLayout>
  );
}

export default SignupPage;
