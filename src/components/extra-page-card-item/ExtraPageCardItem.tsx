import React from 'react'

type Props = {
  title: string
  text: string
}

function ExtraPageCardItem(props: Props) {
  const { title, text } = props

  return (
    <div
      className='w-full rounded-lg flex flex-col items-center relative border bg-[#F4F5F8] p-6'
      style={{ boxShadow: '0px 10px 1px black' }}
    >
      <h1 className='text-[#31415E] font-bold text-lg mb-5'>{title}</h1>
      <p className='leading-7'>{text}</p>
    </div>
  )
}

export default ExtraPageCardItem
