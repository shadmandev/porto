import React, { useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./hero.css";

const Hero = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-intro-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>DO YOU NEED A NEW</h3>
                        <h1>WEB DESIGN?</h1>
                        <p>Check out our options and features</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-intro-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3> WE WORK HARD AND PORTO HAS </h3>
                        <h1>THE BEST DESIGN</h1>
                        <p>
                            Trusted by over 40,000 satisfied users, Porto is a
                            huge success in the one of largest world's
                            MarketPlace
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-intro-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>WE CREATE DESIGNS, WE ARE</h3>
                        <h1>PORTO</h1>
                        <p>The best choice for your new website</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="hero-btm-wrap">
                <Container>
                    <Row>
                        <Col md={8}>
                            <h2 className="title">
                                The fastest way to grow your business with the
                                leader in
                            </h2>
                            <h3>Technology</h3>
                            <p>Check out our options and features included.</p>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Hero;
