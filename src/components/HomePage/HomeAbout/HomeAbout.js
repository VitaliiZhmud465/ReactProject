import React from 'react';
import { Button, Row, Col } from 'antd';
import './HomeAbout.css';
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";

import JCBL from "../../../assets/png/logos/JCBL.png";
import CBL from "../../../assets/png/logos/CBL Highschool.png";
import CoastalBasketball from "../../../assets/png/logos/Coastal Basketball.png";
import Academy from "../../../assets/png/logos/Academy.png";
import Centre from "../../../assets/png/logos/Centre.png";

const HomeAbout = () => {
    return (
        <div className="about-content">
            <Row gutter={[16, 16]} className="mt-40" style={{ display: 'flex' }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="d-flex align-center about-left-content">
                    <div >
                        <BottomDescription
                            title1="ABOUT"
                            title2="US"
                            content="Learn more about our association and how you can get involved."
                        />
                        <div className="btn-responsive-more">
                            <Button className="btn-about-more mt-50" >
                                LEARN MORE
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Row gutter={[20, 20]} style={{ display: 'flex' }}>
                        <Col className="logo-card" xs={24} sm={24} md={12} lg={12} xl={12} >
                            <div><img src={JCBL} width="280" height="170" /></div>
                        </Col>
                        <Col className="logo-card" xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div><img src={CBL} width="280" height="170" /></div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div><img src={CoastalBasketball} width="100%" height="auto" /></div>
                        </Col>
                        <Col className="logo-card" xs={24} sm={24} md={12} lg={12} xl={12} >
                            <div><img src={Academy} width="280" height="170" /></div>
                        </Col>
                        <Col className="logo-card" xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div><img src={Centre} width="180" height="170" /></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default HomeAbout;