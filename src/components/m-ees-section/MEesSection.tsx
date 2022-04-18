import { mEes } from 'data/section-content'
import React from 'react'

type Props = {
  className: string
}

function MEesSection(props: Props) {
  const { className } = props

  return (
    <div
      style={{
        background: 'url(m_ees_bg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'bottom left',
        backgroundColor: '#12121C',
      }}
      className={`flex justify-center items-center min-h-[360px] relative ${className}`}
    >
      <div className='flex justify-center items-center absolute left-[48vw] md:left-[250px] pr-5'>
        <div className='text-white text-left'>
          {mEes.title.split(' ').map((word, idx) => (
            <h2 key={idx} className='font-medium text-2xl'>
              {word}
            </h2>
          ))}

          <h3
            className='mt-4 mb-10 leading-relaxed md:text-lg'
            dangerouslySetInnerHTML={{ __html: mEes.content }}
          ></h3>
          <h3 className='md:text-lg'>
            <span className='font-bold md:text-xl'>모두편해 </span>
            {mEes.bottom}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default MEesSection
