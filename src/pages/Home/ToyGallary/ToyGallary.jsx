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

    console.log(heros);




    return (
        <div data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="500">
            <div className='relative md:mx-16 mx- md:-top-[200px]' >
                <Swiper
                    className='mt-2'
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay, Virtual]}
                    spaceBetween={50}
                    // slidesPerView={3}
                    // slidesPerView = {'auto'}

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
                        heros.map(hero => <SwiperSlide className='md:-mx-8 -mx-48'><ToyImage
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