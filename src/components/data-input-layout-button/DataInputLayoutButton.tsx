import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  onClick?: () => {}
}

export default function DataInputLayoutButton(props: Props) {
  const { onClick } = props

  return (
    <Link to='/question'>
      <button
        className='bg-white w-40 rounded-3xl py-2 font-bold hover:bg-[#eee] cursor-pointer'
        onClick={onClick}
      >
        문의하기
      </button>
    </Link>
  )
}
