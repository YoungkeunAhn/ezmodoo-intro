import { mOperation } from 'data/section-content'
import React from 'react'

function MOperationSection() {
  return (
    <div className='grid grid-rows-2 grid-flow-col justify-center sm:justify-evenly gap-y-5 sm:gap-y-24 sm:gap-x-5 lg:hidden pb-5 sm:mb-24'>
      {mOperation.itemList.map((item, idx) => (
        <div key={idx} className='flex flex-col items-center w-fit'>
          <img
            src={item.image}
            alt={item.alt}
            className='w-[90%] sm:w-full sm:h-full object-contain'
          />
          <div
            dangerouslySetInnerHTML={{ __html: item.text }}
            className='textBox text-center mt-4 tracking-[-1.7px] sm:text-lg'
          ></div>
        </div>
      ))}
    </div>
  )
}

export default MOperationSection
