import MEesSection from 'components/m-ees-section/MEesSection'
import { ees } from 'data/section-content'
import React from 'react'

function EesSection() {
  return (
    <section>
      <div
        style={{
          background: 'url(ees_bg.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
        className='h-[40rem] justify-center items-center hidden lg:flex'
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
      <MEesSection className='block lg:hidden' />
    </section>
  )
}

export default EesSection
