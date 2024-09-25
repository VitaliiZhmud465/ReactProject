import React from 'react';
import { Row, Col, Typography } from 'antd';
import './AcademyCBAEnrolment.css';
import EnrollmentImage from "../../../assets/png/Footer.jpg";

const { Title, Paragraph } = Typography;

const AcademyCBAEnrolment = () => {
  return (
    <div>
        <Row justify="center">
            <Col className="font-48 typo-red">ENROLMENT</Col>
            <Col className="font-48 typo-blue">{'\u00A0'}INFORMATION</Col>
        </Row>
        <div className="enrollment-section">
                <Row className="w-full">
                    <Col xs={24} md={12} className="training-schedule-content">
                        <div className="info-box training-schedule">
                            <Title className="academy-train-title darkPurple" level={2}>TRAINING SCHEDULE</Title>
                            <Paragraph>
                                Regular training sessions are held at Coastal Basketball Centre, 
                                with additional camps and clinics offered during school holidays.
                            </Paragraph>
                        </div>
                    </Col>

                    <Col xs={24} md={12} className="how-to-join-content">
                        <div className="info-box how-to-join">
                            <Title level={2}>HOW TO JOIN</Title>
                            <Paragraph className="white">
                                Players can join CBA through tryouts held at various times throughout the year.
                                Successful applicants will be placed in the appropriate program based on their skill level.
                            </Paragraph>
                        </div>
                    </Col>
                </Row>

        </div>
    </div>
  );
};

export default AcademyCBAEnrolment;