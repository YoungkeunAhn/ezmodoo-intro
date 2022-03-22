import Container from 'common/custom-container/Container'
import { operation } from 'data/section-content'
import React from 'react'

function OperationSection() {
  return (
    <Container flexDirection='column'>
      <div>
        <h4 className='font-bold text-6xl text-center tracking-tight mb-6'>
          {operation.title}
        </h4>
        <h5 className='text-4xl text-center mt-3 mb-14 text-[#38485B] tracking-tight'>
          {operation.subTitle}
        </h5>
      </div>
      <div className='flex justify-between'>
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
    </Container>
  )
}

export default OperationSection
