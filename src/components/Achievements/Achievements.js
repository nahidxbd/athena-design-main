import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import emoji from '../../athena-design-resources/Illustration/happy@2x.png'
import { BiHappy } from 'react-icons/bi';
import { FaTrophy } from 'react-icons/fa';
import { GiPodiumWinner } from 'react-icons/gi';
import { IoIosRocket } from 'react-icons/io';
import './Achivements.css'
const Achievements = () => {
    return (
        <div style={{backgroundColor:"#fafffd",paddingTop:"86px"}}>
            <Container >
                <Row>
                    <Col md={4} className="pb-2 mb-2 pt-5">
                        <div>
                            <h2 style={{ fontFamily: "YesevaOne-Regular", fontWeight: "600" }}>Our Achievements</h2>
                            <small className="text-muted">It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The
                            point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</small>
                        </div>
                    </Col>
                    <Col md={8} >
                        <Row className="d-flex justify-content-around ">
                            <Col md={4} className="py-4 mb-3 d-flex justify-content-center achivements-bg " style={{width:"200px!important"}}>
                                <div className="d-flex px-0">
                                    <div className="px-2 text-center d-flex align-items-center" style={{height:"90px"}}>
                                        <h1 className="h-100 d-flex align-items-center" style={{fontSize:"70px"}}  ><BiHappy></BiHappy></h1>
                                    </div>
                                    <div className="d-flex align-items-center" style={{height:"90px"}}>
                                        <div>
                                            <h5>140+</h5>
                                            <small>Projects Completed</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="py-4 mb-3 d-flex justify-content-center achivements-bgTwo" >
                                <div className="d-flex px-0">
                                    <div className=" text-center d-flex align-items-center" style={{height:"90px"}}>
                                        <h5 className="h-100 d-flex align-items-center pr-2" style={{fontSize:"70px"}}  ><FaTrophy></FaTrophy></h5>
                                    </div>
                                    <div className="d-flex align-items-center" style={{height:"90px"}}>
                                        <div>
                                            <h5>700+</h5>
                                            <small>Happy Clients</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                           
                        </Row>
                        <Row className="d-flex justify-content-around "> 
                        <Col md={4} className="py-4 mb-3 d-flex justify-content-center achivements-bgTwo" >
                                <div className="d-flex px-0">
                                    <div className=" text-center d-flex align-items-center" style={{height:"90px"}}>
                                        <h5 className="h-100 d-flex align-items-center pr-2" style={{fontSize:"70px"}}  ><GiPodiumWinner></GiPodiumWinner></h5>
                                    </div>
                                    <div className="d-flex align-items-center" style={{height:"90px"}}>
                                        <div>
                                            <h5>25+</h5>
                                            <small>Crazy Minds</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="py-4 mb-3 d-flex justify-content-center achivements-bg " style={{width:"200px!important"}}>
                                <div className="d-flex px-0">
                                    <div className="px-2 text-center d-flex align-items-center" style={{height:"90px"}}>
                                        <h1 className="h-100 d-flex align-items-center" style={{fontSize:"70px"}}  ><IoIosRocket></IoIosRocket></h1>
                                    </div>
                                    <div className="d-flex align-items-center" style={{height:"90px"}}>
                                        <div>
                                            <h5>140+</h5>
                                            <small>Projects Completed</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Achievements;