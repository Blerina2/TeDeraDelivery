import React from "react";
import {Col, Container, Row} from "reactstrap";

const Contact = () => {
  return(

      <section>
      <Container className="mb-4">
        <Row>
          <Col lg="12" className="text-center">
            <h5 className="feature_subtitle mb-4">Do you have questions? </h5>
            <h2 className="feature_title mb-1">Just give us a call</h2>
            <h2 className="feature_title">You Ask, <span>We Answer</span> </h2>
            <p className="mb-1 mt-4 feature_text">Thank you for choosing us</p>
            <p className="feature_text">Order, eat and enjoy.{" "}</p>
              <h5  className="feature_subtitle">TeDera</h5>
          </Col>
          </Row>
      </Container>
      </section>
          )};

export default Contact;
