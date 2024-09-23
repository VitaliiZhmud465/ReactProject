import React from 'react';
import { Col, Row } from 'antd';
import "./AdvertiseSlide"
const CPCSlide = (props) => {
    return (
        <div className='advertise-slide'>
            <Row justify='space-between' className='main-rect'>
                <Col xs={24} sm={24} md={24} xl={24} xxl={24}>
                    <div className='advertise-detail-text-rect'>
                        <p className='font-18 bold white'>COST PER CLICK</p>
                        <p className='font-36 bold white mt-20'>See below for details on</p>
                        <p className='font-36 bold white'>features and benefits</p>
                    </div>

                </Col>
            </Row>
        </div>
    );
};

export default CPCSlide;
