import React, { useEffect, useState } from 'react';




// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { FaPlus } from 'react-icons/fa';
import ToyImage from './ToyImage';




const ToyGallary = ({children}) => {
    const [heros, setHeros] = useState([])

    const timer = children;


    useEffect( () => {
        fetch('https://zoo-land-server.vercel.app/allHeors')
        .then(res => res.json())
        .then(data => {
            setHeros(data)
        })
    } ,[])





    return (
        <div>
            <div className='relative md:mx-16 px-12 md:px-0 md:-top-[300px]' >
                <Swiper
                    className='mt-2'
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay, Virtual]}
                    spaceBetween={50}

                    breakpoints={{
                        // when window width is >= 640px
                        576: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        // when window width is >= 992px
                        992: {
                            width: 992,
                            slidesPerView: 3,
                        },
                    }}



                    // navigation
                    autoplay={{
                        delay: timer,
                        disableOnInteraction: false,
                    }}
                    // pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log()}
                    onSlideChange={() => console.log()}
                >


                    {
                        heros.map(hero => <SwiperSlide className='md:-mx-8 -mx-'><ToyImage
                            key={hero._id}
                            hero={hero}
                        ></ToyImage></SwiperSlide>)
                    }


                </Swiper>

            </div>
        </div>
    );
};

export default ToyGallary;