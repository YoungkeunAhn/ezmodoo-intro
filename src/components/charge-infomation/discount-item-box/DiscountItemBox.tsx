import React from 'react'

type Props = {
  data: ChargeInfoDiscountType
}
function DiscountItemBox(props: Props) {
  const { data } = props
  const { mounth, image } = data

  return (
    <div className='flex flex-col justify-center items-center text-lg'>
      <div className='text-sm md:text-base'>{mounth}개월 선납시</div>
      <img src={image} alt={`${mounth}mount discount`} />
    </div>
  )
}

export default DiscountItemBox
