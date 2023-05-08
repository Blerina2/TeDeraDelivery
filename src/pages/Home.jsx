import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import {Container,Row,Col} from "reactstrap";
import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css'
import '../styles/home.css'
import {Link} from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

const Home = () => {
  return <Helmet title="Home">
    <section>
      <Container>
        <Row>
         <Col lg='6' md='6'>
           <div className="hero_content">
            <h5 className="mb-4">Easy way to make an order</h5>
               <h1 className="mb-1 hero_title"><span>HUNGRY?</span>Just order and we’ll be at
                   <span>  your door.</span></h1>
           <p>See you at your next meal</p>

               <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                   <button className="order_btn d-flex align-items-center
                   justify-content-between">Order now
                       <i className="ri-arrow-right-s-fill"></i></button>
                   <button className="all_foods-btn">
                       <Link to='/foods'>See all foods</Link>
                   </button>
               </div>
               <div className="hero_service d-flex align-items-center gap-5 mt-5">
                   <p className="d-flex align-items-center gap-2">
                       <span className="shipping_icon">
                       <i className="ri-roadster-fill"></i></span>No shipping charge</p>

                   <p className="d-flex align-items-center gap-2">
                       <span className="shipping_icon">
                       <i className="ri-shield-check-fill"></i></span>100% secure checkout</p>
               </div>
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

      <section className="pt-0">
          <Category/>

      </section>
            <section>
                <Container>
                <Row>
                  <Col lg="12" className="text-center">
                      <h5 className="feature_subtitle">Tired and hungry? </h5>
                      <h2 className="feature_title">Just give us a call</h2>
                      <h2 className="feature_title">You select,<span>We Deliver</span> </h2>
                  </Col>

              </Row>

                </Container>
      </section>

  </Helmet>

};

export default Home;