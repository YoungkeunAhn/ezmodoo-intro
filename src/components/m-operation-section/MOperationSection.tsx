import { mOperation } from 'data/section-content'
import React from 'react'

function MOperationSection() {
  return (
    <div className='grid grid-rows-2 grid-flow-col justify-center gap-x-5 gap-y-10 sm:gap-x-10'>
      {mOperation.itemList.map((item, idx) => (
        <div key={idx} className='flex flex-col items-center w-fit'>
          <img
            src={item.image}
            alt={item.alt}
            className='w-[90%] sm:w-[140px] object-contain'
          />
          <div
            dangerouslySetInnerHTML={{ __html: item.text }}
            className='textBox text-center mt-4 tracking-[-1.7px]'
          ></div>
        </div>
      ))}
    </div>
  )
}

export default MOperationSection
