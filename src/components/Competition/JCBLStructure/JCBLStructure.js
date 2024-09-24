import { Col, Row } from 'antd';
import React from 'react';
import { FaBullseye, FaRoute, FaUsers } from 'react-icons/fa';
import "./JCBLStructure.css";

const JCBLStructure = () => {
    return (
        <div className='structure-content'>
            <h1>LEAGUE <span>STRUCTURE</span></h1>
            <Row justify="center" align="middle" gutter={[16, 16]}>
                <Col xs={24} sm={24} md={8}>
                    <div className="info-card">
                        <FaUsers className="info-icon" />
                        <h3>AGE GROUPS</h3>
                        <p>
                            The league is divided into two age groups: Year 9/10 and Year 11/12.
                            Teams are formed through trials held before the start of each season.
                        </p>
                    </div>
                </Col>

                <Col xs={24} sm={24} md={8} className="pathway-line">
                    <div className="line"></div> {/* Create the line connecting icons */}
                </Col>

                <Col xs={24} sm={24} md={8}>
                    <div className="info-card">
                        <FaBullseye className="info-icon" />
                        <h3>DEVELOPMENT FOCUS</h3>
                        <p>
                            JCBL emphasizes skill development, teamwork, and sportsmanship, with experienced coaches guiding each team.
                        </p>
                    </div>
                </Col>
            </Row>

            <Row justify="center" align="middle" gutter={[16, 16]} style={{ marginTop: '50px' }}>
                <Col xs={24} sm={24} md={8}>
                    <div className="info-card">
                        <FaRoute className="info-icon" />
                        <h3>PATHWAY TO CBL</h3>
                        <p>
                            JCBL serves as a stepping stone to the Coastal Basketball League (CBL), providing young players with the experience needed to compete at higher levels.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default JCBLStructure;