import React from "react";
import {Container,Row,Col,ListGroup,ListGroupItem} from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import '../../styles/footer.css';
import {Link} from "react-router-dom";
const Footer = () => {
    return <footer className={"footer"} >

    <Container>

        <Row>
            <Col lg='3' md='4' sm='6'>
                <div className="logo footer_logo text-start">
                    <img src={logo} alt="logo"/>
                    <h5>TeDera</h5>
                    <p>
                        I like people who love to eat. They’re the best kind of people in the world.
                    </p>
                </div>
            </Col>

            <Col lg='3' md='4' sm='6'>
                <h5 className="footer_title">Delivery Time</h5>
                <ListGroup>
                    <ListGroupItem className="delivery_time-item border-0 ps-0">
                        <span>Sunday-Thursday</span>
                        <p>10:00am-11:00pm</p>
                    </ListGroupItem>
                    <ListGroupItem className="delivery_time-item border-0 ps-0">
                        <span>Friday-Saturday</span>
                        <p>OFF DAY</p>
                    </ListGroupItem>
                </ListGroup>
            </Col>

            <Col lg='3' md='4' sm='6'>
                <h5 className="footer_title">Contact</h5>
                <ListGroup>
                    <ListGroupItem className="delivery_time-item border-0 ps-0">
                        <span>Location:Rruga B Prishtina, Kosovo</span>

                    </ListGroupItem>
                    <ListGroupItem className="delivery_time-item border-0 ps-0">
                        <span>Phone: +383 45215897</span>

                    </ListGroupItem>

                    <ListGroupItem className="delivery_time-item border-0 ps-0">
                        <span>Email:TeDera@gmail.com</span>

                    </ListGroupItem>
                </ListGroup></Col>

            <Col lg='3' md='4' sm='6'>
                <h5 className="footer_title">NewsLetter</h5>
                <p>Subscribe our newsletter</p>
                <div className="newsletter">
                    <input type="email" placeholder="Vendoseni emailin"/>
                    <span><i className="ri-send-plane-fill"></i>
                    </span>
                </div>
            </Col>
        </Row>
        <Row className="mt-5">
        <Col lg='6' md='6'>
            <p className="copyright_text">Copyright-2023,webside made by Grupi23</p>
        </Col>
        <Col lg='6' md='6'>
            <div className="social_links d-flex align-items-center gap-4 justify-content-end">
                <p className="m-0">Follow:</p>
                <span><Link to='https://github.com/Blerina2'><i className="ri-github-fill"></i></Link></span>

            </div>

        </Col>

        </Row>

    </Container>

    </footer>
};

export default Footer;
