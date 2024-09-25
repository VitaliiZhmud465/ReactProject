import React from 'react';
import { Row, Col, Typography } from 'antd';
import './ParticipationJoin.css';
import EnrollmentImage from "../../../assets/png/Footer.jpg";

const { Title, Paragraph } = Typography;

const ParticipationJoin = () => {
  return (
    <div>
        <Row justify="center news-rect">
            <Col className="font-48 typo-red">How To JOIN</Col>
        </Row>
        <div className="enrollment-section participation-content">
                <Row className="w-full">
                    <Col xs={24} md={12} className="how-to-join-content">
                        <div className="info-box how-to-join">
                            <Title level={2}>REGISTRATION</Title>
                            <Paragraph className="white">
                                :Players can register for trials online.
                                Successful applicants will be placed on
                                terms based on their age group and skill level.
                            </Paragraph>
                        </div>
                    </Col>
                    <Col xs={24} md={12} className="training-schedule-content">
                        <div className="info-box training-schedule">
                            <Title className="academy-train-title darkPurple" level={2}>SCHEDULE</Title>
                            <Paragraph>
                                The league runs in sync with the school calendar, 
                                with games held on weekends at various locations, 
                                including Coastal Basketball Cwentre.
                            </Paragraph>
                        </div>
                    </Col>
                </Row>
        </div>
    </div>
  );
};

export default ParticipationJoin;