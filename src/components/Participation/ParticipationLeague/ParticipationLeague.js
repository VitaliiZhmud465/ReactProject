import React from 'react';
import { Button, Row, Col, Card } from 'antd';
import './ParticipationLeague.css';
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";
// Replace these with your actual image imports
import PartiLeagueImage from "../../../assets/png/League Structure.jpg";
import PartiLeagueImage1 from "../../../assets/png/League Structure-1.jpg";
import PartiLeagueImage2 from "../../../assets/png/League Structure-2.jpg";

const ParticipationLeague = () => {
    const items = [
    {
      title: `TEAM FORMATION`,
      content: 'Teams are formed through a draft process, with players registering individually and being placed on teams based on their skills and experience.',
      imageUrl: PartiLeagueImage,
    },
    {
      title: `COMPETITION FORMAT`,
      content: 'The league runs over several months, culminating in a finals series where the top teams compete for the championship.',
      imageUrl: PartiLeagueImage1,
    },
    {
      title: `PRIZES`,
      content: 'Teams and individual players compete for prizes, including trophies, medals, and MVP awards.',
      imageUrl: PartiLeagueImage2,
    },
    ];

  return (
    <div>
        <div className="programs-section competition-cvontent">
            <BottomDescription
                title1="LEAGUE"
                title2="STRUCTURE"
                content="Explore the league structure"
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

export default ParticipationLeague;
