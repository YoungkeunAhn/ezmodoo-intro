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
      className='text-white h-fit rounded-2xl mx-4 overflow-hidden hidden md:block'
      style={{
        backgroundImage: `url(${data.bgImage})`,
        backgroundPosition: 'cetner',
        backgroundSize: 'cover',
      }}
    >
      <div className='px-3 pt-4 pb-2' style={{ background: 'rgba(0,0,0,0.4)' }}>
        <header className='flex items-end space-x-4 mb-5'>
          <img
            src='white_logo.png'
            alt='모두편해'
            className='w-[80px] md:w-[100px] object-contain'
          />

          <span className='text-xs'>Fulfillment & modoo Platform</span>
        </header>
        <main className='flex mb-6'>
          <img
            src={data.icon}
            alt={data.title}
            className='w-[30px] md:w-[40px] object-contain'
          />
          <h1 className='text-2xl md:text-3xl'>{data.title}</h1>
        </main>
        <footer>
          <h3
            className='text-sm md:text-base'
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></h3>
          <div className='mt-3'>
            <Link to={data.url}>
              <ButtonBox white />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
