import { operation } from 'data/section-content'
import React from 'react'

function OperationSection() {
  return (
    <section className='bg-[#F4F5F8 ] pl-20 pr-20'>
      <div>
        <h4 className='font-bold'>{operation.title}</h4>
        <h5>{operation.subTitle}</h5>
      </div>
      <div className='flex justify-between'>
        {operation.itemList.map((item, idx) => (
          <div className='flex flex-col align-middle'>
            <img src={item.image} alt={item.alt} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OperationSection
