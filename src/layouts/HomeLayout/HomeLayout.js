import { BackTop } from 'antd';
import React from 'react';
import HomeFooter from './HomeFooter';
import HomeNav from './HomeNav';


const HomeLayout = ({ children }) => {
  return (
    <div>
      <HomeNav />
      {children}
      <HomeFooter />
      <BackTop/>
    </div>
  );
};

export default HomeLayout;
