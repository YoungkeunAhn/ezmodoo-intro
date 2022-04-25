import Aos from 'aos'
import React, { useEffect } from 'react'

function SellerSubSection() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div
      className='flex flex-col items-center md:flex-row justify-center py-20 space-y-5 md:space-y-0 lg:space-x-5 bg-[#F4F5F8] px-2 md:px-0'
      data-aos='fade-up'
    >
      <img
        src='sub_seller_image1.png'
        alt='coupang loadmap'
        className='object-contain w-full sm:w-[80vw] md:max-w-[24rem] lg:max-w-[30rem]'
      />
      <img
        src='sub_seller_image2.png'
        alt='coupang loadmap'
        className='object-contain w-full sm:w-[80vw] md:max-w-[24rem] lg:max-w-[30rem]'
      />
    </div>
  )
}

export default SellerSubSection
