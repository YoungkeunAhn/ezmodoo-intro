import { mBanner } from 'data/banner'
import React from 'react'
import { Link } from 'react-router-dom'
import { A11y, Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

function MBannerSection() {
  return (
    <Swiper
      modules={[A11y, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      loop={true}
      // autoplay={{ delay: 4000 }}
      speed={300}
      pagination={{ clickable: true }}
      className='w-full h-[calc(100vh-64px)] lg:hidden m-swiper'
    >
      {mBanner.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className='w-full h-full relative'>
            <img
              className='w-full h-full m-auto object-cover'
              src={item.image}
              alt='banner'
            />
          </div>

          <div className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            {item.button && (
              <Link to={item.url ?? ''}>
                <button
                  className='py-2 px-4 sm:py-4 sm:px-6 mx-auto my-[6vh] block sm:text-2xl'
                  style={{
                    border: item.button.border,
                    color: item.button.color,
                    borderRadius: item.button.radius,
                  }}
                >
                  {item.button?.title}
                </button>
              </Link>
            )}

            {item.bottomContent && (
              <div
                dangerouslySetInnerHTML={{ __html: item.bottomContent }}
              ></div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MBannerSection
