import Container from 'common/custom-container/Container'
import { coupang } from 'data/section-content'
import React from 'react'
import CoupangContent from './coupang-content/CoupangContent'
import MCoupangContent from './m-coupang-content/MCoupangContent'

function CoupangSection() {
  return (
    <Container noFixedHeight>
      <div className='flex flex-col justify-between items-center py-10 sm:pb-16'>
        <span className='block lg:hidden text-[#FF9600] font-bold text-center text-sm sm:text-lg my-3'>
          Special Manager
        </span>
        <h1
          className='text-5xl font-bold mb-10 text-center leading-relaxed hidden lg:block'
          dangerouslySetInnerHTML={{ __html: coupang.title }}
        ></h1>

        <div className='lg:hidden'>
          <h3 className='text-center text-2xl sm:text-[2.1rem] mb-1 sm:mb-3'>
            쿠팡셀러라면 꼭 필요한 통합솔루션
          </h3>
          <h1 className='text-center text-3xl sm:text-5xl font-bold'>
            <span className='text-[#FF9600]'>모두편해</span>를 소개합니다
          </h1>
        </div>

        <CoupangContent className='hidden lg:block' />
        <div className='lg:hidden'>
          <MCoupangContent />
        </div>
      </div>
    </Container>
  )
}

export default CoupangSection
