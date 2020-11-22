import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WeDo.css';
import one from '../../athena-design-resources/Illustration/Group 65@2x.png';
import two from '../../athena-design-resources/Illustration/Group 66@2x.png';
import three from '../../athena-design-resources/Illustration/Group 69@2x.png';
import four from '../../athena-design-resources/Illustration/Group 72@2x.png';
const WeDo = () => {
    return (
        <div className="pt-5" style={{ backgroundColor: "#fafffd" }}>
            <div className="text-center">
                <h2 className="pb-0 mb-0" style={{ fontFamily: "YesevaOne-Regular", fontWeight: "600" }}>What we do</h2>
                <div>
                    <small className="text-muted">Our main focus is to make the User Experience very <br /> simple and easy. Simplicity is our Strength.</small>
                </div>
            </div>
            <div className="wave">
                <Container className="pt-5 ">
                    <Row className="d-flex justify-content-center">
                        <Col md={4} lg={3} className="mb-5 fards px-5 py-5">

                            <div className="">
                                <div style={{ height: '80px' }} className="text-center mb-4">

                                    <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={one} alt="ima" />
                                </div>
                                <div className="text-center mt-2">
                                    <h5 className="">Experience Design</h5>
                                    <small className="mt-3 text-muted">The point of using Lorem
                                Ipsum is that it has a more-orless normal.</small>
                                </div>
                            </div>

                        </Col>
                        <Col md={4} lg={3} className="mb-5 fards px-5 py-5 ">

                            <div className="">
                                <div style={{ height: '80px' }} className="text-center mb-4">

                                    <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={two} alt="ima" />
                                </div>
                                <div className="text-center mt-2">
                                    <h5 className="">Interface Design</h5>
                                    <small className="mt-3 text-muted">The point of using Lorem
                                Ipsum is that it has a more-orless normal.</small>
                                </div>
                            </div>

                        </Col>
                        <Col md={4} lg={3} className="mb-5 fards px-5 py-5">

                            <div className="">
                                <div style={{ height: '80px' }} className="text-center mb-4">

                                    <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={three} alt="ima" />
                                </div>
                                <div className="text-center mt-2">
                                    <h5 className="">Prototyping</h5>
                                    <small className="mt-3 text-muted">The point of using Lorem
                                Ipsum is that it has a more-orless normal.</small>
                                </div>
                            </div>

                        </Col>
                        <Col md={4} lg={3} className="mb-5 fards px-5 py-5">

                            <div className="">
                                <div style={{ height: '80px' }} className="text-center mb-4">

                                    <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={four} alt="ima" />
                                </div>
                                <div className="text-center mt-2">
                                    <h5 className=""> Illustration</h5>
                                    <small className="mt-3 text-muted">The point of using Lorem
                                Ipsum is that it has a more-orless normal.</small>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default WeDo;