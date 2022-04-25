import Aos from 'aos'
import MEesSection from 'components/m-main-section/m-ees-section/MEesSection'
import { ees } from 'data/section-content'
import React, { useEffect } from 'react'

function EesSection() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <section>
      <div
        style={{
          background: 'url(ees_bg.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
        className='py-36 lg:py-0 lg:h-[40rem] justify-center items-center hidden md:flex'
      >
        <div
          className='flex justify-center items-center ml-32 lg:ml-48'
          data-aos='fade-up'
        >
          <div className='text-white text-center'>
            <h1 className='text-3xl lg:text-6xl font-medium mb-10'>
              {ees.title}
            </h1>
            <h2
              className='text-xl lg:text-4xl mb-10 leading-relaxed'
              dangerouslySetInnerHTML={{ __html: ees.content }}
            ></h2>
            <h1 className='text-lg lg:text-3xl'>
              <span className='text-4xl font-bold'>모두편해 </span>
              {ees.bottom}
            </h1>
          </div>
        </div>
      </div>
      <MEesSection className='block md:hidden' />
    </section>
  )
}

export default EesSection
