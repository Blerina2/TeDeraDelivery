import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import {Container,Row,Col} from "reactstrap";
import heroImg from '../assets/images/hero.png';
const Home = () => {
  return <Helmet title="Home">
    <section>
      <Container>
        <Row>
         <Col lg='6' md='6'>
           <div className="hero_content">

           </div>
         </Col>
          <Col lg='6' md='6'>
           <div className="hero_img">
             <img src={heroImg} alt="hero-Img" className='w-100'></img>
           </div>
         </Col>



        </Row>


      </Container>


    </section>
  </Helmet>

};

export default Home;