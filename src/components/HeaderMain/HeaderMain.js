import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HeaderMain.css';
import headerMainCover from '../../athena-design-resources/Illustration/headerMainCover.png'
const HeaderMain = () => {
    return (
        <div>
            <Container>
                <Row style={{ paddingTop: "40px", paddingBottom: "40px" }} className="d-flex align-items-start">
                    <Col md={5}>
                        <div>
                            <h2 style={{ fontFamily: "YesevaOne-Regular", fontSize: "65px", fontWeight: "600" }} className="p-0 mb-3">Florence agency</h2>
                            <small className="mt-5 pb-2 text-muted">Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                            <div className="pt-3">
                                <button className="pricing-btn">See Pricing</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className="text-center">
                        <img className="w-75" src={headerMainCover} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderMain;