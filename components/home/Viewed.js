import { A11y, Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ArrowRight from '../icons/ArrowRight'
import Image from 'next/image'
import Link from "next/link"
import React, {useState} from 'react'
import uuid from 'react-uuid'

const Viewed = () => {
  const slider = [
    {
      src: '/images/viewed/view1.jpg',
      title: 'Solid Pashmina',
      type:0
    },
    {
      src: '/images/viewed/view2.jpg',
      title: 'Ombre Pashmina',
      type:0
    },
    {
      src: '/images/viewed/view3.jpg',
      title: 'Reversible Pashmina',
      type:0
    },
    {
      src: '/images/viewed/view1.jpg',
      title: 'Solid Pashmina',
      type:0
    },
    {
      src: '/images/viewed/view2.jpg',
      title: 'Ombre Pashmina',
      type:0
    },
    {
      src: '/images/viewed/view3.jpg',
      title: 'Reversible Pashmina',
      type:0
    },
    {
      src: '/images/viewed/view1.jpg',
      title: 'Solid Pashmina',
      type:0
    },
    {
      src: '/images/viewed/view2.jpg',
      title: 'Ombre Pashmina',
      type:0
    },
    {
      src: '/images/viewed/view3.jpg',
      title: 'Reversible Pashmina',
      type:0
    },
    

    {
      src: '/images/viewed/view3.jpg',
      title: 'Solid Pashmina',
      type:1
    },
    {
      src: '/images/viewed/view2.jpg',
      title: 'Ombre Pashmina',
      type:1
    },
    {
      src: '/images/viewed/view1.jpg',
      title: 'Reversible Pashmina',
      type:1
    },
    {
      src: '/images/viewed/view1.jpg',
      title: 'Solid Pashmina',
      type:1
    },
    {
      src: '/images/viewed/view2.jpg',
      title: 'Ombre Pashmina',
      type:1
    },
    {
      src: '/images/viewed/view3.jpg',
      title: 'Reversible Pashmina',
      type:1
    },
    {
      src: '/images/viewed/view1.jpg',
      title: 'Solid Pashmina',
      type:1
    },
    {
      src: '/images/viewed/view2.jpg',
      title: 'Ombre Pashmina',
      type:1
    },
    {
      src: '/images/viewed/view3.jpg',
      title: 'Reversible Pashmina',
      type:1
    },
  ];

  // const activeClass= styled.active`border-b-[#56112A]} text-[#56112A]`

  // let currentType=0;

  const getText = text => {
    let customItems = text.split(" ");

    for (let i = 0; i < customItems.length; i++) {
      customItems[i] = customItems[i] + "<br/>";
    }

    return customItems.join("");
  }

  const [type, setType] = useState(0)

  const onTabPress=(type)=>{
    setType(type);
  }

  return (
    <>
      <ul className="man-women-tab list-none flex justify-center items-center mb-6">
        <li>
          <a href="#womenid" data-id="womenid" onClick={()=>onTabPress(0)} 
            className={'font-Inter  no-underline font-semibold text-base leading-4 tracking-[0.05em] inline-flex items-center justify-center px-8 border-b-2 border-solid  box-border h-12 ' +
            (type === 0
              ? "text-[#56112A] border-b-[#56112A]"
              : "text-[#9C9C9C] border-[#9C9C9C]")}>
            WOMEN
          </a>
        </li>
        <li>
          <a href='#menid' data-id="menid" onClick={()=>onTabPress(1)} className='font-Inter text-[#9C9C9C] no-underline font-semibold text-base leading-4 tracking-[0.05em] inline-flex items-center justify-center px-8 border-b-2 border-solid border-[#9C9C9C] box-border h-12 focus:text-[#56112A] focus:border-b-[#56112A]'>
            MEN
          </a>
        </li>
      </ul>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          536: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1040: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="most_viewed_swiper !px-5 md:!px-10 !pb-6"
        id="blogSlide"
      >
        {slider.filter(o=>o.type==type).map((slide) => (
          <SwiperSlide key={uuid()}>
            <Link href="/productdetails" prefetch={false}>
              <div
                className="group inline-block cursor-pointer relative arrow_move_left"
                rel="noreferrer"
              >
                <Image
                  height="547px"
                  width="363px"
                  src={slide.src}
                  alt={slide.title}
                  loading='lazy'
                  className="outline-1 outline  outline-offset-[-15px] yellow-boder hover:scale-110 duration-500"
                />
                <div className="flex-1 flex items-end space-x-4">
                  <span className='font-Orpheu text-base md:text-2xl whitespace-nowrap' dangerouslySetInnerHTML={{ __html: getText(slide.title) }} />
                  <div className="scale-50 md:scale-75 group-hover:md:scale-90 transition-all ease-in-out duration-300 mb-1 md:mb-2">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
export default Viewed
