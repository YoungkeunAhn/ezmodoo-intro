import { banner } from 'data/banner'
import React from 'react'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

function BannerSection() {
  return (
    <section>
      <Swiper
        modules={[Navigation, A11y, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 5000 }}
        speed={300}
        pagination={{ clickable: true }}
        className='overflow-hidden'
        style={{ height: 'calc(100vh - 124px)' }}
      >
        {banner.map((item, idx) => (
          <SwiperSlide>
            <div className='w-full h-full relative' key={idx}>
              <img
                className='w-full h-full m-auto object-cover'
                src={item.image}
                alt='banner'
              />
              <div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default BannerSection
