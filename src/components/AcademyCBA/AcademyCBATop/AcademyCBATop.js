import React from 'react';
import { Button, Row, Col, Typography } from 'antd';
import './AcademyCBATop.css'; // Your custom CSS
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription"; // Keep your custom components
import HeroImage from "../../../assets/png/Hero.jpg"; // Import your images

const { Title, Paragraph } = Typography; // Ant Design Typography components

const AcademyCBA = () => {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <div className="image-container">
          <img src={HeroImage} width="100%" height="auto" alt="Academy Banner" />
          <div className="image-mask"></div>
          <div className="hero-content">
            <Row justify="center">
              <Col className="academy-basketball-content">
                <Button className="btn-academy-basketball">
                  DEVELOPING THE FUTURE OF BASKETBALL
                </Button>
              </Col>
            </Row>

            <Title level={1} className="mt-20 text-center font-48">
              COASTAL BASKETBALL <br />ACADEMY <span className="red">[CBA]</span>
            </Title>

            <Paragraph className="font-24 text-center black">
              Coastal Basketball Academy (CBA) is dedicated to cultivating the next generation of basketball talent. With programs tailored to different age groups and skill levels, CBA provides a comprehensive development pathway from grassroots to elite competition.
            </Paragraph>
          </div>
        </div>

        {/* Hero Content */}

      </div>
    </div>
  );
};

export default AcademyCBA;
