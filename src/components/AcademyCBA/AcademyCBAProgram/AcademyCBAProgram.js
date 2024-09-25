import React from 'react';
import { Button, Row, Col, Card } from 'antd';
import './AcademyCBAProgram.css';
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";

import HeroImage from "../../../assets/png/Hero.jpg";
import CBPrepImage from "../../../assets/png/Programs.jpg";
import CBNextGenImage from "../../../assets/png/Programs-1.jpg";
import CBEliteImage from "../../../assets/png/Programs-2.jpg";

const AcademyCBAProgram = () => {
    const items = [
    {
      date: '14 - 18 YEARS',
      title: `CB PREP`,
      content: 'A foundational program focusing on skill development through camps, clinics, and regular training sessions. Ideal for players who are serious about improving their game.',
      imageUrl: CBPrepImage,
    },
    {
      date: '18 - 21 YEARS',
      title: `CB NEXTGEN`,
      content: 'A foundational program focusing on skill development through camps, clinics, and regular training sessions. Ideal for players who are serious about improving their game.',
      imageUrl: CBNextGenImage,
    },
    {
      date: '18+ YEARS',
      title: `CB ELITE`,
      content: 'A foundational program focusing on skill development through camps, clinics, and regular training sessions. Ideal for players who are serious about improving their game.',
      imageUrl: CBEliteImage,
    },
    ];

  return (
    <div>
        <div className="programs-section">
            <BottomDescription
                title1="ACADEMY"
                title2="PROGRAMS"
                content="Explore and join our academic programs"
            />

            <Row className="mt-40" gutter={45} justify="space-between">
            {items.length > 0 ? items.map((item, index) => (
                <Col key={index} xs={24} sm={12} md={8}>
                    <Card
                        hoverable
                        cover={
                            <div style={{ padding: '15px' }}>
                                <img alt={item.title} src={item.imageUrl} style={{ width: '100%', height: 'auto' }} />
                            </div>
                        }
                    >
                        <h5 className="font-16 red bold mt--15">{item.date}</h5>
                        <h2 className="bold academy-program-title">{item.title}</h2>
                        <p>{item.content}</p>
                    </Card>
                </Col>
            )) : <p>No items available.</p>}
            </Row>
        </div>
    </div>
  );
};

export default AcademyCBAProgram;
