import ButtonBox from 'common/button-box/ButtonBox'
import { sellerEasy } from 'data/section-content'
import React from 'react'

function MSellerSection() {
  return (
    <div
      className='md:hidden'
      style={{
        backgroundImage: 'url(m_seller_easy_bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex flex-col justify-center items-center px-4 md:px-8 py-10 md:py-20'>
        <h3 className='text-2xl mb-3'>셀러가 이렇게 쉬울 일이야?</h3>
        <h2 className='text-xl md:text-3xl font-bold'>
          모두에게 쉽고 너무 편해서
          <span className='text-[#FF9600]'>모두편해</span>
        </h2>
        <p
          className='leading-relaxed my-10'
          dangerouslySetInnerHTML={{ __html: sellerEasy.mSubTitle }}
        ></p>
        <ButtonBox />
      </div>
    </div>
  )
}

export default MSellerSection
