import ButtonBox from 'common/button-box/ButtonBox'
import React from 'react'

type Props = {
  bgImage: string
  icon: string
  title: string
  content: string
  url: string
}

function CardItemBox(props: Props) {
  const { bgImage, icon, title, content, url } = props

  return (
    <div
      className="rounded-xl text-white w-1/2 h-[20rem] relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'cetner',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="rounded-xl p-8 pr-6 w-full h-full"
        style={{ background: 'rgba(0,0,0,0.5)' }}
      >
        <div className="flex mb-4">
          <img
            src="white_logo.png"
            alt="white logo"
            width={100}
            className="object-contain relative top-[-5px]"
          />
          <span className="ml-2 whitespace-nowrap p-0 text-xs">
            Fulfillment & Modoo Platform
          </span>
        </div>
        <div className="flex mb-8">
          <img
            src={icon}
            alt="card icon"
            width={50}
            className="object-contain"
          />
          <h2 className="text-4xl ml-3">{title}</h2>
        </div>
        <p
          className="text-lg leading-6"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        <div className="absolute bottom-6 right-6">
          <ButtonBox white />
        </div>
      </div>
    </div>
  )
}

export default CardItemBox
