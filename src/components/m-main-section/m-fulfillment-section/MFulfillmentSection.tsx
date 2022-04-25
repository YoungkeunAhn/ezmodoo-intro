import React from 'react'
import { Link } from 'react-router-dom'

export default function MFulfillmentSection() {
  return (
    <div className='flex flex-col py-10 space-y-5 lg:hidden w-full sm:w-[80vw] m-auto'>
      <div className='flex flex-col space-y-4 px-2'>
        {new Array(3).fill(0).map((x, idx) => (
          <Link to='/question'>
            <img
              src={`m_fulfill_content${idx + 1}.jpg`}
              alt='fulfillment content'
              className='rounded-2xl w-full object-contain'
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
