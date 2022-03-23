import React from 'react'

type Props = {
  data: ChargeInfoCardType
}

function ChargeInfomationCardForm(props: Props) {
  const { data } = props
  const { type, price, content } = data
  return (
    <div className='w-full'>
      <div className='bg-[#39668F] shadow py-5 rounded-t-[10px]'>
        <h4 className='text-white font-bold text-3xl uppercase text-center'>
          {type}
        </h4>
      </div>
      <div className='bg-white px-4 py-10'>
        <ul>
          <li className='text-center py-3'>
            <span className='text-4xl font-bold mr-2'>{price}</span>원/월
          </li>
          {content.map((value, idx) => (
            <li
              key={idx}
              style={{ borderTop: '2px dashed #E3EAF1' }}
              className='text-center py-3 text-[#666] text-lg'
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className='bg-[#39668F] py-5 flex justify-center items-center rounded-b-[10px]'>
        <span className='bg-white text-[#39668F] rounded-[40px] py-3 w-32 font-bold text-lg text-center'>
          시작하기
        </span>
      </div>
    </div>
  )
}

export default ChargeInfomationCardForm
