import Container from 'common/custom-container/Container'
import { coupang } from 'data/section-content'
import React from 'react'
import CoupangContent from './coupang-content/CoupangContent'

function CoupangSection() {
  return (
    <Container noFixedHeight>
      <div className='flex flex-col justify-between items-center pt-20 pb-20'>
        <h1
          className='text-5xl font-bold mb-10 text-center leading-relaxed'
          dangerouslySetInnerHTML={{ __html: coupang.title }}
        ></h1>

        <CoupangContent />
      </div>
    </Container>
  )
}

export default CoupangSection
