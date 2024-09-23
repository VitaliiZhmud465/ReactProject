import { Col, Row } from 'antd';
import React from 'react';
import "./AboutSlide.css"
import ImgLandingApp from '../../../assets/png/about_slide.png';
import IconHuawei from '../../../assets/png/ic_hw_store.png';
import IconAppStore from '../../../assets/png/ic_app_store.png';
import IconPlayStore from '../../../assets/png/ic_play_store.png';
import { RoundButton } from 'components/ButtonWidget/RoundButton/RoundButton';
const AboutSlide = (props) => {
    return (
        <div className='about-slide'>
            <Row justify='space-between' className='main-rect'>
                <Col xs={24} sm={24} md={14} xl={14} xxl={14}>
                    <div className='about-text-rect'>
                        <p className='font-18 bold white'>BRINGING YOU</p>
                        <p className='font-36 bold white mt-20'>Hassle-free shopping in</p>
                        <p className='font-36 bold white'>the palm of your hands,</p>
                        <p className='font-36 bold white'>wherever, whenever</p>
                        <div className='mt-20'>
                            <RoundButton className='store-icon'>
                                <img src={IconAppStore} className='store-img' /> <span className='ml-10'>AppStore</span>
                            </RoundButton>
                            <RoundButton className='store-icon'>
                                <img src={IconPlayStore} className='store-img' /> <span className='ml-10'>PlayStore</span>
                            </RoundButton>
                            <RoundButton className='store-icon'>
                                <img src={IconHuawei} className='store-img' /> <span className='ml-10'>AppGallery</span>
                            </RoundButton>
                        </div>
                    </div>

                </Col>
                <Col xs={24} sm={24} md={10} xl={10} xxl={10} className='about-img-rect'>
                    <img src={ImgLandingApp} className='about-img' />
                </Col>
            </Row>
        </div>
    );
};

export default AboutSlide;
