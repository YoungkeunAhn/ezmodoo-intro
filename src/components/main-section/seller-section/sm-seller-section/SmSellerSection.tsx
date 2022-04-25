import Aos from 'aos'
import ButtonBox from 'common/button-box/ButtonBox'
import { sellerEasy } from 'data/section-content'
import React, { useEffect } from 'react'

function SmSellerSection() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div
      className='lg:hidden py-10'
      style={{
        backgroundImage: 'url(m_seller_easy_bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className='flex flex-col justify-center items-center px-4 sm:px-8 pt-20 pb-10 sm:py-10'
        data-aos='fade-up'
      >
        <h3 className='mb-3 sm:text-2xl'>셀러가 이렇게 쉬울 일이야?</h3>
        <h2 className='text-xl sm:text-4xl font-bold'>
          모두에게 쉽고 너무 편해서
          <span className='text-[#FF9600]'>모두편해</span>
        </h2>
        <p
          className='leading-relaxed mt-5 sm:mt-14 mb-10 sm:text-2xl'
          dangerouslySetInnerHTML={{ __html: sellerEasy.mSubTitle }}
        ></p>
        <ButtonBox />
      </div>
    </div>
  )
}

export default SmSellerSection
