import { BackTop } from 'antd';
import React from 'react';
import HomeFooter from './HomeFooter';
import AuthNav from './AuthNav';


const AuthLayout = ({ children }) => {
  return (
    <div>
      <AuthNav />
      {children}
      <HomeFooter />
      <BackTop/>
    </div>
  );
};

export default AuthLayout;
