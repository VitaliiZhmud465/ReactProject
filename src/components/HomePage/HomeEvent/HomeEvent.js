import React, { useState, useRef } from 'react';
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
            breakpoint: 1024, // Screen width < 1024px
            settings: {
            slidesToShow: 2, // Show 2 slides for screen widths < 1024px
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768, // Screen width < 768px
            settings: {
            slidesToShow: 1, // Show 1 slide for screen widths < 768px
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
                <Col>
                    <Button
                        className="btn-slide btn-prev"
                        onClick={handleLeftClick}
                        style={{
                        backgroundColor: activeButton === 'right' ? 'white' : '',
                        }}
                    >
                        &lt;-
                    </Button>
                    <Button
                        className="btn-slide btn-next"
                        onClick={handleRightClick}
                        style={{
                        backgroundColor: activeButton === 'left' ? 'white' : '',
                        }}
                    >
                        -&gt;
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