import SmBannerSection from 'components/main-section/banner-section/sm-banner-section/SmBannerSection'
import { banner } from 'data/banner'
import React from 'react'
import { A11y, Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

function BannerSection() {
  return (
    <section>
      <Swiper
        modules={[A11y, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 4000 }}
        speed={300}
        pagination={{ clickable: true }}
        className='w-full h-[calc(100vh-121px)] hidden lg:block'
      >
        {banner.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className='w-full h-full relative'>
              <img
                className='w-full h-full m-auto object-cover'
                src={item.image}
                alt='banner'
              />
              <div
                className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SmBannerSection />
    </section>
  )
}

export default BannerSection
