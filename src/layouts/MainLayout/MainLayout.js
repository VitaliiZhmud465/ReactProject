import React from 'react';
import MainNav from './MainNav';
import { BackTop } from 'antd';
import FooterJoin from './FooterJoin/FooterJoin';
import "./MainLayout.css";
import HomeFooter from 'layouts/HomeLayout/HomeFooter';

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainNav />
      {children}
      <FooterJoin/>
      <HomeFooter />
      <BackTop/>
    </div>
  );
};

export default MainLayout;
