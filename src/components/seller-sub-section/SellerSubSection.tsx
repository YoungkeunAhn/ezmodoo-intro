import React from 'react'

function SellerSubSection() {
  return (
    <div className='flex flex-col md:flex-row justify-center pt-20 pb-20 space-y-5 md:space-y-0 lg:space-x-5 bg-[#F4F5F8]'>
      <img
        src='sub_seller_image1.png'
        alt='coupang loadmap'
        className='object-contain w-[95vw] max-w-[30rem]'
      />
      <img
        src='sub_seller_image2.png'
        alt='coupang loadmap'
        className='object-contain w-[95vw] max-w-[30rem]'
      />
    </div>
  )
}

export default SellerSubSection
