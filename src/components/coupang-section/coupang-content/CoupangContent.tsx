import CoupangItemBox from 'components/coupang-item-box/CoupangItemBox'
import { coupang } from 'data/section-content'
import React from 'react'

type Props = {
  className: string
}

function CoupangContent(props: Props) {
  const { className } = props

  return (
    <div className={className}>
      {coupang.parnassus.map((p, idx) => (
        <p
          className='text-2xl mb-5 font-medium leading-loose tracking-[-0.62px]'
          key={idx}
          dangerouslySetInnerHTML={{ __html: p }}
        ></p>
      ))}

      <div className='flex justify-between items-center mt-10 w-full'>
        <div className='w-full h-full flex flex-col justify-between items-center space-y-5'>
          {coupang.itemList.map(
            (item, idx) =>
              idx < 5 && (
                <CoupangItemBox key={idx} icon={item.icon} title={item.title} />
              )
          )}
        </div>
        <img
          src='coupang_img.png'
          alt='coupang monitor'
          className='w-[29rem] ml-10 mr-10'
        />
        <div className='w-full flex flex-col justify-between items-center space-y-5'>
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

export default CoupangContent
