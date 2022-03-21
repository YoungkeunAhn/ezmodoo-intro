import Container from 'common/Container'
import { operation } from 'data/section-content'
import React from 'react'

function OperationSection() {
  return (
    <Container flexDirection='column'>
      <div>
        <h4 className='font-bold text-[2.6rem] text-center tracking-tight'>
          {operation.title}
        </h4>
        <h5 className='text-3xl text-center mt-3 mb-10 text-[#38485B] tracking-tight'>
          {operation.subTitle}
        </h5>
      </div>
      <div className='flex justify-between'>
        {operation.itemList.map((item, idx) => (
          <div key={idx} className='flex flex-col items-center'>
            <img width={180} height={180} src={item.image} alt={item.alt} />
            <div
              dangerouslySetInnerHTML={{ __html: item.text }}
              className='text-center mt-4 font-semibold'
            ></div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default OperationSection
