import React from 'react'

type Props = {
  data: ChargeInfoDiscount
}
function DiscountItemBox(props: Props) {
  const { data } = props
  const { mounth, image } = data

  return (
    <div className='flex flex-col justify-center items-center text-lg'>
      <div>{mounth}개월 선납시</div>
      <img src={image} alt={`${mounth}mount discount`} />
    </div>
  )
}

export default DiscountItemBox
