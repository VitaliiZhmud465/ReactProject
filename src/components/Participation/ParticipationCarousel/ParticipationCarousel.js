import React, { useState, useRef, useEffect } from 'react';
import { Button, Card, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './ParticipationCarousel.css';
import Slider from "@ant-design/react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";

import TeamLogoImage from "../../../assets/png/Team logos.jpg";
import TeamLogoImage1 from "../../../assets/png/Team logos-1.jpg";
import TeamLogoImage2 from "../../../assets/png/Team logos-2.jpg";
import TeamLogoImage3 from "../../../assets/png/Team logos-3.jpg";
import TeamLogoImage4 from "../../../assets/png/Team logos-4.jpg";

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick} style={arrowStyle}></div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick} style={arrowStyle}></div>
);

const arrowStyle = {
  display: 'none',
};

const ParticipationCarousel = () => {
  const sliderRef = useRef(null);
  const [activeButton, setActiveButton] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const newsItems = [
    { town_name: 'AUSTRALIND', club_name: 'AUSTRALIND ARROWS', teamLogoUrl: TeamLogoImage },
    { town_name: 'BUNBURY', club_name: 'BUNBURY WARRIORS', teamLogoUrl: TeamLogoImage1 },
    { town_name: 'BUSSELTON', club_name: 'BUSSELTON SHARKS', teamLogoUrl: TeamLogoImage2 },
    { town_name: 'EATON', club_name: 'EATON HEAT', teamLogoUrl: TeamLogoImage3 },
    { town_name: 'HARVEY', club_name: 'HARVEY GIANTS', teamLogoUrl: TeamLogoImage4 },
  ];

  const handleLeftClick = () => {
    setActiveButton('left');
    sliderRef.current?.slickPrev();
  };

  const handleRightClick = () => {
    setActiveButton('right');
    sliderRef.current?.slickNext();
  };

  useEffect(() => {
    setActiveButton('right');
    handleRightClick();
  }, []);

  return (
    <>
      <Row className="news-rect" justify="space-between">
        <Col>
          <BottomDescription title1="PARTICIPATING" title2="TEAMS" content="Meet the participating teams from Australind, Bunbury, Eaton, Busselton." />
        </Col>
        <Col className="btn-carousel-direction">
          <Button
            className="btn-slide btn-prev"
            onClick={handleLeftClick}
            style={{
              backgroundColor: activeButton === 'right' ? 'white' : '',
              padding: '0px 3px 0px 3px',
              height: '50px',
              width: '80px',
            }}
          >
            <div className="icon-container">
              <div className="left-arrow arrow"
                style={{
                  borderRight: activeButton === 'left' ? '12px solid #fff' : '12px solid #97AFC1',
                  transform: 'rotate(360deg)',
                }}></div>
              <div className="line"
                style={{ border: activeButton === 'left' ? '1px solid #fff' : '1px solid #97AFC1' }}></div>
              <div className="circle"
                style={{ border: activeButton === 'left' ? '2px solid #fff' : '2px solid #97AFC1' }}></div>
            </div>
          </Button>

          <Button
            className="btn-slide btn-next"
            onClick={handleRightClick}
            style={{
              backgroundColor: activeButton === 'right' ? 'var(--darkPurple)' : '',
              padding: '0px 1px 0px 15px',
              height: '50px',
              width: '80px',
            }}
          >
            <div className="icon-container">
              <div className="circle"
                style={{ border: activeButton === 'right' ? '2px solid #fff' : '2px solid #97AFC1' }}></div>
              <div className="line"
                style={{ border: activeButton === 'right' ? '1px solid #fff' : '1px solid #97AFC1' }}></div>
              <div className="arrow"
                style={{ borderRight: activeButton === 'right' ? '12px solid #fff' : '12px solid #97AFC1' }}></div>
            </div>
          </Button>
        </Col>
      </Row>
      <Slider {...settings} className="partici-sliders-content mt-40 mb-50" ref={sliderRef}>
        {newsItems.map((item, index) => (
          <div key={index} className="slide-event-card">
            <Card
              bordered={false}
              style={{
                height: '620px',
                backgroundRepeat: 'no-repeat',
                padding: '0px',
                border: index % 2 === 0 ? '1px solid var(--redColor)' : '1px solid var(--darkPurple)',
              }}
              cover={<img alt="Player Selection" src={item.teamLogoUrl} />}
            >
              <div style={{
                backgroundColor: index % 2 === 0 ? 'var(--redColor)' : 'var(--darkPurple)', // Alternating slide background color
                padding: '40px 30px 28px 30px',
                height: '53%',
                display:'flex',
                flexDirection: 'column',
                justifyContent:'space-between'
              }}>
                <div>
                    <p>{item.town_name}</p>
                    <h2>{item.club_name}</h2>
                </div>
                <div style={{
                  border: '1px solid white',
                  padding: '4px',
                  background: 'none',
                }}>
                  <Button
                    className=""
                    style={{
                      backgroundColor: index % 2 === 0 ? 'var(--darkPurple)' : 'var(--redColor)', // Alternating button background color
                      width: '100%',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '19px',
                      padding: '13px 50px',
                      height: '60px',
                    }}
                  >
                    VIEW TEAM
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ParticipationCarousel;