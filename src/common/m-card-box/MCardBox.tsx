import ButtonBox from 'common/button-box/ButtonBox'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  data: mCardType
}

export default function MCardBox(props: Props) {
  const { data } = props

  return (
    <div
      className="text-white"
      style={{
        backgroundImage: `url(${data.bgImage})`,
        backgroundPosition: 'cetner',
        backgroundSize: 'cover',
      }}
    >
      <header className="flex items-end space-x-4">
        <img
          src="/white_logo.png"
          alt="모두편해"
          className="w-10 object-contain"
        />
        <span className="text-sm">Fulfillment & modoo Platform</span>
      </header>
      <main>
        <img src={data.icon} alt={data.title} />
        <h1>{data.title}</h1>
      </main>
      <footer>
        <h3 dangerouslySetInnerHTML={{ __html: data.content }}></h3>
        <div className="">
          <Link to={data.url}>
            <ButtonBox white />
          </Link>
        </div>
      </footer>
    </div>
  )
}
