import { ees } from 'data/section-content'
import React from 'react'

function EesSection() {
  return (
    <div
      style={{
        background: 'url(ees_bg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
      className='h-[40rem] flex justify-center items-center'
    >
      <div className='flex justify-center items-center ml-48'>
        <div className='text-white text-center'>
          <h1 className='text-6xl font-medium mb-10'>{ees.title}</h1>
          <h2
            className='text-4xl mb-10 leading-relaxed'
            dangerouslySetInnerHTML={{ __html: ees.content }}
          ></h2>
          <h1 className='text-3xl'>
            <span className='text-4xl font-bold'>모두편해 </span>
            {ees.bottom}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default EesSection
