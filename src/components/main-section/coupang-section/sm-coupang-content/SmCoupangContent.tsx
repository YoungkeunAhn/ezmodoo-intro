import CoupangItemBox from 'components/main-section/coupang-section/coupang-item-box/CoupangItemBox'
import { coupang } from 'data/section-content'
import React from 'react'

function SmCoupangContent() {
  return (
    <div>
      <img
        src='coupang_img.png'
        alt='coupang monitor'
        className='w-[80vw] mx-auto my-14'
      />

      <div className='grid grid-cols-2 grid-flow-row w-full justify-items-center gap-x-2 sm:gap-x-4'>
        <div className='w-full h-full flex flex-col justify-between items-center space-y-2'>
          {coupang.itemList.map(
            (item, idx) =>
              idx < 5 && (
                <CoupangItemBox key={idx} icon={item.icon} title={item.title} />
              )
          )}
        </div>

        <div className='w-full flex flex-col justify-between items-center space-y-2'>
          {coupang.itemList.map(
            (item, idx) =>
              idx > 4 && (
                <CoupangItemBox key={idx} icon={item.icon} title={item.title} />
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default SmCoupangContent
