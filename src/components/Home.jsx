import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderOneImg from '../assets/images/shop.jpg'
import SliderTwoImg from '../assets/images/shop1.jpg'
import LatestProducts from './common/LatestProducts';

const Home = () => {
    return (
        <>
            {/* Header keeps navigation and utility actions grouped for consistent spacing across breakpoints. */}
            <header className='shadow'>
                <div className='bg-dark text-white p-4 text-center'>
                    <span>Welcome to the Home Page</span>
                </div>

                <div className='container'>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#">
                            <img src={Logo} alt="Logo" height="50" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Cats</Nav.Link>
                                <Nav.Link href="#action2">Dogs</Nav.Link>
                                <Nav.Link href="#action3">Birds</Nav.Link>
                            </Nav>
                            <div className='nav-right d-flex'>
                                <a href='' className='ms-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                                        <path d="M14 14s-1-1.5-6-1.5S2 14 2 14s1-4.5 6-4.5S14 14 14 14zm-1-.004c-.001-.246-.154-.986-.832-1.608C11.387 12.173 10.28 12.5 8.001 12.5c-2.28 0-3.387-.327-4.167-.904C3.154 13.01 3.001 13.75 3 13.996a.999.999 0 0 0 .998.999h10.004A.999.999 0 0 0 13 13.996z" />
                                    </svg>
                                </a>
                                <a href='' className='ms-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L1.01 3H.5a.5.5 0 0 1-.5-.5zM3.14 4l1.25 6h8.22l1.25-6H3.14zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                                    </svg>
                                </a>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>

            {/* Hero carousel uses full-bleed background images so each slide can scale without image tag layout shifts. */}
            <section className='section-1'>
                {/* Keeping slide events wired helps verify Swiper lifecycle while iterating on transitions. */}
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log('swiper', swiper)}
                >
                    <SwiperSlide>
                        <div className='content' style={{ backgroundImage: `url(${SliderOneImg})` }}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='content' style={{ backgroundImage: `url(${SliderTwoImg})` }}></div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <LatestProducts />
        </>
    )
}

export default Home