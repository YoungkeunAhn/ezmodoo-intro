import Container from 'common/custom-container/Container'
import SmOperationSection from 'components/main-section/operation-section/sm-operation-section/SmOperationSection'
import { operation } from 'data/section-content'
import React from 'react'

function OperationSection() {
  return (
    <Container flexDirection='column'>
      <div className='pt-10 lg:py-0'>
        <span className='block lg:hidden text-[#FF9600] font-bold text-center text-sm sm:text-lg my-3'>
          Special Solution
        </span>
        <h1 className='font-bold text-center lg:mb-6 text-3xl sm:text-5xl lg:text-6xl tracking-[-2.3px]'>
          {operation.title}
        </h1>
        <h2 className='text-center mt-2 mb-10 lg:mb-14 text-[#38485B] tracking-[-2.3px] text-[1.35rem] sm:text-[2.1rem] lg:text-4xl'>
          {operation.subTitle}
        </h2>
      </div>
      <div className='justify-between hidden lg:flex'>
        {operation.itemList.map((item, idx) => (
          <div key={idx} className='flex flex-col items-center'>
            <img width={200} height={200} src={item.image} alt={item.alt} />
            <div
              dangerouslySetInnerHTML={{ __html: item.text }}
              className='text-center mt-4 text-[1.4rem] tracking-[-2.3px]'
            ></div>
          </div>
        ))}
      </div>
      <SmOperationSection />
    </Container>
  )
}

export default OperationSection
