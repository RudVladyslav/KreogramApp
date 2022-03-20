import React, {useState} from 'react';
import stories_1 from "../image/examples/stories_1.jpg";
import stories_2 from "../image/examples/stories_2.jpg";
import stories_3 from "../image/examples/stories_3.jpg";
import stories_4 from "../image/examples/stories_4.jpg";
import stories_5 from "../image/examples/stories_5.jpg";
import stories_6 from "../image/examples/stories_6.jpg";
import stories_7 from "../image/examples/stories_7.jpg";
import stories_8 from "../image/examples/stories_8.jpg";
import stories_9 from "../image/examples/stories_9.jpg";

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
// Import Swiper styles
import 'swiper/css';

const SwiperComponent = () => {
    const storiesState = [stories_1, stories_2, stories_3, stories_4, stories_5, stories_6, stories_7, stories_8, stories_9]

    SwiperCore.use([Autoplay]);

    return (
        <Swiper
            spaceBetween={50}
            loop={true}
            slidesPerView={'auto'}
            centeredSlides={false}
            pagination={{
                el: ".swiper-pagination",
                clickable: true
            }}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false
            }}
        >
            {storiesState.map((stories, index) => <SwiperSlide key={`${index}_${stories}`}>
                <img src={stories} alt=""/>
            </SwiperSlide>)}
        </Swiper>
    );
};

export default SwiperComponent;
