import { Progress, Col, Row } from 'antd';
import React from 'react';
import "./HomeSlide.css"


import BlogHero1 from '../../../assets/png/Hero1.jpg';
import BlogHero2 from '../../../assets/png/Hero2.jpg';

const HomeSlide = (props) => {
    return (
        <div className='home-slide'>
            <Row justify='space-between' className='bg-slide pb-10'>
                <Col className="bg-left-slide" xs={24} sm={24} md={10} xl={10} xxl={10}>
                    <div className='landing-text-rect'>
                        <h1 className='font-56 bold white mt-20 mb-0'>WELCOME TO<br />
                        COASTAL<br />
                        BASKETBALL</h1>
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
                <Col xs={24} sm={24} md={14} xl={14} xxl={11} className='landing-img-rect'>
                    <Row gutter={[20, 20]} className="landing-text-rect" style={{  }}>
                        <Col className="slider" style={{}}>
                            <div style={{position:'absolute', bottom:'0', width:'calc(100% - 20px)'}}>
                            <Row justify="space-between" >
                                <Col className="font-12 bold grey">DECEMBER MATCH</Col>
                                <Col className="font-12 bold white">3.5$</Col>
                            </Row>
                            <Progress percent={70} showInfo={false} />
                            </div>
                        </Col>
                        <Col className='blog-img-rect'>
                            <img src={BlogHero1} />
                        </Col>
                        <Col className='blog-img-rect'>
                            <img src={BlogHero2}  />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default HomeSlide;
