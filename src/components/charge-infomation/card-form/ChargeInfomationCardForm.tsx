import React from 'react'

type Props = {
  data: ChargeInfoCardType
}

function ChargeInfomationCardForm(props: Props) {
  const { data } = props
  const { type, price, content } = data
  return (
    <div
      className='w-full rounded-t-[10px] rounded-b-[10px]'
      style={{ boxShadow: '5px 5px 1px #ddd' }}
    >
      <div className='bg-[#39668F] shadow py-4 rounded-t-[10px]'>
        <h4 className='text-white font-bold text-xl md:text-3xl uppercase text-center'>
          {type}
        </h4>
      </div>
      <div className='bg-white md:p-4 md:py-10'>
        <ul>
          <li className='text-center py-2'>
            <span className='text-xl md:text-4xl font-bold mr-2'>{price}</span>
            <span className='text-sm md:text-base'>원/월</span>
          </li>
          {content.map((value, idx) => (
            <li
              key={idx}
              style={{ borderTop: '2px dashed #E3EAF1' }}
              className='text-center py-2 text-[#666] text-xs md:text-lg'
            >
              {value}
            </li>
          ))}
          <li
            style={{ borderTop: '2px dashed #E3EAF1' }}
            className='text-center py-3 text-[#666] text-xs md:text-lg md:hidden'
          >
            상품수정 송장전송 등<br />
            무제한
          </li>
          <li
            style={{ borderTop: '2px dashed #E3EAF1' }}
            className='text-center py-3 text-[#666] text-xs md:text-lg hidden md:block'
          >
            상품수정 송장전송 등 무제한
          </li>
        </ul>
      </div>
      <div className='bg-[#39668F] py-4 flex justify-center items-center rounded-b-[10px]'>
        <span className='bg-white text-[#39668F] rounded-[40px] py-1 md:py-2 w-32 font-bold md:text-lg text-center'>
          시작하기
        </span>
      </div>
    </div>
  )
}

export default ChargeInfomationCardForm
