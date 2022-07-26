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
      src: '/images/Carosuel/Banner1.png',
      title: 'Banner_1',
    },
    {
      src: '/images/Carosuel/Banner2.png',
      title: 'Banner_2',
    },
    {
      src: '/images/Carosuel/Banner3.png',
      title: 'Banner_3',
    },
    {
      src: '/images/Carosuel/Banner4.png',
      title: 'Banner_4',
    },
    {
      src: '/images/Carosuel/Banner5.png',
      title: 'Banner_5',
    },
    {
      src: '/images/Carosuel/Banner6.png',
      title: 'Banner_6',
    },
  ]
  const mobileView = [
      {
        src: '/images/Carosuel/mobile/Banner1.png',
        title: 'Banner_1',
      },
      {
        src: '/images/Carosuel/mobile/Banner2.png',
        title: 'Banner_2',
      },
      {
        src: '/images/Carosuel/mobile/Banner3.png',
        title: 'Banner_3',
      },
      {
        src: '/images/Carosuel/mobile/Banner4.png',
        title: 'Banner_4',
      },
      {
        src: '/images/Carosuel/mobile/Banner5.png',
        title: 'Banner_5',
      },
    ]
  return (
    <>
      <section className='desktopAndTabView md:block hidden'>
        {/* <div className="inset-0 w-full h-full block"> */}
        <Swiper
          // pagination={{
          //   dynamicBullets: true,
          // }}
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
        {/* </div> */}
      </section>

      <section className='mobileView md:hidden'>
        {/* <div className="inset-0 w-full h-full block"> */}
        <Swiper
          // pagination={{
          //   dynamicBullets: true,
          // }}
          modules={[Pagination, Navigation, A11y, Autoplay]}
          loop={true}
          navigation={true}
          autoplay={true}
          className="mySwiper"
        >
          {
            mobileView.map((item) => (
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
        {/* </div> */}
      </section>
    </>
  )
}
export default Videobanner
