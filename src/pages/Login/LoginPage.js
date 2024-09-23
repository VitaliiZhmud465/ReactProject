import React from "react";
import AuthBottomApp from "components/AuthPage/AuthBottomApp/AuthBottomApp";
import LoginSection from "components/AuthPage/LoginSection/LoginSection";
import AuthLayout from "layouts/HomeLayout/AuthLayout";

function LoginPage(props) {
  return (
    <AuthLayout>
        <LoginSection/>
        <AuthBottomApp/>
    </AuthLayout>
  );
}

export default LoginPage;
