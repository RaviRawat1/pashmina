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
      src: '/images/Carosuel/Banner1.jpg',
      title: 'Banner_1',
    },
    {
      src: '/images/Carosuel/Banner2.jpg',
      title: 'Banner_2',
    },
    {
      src: '/images/Carosuel/Banner3.jpg',
      title: 'Banner_3',
    },
    {
      src: '/images/Carosuel/Banner4.jpg',
      title: 'Banner_4',
    },
    {
      src: '/images/Carosuel/Banner5.jpg',
      title: 'Banner_5',
    },
    {
      src: '/images/Carosuel/Banner6.jpg',
      title: 'Banner_6',
    },
  ]
  const mobileView = [
      {
        src: '/images/Carosuel/mobile/Banner1_M.jpg',
        title: 'Banner_1',
      },
      {
        src: '/images/Carosuel/mobile/Banner2_M.jpg',
        title: 'Banner_2',
      },
      {
        src: '/images/Carosuel/mobile/Banner3_M.jpg',
        title: 'Banner_3',
      },
      {
        src: '/images/Carosuel/mobile/Banner4_M.jpg',
        title: 'Banner_4',
      },
      {
        src: '/images/Carosuel/mobile/Banner5_M.jpg',
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
