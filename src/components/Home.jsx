import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderOneImg from '../assets/images/shop.jpg'
import SliderTwoImg from '../assets/images/shop1.jpg'
import Layout from './common/Layout';
import LatestProducts from './common/LatestProducts';
import FeaturedProducts from './common/FeaturedProducts';

const Home = () => {
    return (
        <>
            {/* Header keeps navigation and utility actions grouped for consistent spacing across breakpoints. */}
            <Layout>

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

            <FeaturedProducts />

            </Layout>
        </>
    )
}

export default Home