import React from 'react'

type Props = {
  title: string
  text: string
}

function ExtraPageCardItem(props: Props) {
  const { title, text } = props

  return (
    <div
      className="w-1/2 rounded-lg flex flex-col items-center relative border bg-[#F4F5F8] p-4 pt-5 md:p-5 md:pt-8 md:w-full"
      style={{ boxShadow: '0px 10px 0px black' }}
    >
      <h1 className="text-[#31415E] font-bold text-sm md:text-lg mb-5">
        {title}
      </h1>
      <p className="leading-5 mg:leading-7 px-1 text-xs md:text-base">{text}</p>
    </div>
  )
}

export default ExtraPageCardItem
