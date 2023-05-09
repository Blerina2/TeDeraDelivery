import React,{useState,useEffect} from "react";
import Helmet from "../components/Helmet/Helmet.js";
import {Container,Row,Col,ListGroup,ListGroupItem} from "reactstrap";
import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css'
import '../styles/home.css'
import {Link} from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'

import products from "../assets/fake-data/products.js";
import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from '../assets/images/location.png'

import networkImg from '../assets/images/network.png'

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData=[
    {
        title:'Quick Delivery',
        imgUrl:featureImg01,
        desc:"Good food in minutes"
    },
    {
        title:'Super Dine In',
        imgUrl:featureImg02,
        desc:"Food at the speed of a click"
    },
    {
        title:'Easy Pick Up',
        imgUrl:featureImg03,
        desc:"Satisfaction Delivered"
    },


    ]

const Home = () => {

    const [category,setCategory]=useState('ALL');
    const [allProducts,setAllProducts]=useState(products);

    const [hotPizza,setHotPizza]=useState([]);
    useEffect(()=>{
        const filteredPizza=products.filter(item=>item.category ==='Pizza')
        const slicePizza=filteredPizza.slice(0,4)
        setHotPizza(slicePizza)
    })


    useEffect(()=>{
        if (category === 'ALL'){
            setAllProducts(products)
        }
        if(category=== 'BURGER'){
            const filteredProducts=products.filter(item=>
                item.category=== 'Burger')

            setAllProducts(filteredProducts)
        }
            if(category=== 'PIZZA'){
            const filteredProducts=products.filter(item=>
                item.category=== 'Pizza')

            setAllProducts(filteredProducts)
        }
            if(category=== 'BREAD'){
            const filteredProducts=products.filter(item=>
                item.category=== 'Bread')

            setAllProducts(filteredProducts)
        }

    },[category])



  return(
    <Helmet title="Home">
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
                      <h5 className="feature_subtitle mb-4">Tired and hungry? </h5>
                      <h2 className="feature_title">Just give us a call</h2>
                      <h2 className="feature_title">You select,<span>We Deliver</span> </h2>
                      <p className="mb-1 mt-4 feature_text">Home food delivery service that’s easy on the wallet</p>
                      <p className="feature_text">Order, eat and enjoy.{" "}</p>
                  </Col>

                    {
                        featureData.map((item,index)=>(
                            <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                                <div className="feature_item text-center px-5 py-3">
                                    <img src={item.imgUrl}
                                         alt="feature-img"
                                         className="w-25 mb-3"/>
                                    <h5 className="fw-bold mb-3">{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>

                            </Col>

                        ))
                    }


                    <Col lg='4' md='4'>
                        <div className="feature_item">

                        </div>

                    </Col>


              </Row>

                </Container>
      </section>

      <section>
          <Container>
              <Row>
                  <Col lg="12" className="text-center" >
                      <h2>Popular Foods</h2>
                  </Col>

                  <Col lg='12'>

                      <div className="food_category d-flex align-items-center
                      justify-content-center gap-4">
                      <button className={`all_btn ${category === 'ALL'? 
                          'foodBtnActive':' '}`}
                              onClick={()=>setCategory('ALL')}>
                          All
                      </button>

                      <button className={`d-flex align-items-center gap-2 ${category === 'BURGER'? 
                          'foodBtnActive':' '}`}
                              onClick={()=>setCategory('BURGER')}>
                          <img src={foodCategoryImg01} alt="" />
                          Burger
                      </button>

                      <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA'?
                      'foodBtnActive': ' '}`}
                              onClick={()=>setCategory('PIZZA')}>
                          <img src={foodCategoryImg02} alt="" />
                          Pizza
                      </button>

                      <button className={`d-flex align-items-center gap-2 ${category === 'BREAD'? 
                      'foodBtnActive':' '}`}
                              onClick={()=>setCategory('BREAD')}>
                          <img src={foodCategoryImg03} alt="" />
                          Bread
                      </button>

                      </div>
                  </Col>
                  {allProducts.map(item=>(
                          <Col lg="3" md="4" sm='6' xs='6' key={item.id} className="mt-5">
                              <ProductCard item={item}/>
                          </Col>
                      ))}


              </Row>
          </Container>
      </section>

        <section className="why_choose-us">
            <Container>
                <Row>
                    <Col lg='6' md='6' >
                    <img src={whyImg} alt="why-TeDera " className="w-100" />
                    </Col>

                    <Col lg='6' md='6' >
                        <div className="why_TeDera">
                            <h2 className="TeDera-title mb-4">Why <span>TeDera?</span></h2>
                            <p className="TeDera-desc">
                                Our food delivery service offers the convenience of ordering from a variety of restaurants,
                                with quick and reliable delivery straight to your door. Our online platform allows for easy ordering and tracking of your food,
                                with options for customization and special requests. Plus, our team of skilled delivery drivers
                                ensures that your food arrives hot and fresh, every time.Choose our food delivery service for a
                                hassle-free and delicious dining experience.</p>

                            <ListGroup className="mt-4">
                                <ListGroupItem className="border-0 ps-0">

                                   <p className="choose_us-title d-flex align-items-center gap-2">
                                       <i className="ri-checkbox-circle-fill"></i>
                                       Fast, delicious and hassle-free
                                   </p>
                                    <p className="choose_us-desc">That’s what we do best
                                    </p>
                                </ListGroupItem>

                                <ListGroupItem className="border-0 ps-0">
                                    <p className=" choose_us-title d-flex align-items-center gap-2">
                                        <i className="ri-checkbox-circle-fill"></i>
                                    Quality support</p>
                                    <p className="choose_us-desc">Speedy food, good food
                                    </p>
                                </ListGroupItem>

                                <ListGroupItem className="border-0 ps-0">
                                  <p className="choose_us-title d-flex align-items-center gap-2">
                                      <i className="ri-checkbox-circle-fill"></i>
                                    Order from any location{" "}
                                  </p>
                                <p className="choose_us-desc">Free delivery for you only
                                </p>
                                  </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="pt-0">
            <Container>
                <Row>
                    <Col lg='12' className="text-center mb-5">
                        <h2>Hot Pizza</h2>
                    </Col>
                    {
                        hotPizza.map(item=>(
                            <Col lg='3' md='4' key={item.id}>
                                <ProductCard item={item}></ProductCard>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>

                    <Col lg='6' md='4'>
                        <div className="testimonial ">
                            <h5 className="testimonial_subtitle mb-4">Testimonial</h5>
                            <h2 className="testimonial_title mb-4">
                                What our <span>customers</span> are saying
                            </h2>
                            <p className="testimonial_desc">
                                I recently tried out this amazing food ordering service and I must say, I was thoroughly impressed.
                                The ordering process was quick, easy and hassle-free.
                                The website was user-friendly with a clean design that made it easy to navigate through different food options.

                            </p>

                            <TestimonialSlider/>

                        </div>
                    </Col>

                    <Col lg='6'md='6'>
                        <img src={networkImg} alt="testimonial-img " className="w-100"/>
                    </Col>
                </Row>

            </Container>

        </section>

  </Helmet>
  )
};

export default Home;