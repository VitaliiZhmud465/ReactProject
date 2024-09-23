import React from 'react';
import { Card, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './HomeNews.css';
import Slider from "@ant-design/react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BottomDescription } from "components/Description/BottomDescription/BottomDescription";

import News1 from "../../../assets/png/news1.jpg";
import News2 from "../../../assets/png/news2.jpg";
import News3 from "../../../assets/png/news3.jpg";
import News4 from "../../../assets/png/news4.jpg";
import News5 from "../../../assets/png/news5.jpg";
import News6 from "../../../assets/png/news6.jpg";
import News7 from "../../../assets/png/news7.jpg";
import News8 from "../../../assets/png/news8.jpg";
import News9 from "../../../assets/png/news9.jpg";

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick} style={arrowStyle}>
    →
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick} style={arrowStyle}>
    ←
  </div>
);

const arrowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: '#fff',
    background: 'rgba(0, 0, 0, 0.5)', // Background color for visibility
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    cursor: 'pointer',
};

const HomeNews = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const newsItems = [
        {
        title: 'CHAMPIONSHIP COACH ELEVATES INTO NEW ROLE',
        date: 'Wed - Aug 28 - 2024',
        author: 'Lara',
        imageUrl: News1,
        authorUrl:News1,
        },
        {
        title: 'RECAP NBL1 WEST | MEN\'S GRAND FINAL',
        date: 'Mon - Aug 26 - 2024',
        author: 'Shiburu',
        imageUrl: News2,
        authorUrl:News2,
        },
        {
        title: 'PLAYERS REWARDED WITH CHAMPIONSHIP',
        date: 'Fri - Aug 23 - 2024',
        author: 'Chris Pike',
        imageUrl: News3,
        authorUrl:News3,
        },
        {
        title: 'PROMISE TO BRING CHAMPIONSHIP',
        date: 'Wed - Aug 20 - 2024',
        author: 'Cherry',
        imageUrl: News4,
        authorUrl:News4,
        },
        {
        title: 'PROMISE TO BRING CHAMPIONSHIP',
        date: 'Wed - Aug 20 - 2024',
        author: 'Cherry',
        imageUrl: News5,
        authorUrl:News5,
        },
        {
        title: 'PROMISE TO BRING CHAMPIONSHIP',
        date: 'Wed - Aug 20 - 2024',
        author: 'Cherry',
        imageUrl: News6,
        authorUrl:News6,
        },
        {
        title: 'PROMISE TO BRING CHAMPIONSHIP',
        date: 'Wed - Aug 20 - 2024',
        author: 'Cherry',
        imageUrl: News7,
        authorUrl:News7,
        },
        {
        title: 'PROMISE TO BRING CHAMPIONSHIP',
        date: 'Wed - Aug 20 - 2024',
        author: 'Cherry',
        imageUrl: News8,
        authorUrl:News8,
        },
        {
        title: 'PROMISE TO BRING CHAMPIONSHIP',
        date: 'Wed - Aug 20 - 2024',
        author: 'Cherry',
        imageUrl: News9,
        authorUrl:News9,
        },
    ];

    return (
        <div className="news-rect">
            <BottomDescription
                title1="OUR DYNAMIC"
                title2="BRANCHES"
                content="Explore our all of Branches"
            />
            <Slider {...settings} style={{ margin: 0, padding: 0 }}>
                {newsItems.map((item, index) => (
                    <div key={index} className="slide-card" style={{ margin: 0, padding: 0 }}>
                        <Card
                            hoverable
                            style={{ height: '400px', margin: 0, padding: 0 }}
                        >
                            <div style={{ position: 'relative', height: '100%' }}>
                                <img
                                    alt={item.title}
                                    src={item.imageUrl}
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                                <div className="hover-overlay"></div>
                                <div
                                style={{
                                    padding: '0 20px',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '50%',
                                    background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#fff',
                                }}
                                >
                                    <p className="w-full">{item.date}</p>
                                    <h3 className="font-24 bold white mt-10">{item.title}</h3>

                                    <Row gutter={[16, 16]} justify="left" className="w-full">
                                        <Col>
                                            <img
                                            alt='Author name'
                                            src={item.authorUrl}
                                            style={{ 
                                                width: '40px', 
                                                height: '40px', 
                                                objectFit: 'cover',
                                                borderRadius: '50%' 
                                            }}
                                            />
                                        </Col>
                                        <Col>
                                            <p className="text-left">{item.author}</p>
                                            <p className="text-left">AUTHOR</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                    </Card>
                </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeNews;