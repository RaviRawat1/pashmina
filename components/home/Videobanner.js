import Image from 'next/image'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Videobanner = () => {
  const carousel = [
    {
      src: '/images/carosuel/Banner1.png',
      title: 'Banner_1',
    },
    {
      src: '/images/carosuel/Banner2.png',
      title: 'Banner_2',
    },
    {
      src: '/images/carosuel/Banner3.png',
      title: 'Banner_3',
    },
    {
      src: '/images/carosuel/Banner4.png',
      title: 'Banner_4',
    },
    {
      src: '/images/carosuel/Banner5.png',
      title: 'Banner_5',
    },
    {
      src: '/images/carosuel/Banner6.png',
      title: 'Banner_6',
    },
  ]
  return (
      <section className="md:py-vw-1/8 h-[81vh] md:h-[22rem] lg:h-[30rem] xl:h-[45rem] md:overflow-hidden w-full md:bg-black hero-banner">
        <div className="inset-0 w-full h-full block">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Navigation, A11y, Autoplay]}
            loop={true}
            navigation={true}
            autoplay={true}
            className="mySwiper"
          >
            {
              carousel.map((item) => (
                <SwiperSlide>
                  <img src={item.src}
                    alt={item.title}
                  // height={542}
                  // width={1800}
                  >
                  </img>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
  )
}
export default Videobanner
