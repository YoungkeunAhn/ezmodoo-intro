import React from 'react'

type Props = {
  title: string
  text: string
}

function ExtraPageCardItem(props: Props) {
  const { title, text } = props

  return (
    <div
      className='w-1/2 rounded-lg flex flex-col items-center relative border bg-[#F4F5F8] p-2 sm:p-5 sm:pt-8 sm:w-full'
      style={{ boxShadow: '0px 10px 0px rgba(0,0,0,0.2)' }}
    >
      <h1 className='text-[#31415E] font-bold text-xs sm:text-lg mb-2 sm:mb-5'>
        {title}
      </h1>
      <p className='leading-5 mg:leading-7 px-1 text-xs sm:text-base'>{text}</p>
    </div>
  )
}

export default ExtraPageCardItem
