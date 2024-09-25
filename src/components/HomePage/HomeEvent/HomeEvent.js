import React, { useEffect, useState, useRef } from 'react';
import { Button, Row, Col } from 'antd';
import './HomeEvent.css';
import Slider from "@ant-design/react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Event from "../../../assets/png/Event Item.jpg";
import Event1 from "../../../assets/png/Event Item-1.jpg";
import Event2 from "../../../assets/png/Event Item-2.jpg";
import Event3 from "../../../assets/png/Event Item-3.jpg";
import Event4 from "../../../assets/png/Event Item-4.jpg";

let prevArrowClickHandler = null;

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick} style={arrowStyle}>
  </div>
);

const PrevArrow = ({ onClick }) => {
  prevArrowClickHandler = onClick;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick} style={arrowStyle}>
    </div>
  );
};

const arrowStyle = {
  display: 'none',
};

const HomeEvent = () => {
    const sliderRef = useRef(null);
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
        {
        title: 'Youth League Kickoff: Future Stars on the Count',
        imageUrl: Event4,
        },
        {
        title: 'All-Star Weekend: Play with the Pros',
        imageUrl: Event3,
        },
        {
        title: 'Community Open: Join the Coastal Basketball Family',
        imageUrl: Event2,
        },
        {
        title: 'Summer Skills Camp: Elevate Your Game',
        imageUrl: Event1,
        },
        {
        title: 'Youth League Kickoff: Future Stars on the Count',
        imageUrl: Event,
        },
    ];

    const [activeButton, setActiveButton] = useState(null);

    const handleLeftClick = () => {
        setActiveButton('left');
        
        if (prevArrowClickHandler) {
        prevArrowClickHandler();
        }
    };

    const handleRightClick = () => {
        setActiveButton('right');
        if (sliderRef.current) {
        sliderRef.current.slickNext();
        }
    };
    
    useEffect(() => {
        setActiveButton('right');
        handleRightClick();
    }, []);

    return (
        <div className="event-rect">
            <Row justify="space-between" className="title-content">
                <Col>
                    <h1 className="event-title font-48 bold white">
                        EVENTS 8<br />
                        ANNOUNCEMENTS
                    </h1>
                    <p className="font-18 bold grey">Learn more about our upcoming events</p>
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
            <Slider {...settings} className="event-slides-content mt-40" ref={sliderRef}>
                {newsItems.map((item, index) => (
                    <div key={index} className="slide-event-card">
                        <div className="p-10 img-slide">
                            <img
                                alt={item.title}
                                src={item.imageUrl}
                                style={{ width: '100%', height: '270px', objectFit: 'cover' }}
                            />
                        </div>
                        <Row gutter={[16, 16]} className="mt-40" style={{ display: 'flex' }}>
                            <Col>
                                <Button className="btn-limited-spots" >
                                    LIMITED SPOTS
                                </Button>

                            </Col>
                            <Col>
                                <Button className="btn-limited-tour" >
                                    TOURNAMENT
                                </Button>
                            </Col>
                        </Row>
                        <p className="font-24 bold white mt-10">{item.title}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeEvent;