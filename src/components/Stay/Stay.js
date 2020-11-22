import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Stay.css';
import stay from '../../athena-design-resources/Illustration/stay.png';
const Stay = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    useEffect(() => {
        const handleWindowResize = () => setScreenSize(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])
    return (
       
        <div className="background-img">
            {
                console.log(screenSize)
            }
            <Container className="pt-5 mt-2 pb-5 mb-2 ">
               {
                   screenSize >=768 ? <Row className="h-100">
                   <Col md={6} className={`text-center px-0 col-md-6`}>
                       <div>
                           <img className="w-75" src={stay} alt="" />
                       </div>
                   </Col>
                   <Col md={5} className="d-flex align-items-center col-md-5" >
                       <div>
                           <h2 style={{ fontFamily: "YesevaOne-Regular",fontWeight:"bold" }} className="">Stay Running & Project</h2>
                           <small className="text-muted">It is a long established fact that a reader will be distracted by the
                           readable content of a page when looking at its layout. The point of
                           using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</small>
                           <div className="pt-4">
                               <button className="contactUs-btn">Contact Us</button>
                           </div>
                       </div>
                   </Col>
               </Row>:
                <Row className="h-100">
                     <Col md={5} className="d-flex align-items-center col-md-5" >
                    <div>
                        <h2 style={{ fontFamily: "YesevaOne-Regular",fontWeight:"bold" }} className="">Stay Running & Project</h2>
                        <small className="text-muted">It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of
                        using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</small>
                        <div className="pt-4">
                            <button className="contactUs-btn">Contact Us</button>
                        </div>
                    </div>
                </Col>
                <Col md={6} className={`text-center px-0 col-md-6`}>
                    <div>
                        <img className="w-75" src={stay} alt="" />
                    </div>
                </Col>
               
            </Row>
               }
            </Container>
        </div>
    );
};

export default Stay;