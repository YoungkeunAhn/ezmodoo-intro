import React from 'react'

export default function MFulfillmentSection() {
  return (
    <div className='flex flex-col py-10 space-y-5 lg:hidden max-w-[550px] m-auto'>
      <div className='flex flex-col space-y-4 px-2'>
        {new Array(3).fill(0).map((x, idx) => (
          <img
            src={`m_fulfill_content${idx + 1}.jpg`}
            alt='fulfillment content'
          />
        ))}
      </div>
    </div>
  )
}
