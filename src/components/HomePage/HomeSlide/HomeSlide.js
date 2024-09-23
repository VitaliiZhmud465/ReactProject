import { Slider, Col, Row } from 'antd';
import React from 'react';
import "./HomeSlide.css"


import BlogHero1 from '../../../assets/png/Hero1.jpg';
import BlogHero2 from '../../../assets/png/Hero2.jpg';

const HomeSlide = (props) => {
    return (
        <div className='home-slide'>
            <Row justify='space-between' className='main-rect'>
                <Col xs={24} sm={24} md={10} xl={10} xxl={10}>
                    <div className='landing-text-rect'>
                        <p className='font-76 bold white mt-20 mb-0'>WELCOME TO</p>
                        <p className='font-76 bold white'>COASTAL</p>
                        <p className='font-76 bold white'>BASKETBALL</p>
                        <p className='font-18 bold white'>
                            Welcome to Coastal Basketball, your premier destination
                            for basketball development and competition in the South
                            West 8 Peel regions of Western Australia. Whether you're
                            a junior player just starting out or an elite athlete looking
                            to compte at the highest level, Coastal Basketball offers a pathway
                            to help you achieve your goals. Explore our leagues, academy, and
                            representative teams to find out how you can get involved. 
                        </p>
                    </div>

                </Col>
                <Col xs={24} sm={24} md={14} xl={14} xxl={14} className='landing-img-rect'>
                    <Row justify='space-between' className='main-rect'>
                        <Col span={14}>
                            <Slider 
                                value={100} 
                                min={0} 
                                max={100} 
                                step={1} 
                            />
                        </Col>
                        <Col span={5} className='blog-img-rect'>
                            <img src={BlogHero1} />
                        </Col>
                        <Col span={5} className='blog-img-rect'>
                            <img src={BlogHero2}  />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default HomeSlide;
