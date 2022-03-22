import Container from 'common/custom-container/Container'
import { coupang } from 'data/section-content'
import React from 'react'
import CoupangItemBox from './item-box/CoupangItemBox'

function CoupangSection() {
  return (
    <Container noFixedHeight>
      <div className='flex flex-col justify-between items-center pt-20 pb-20'>
        <h1
          className='text-5xl font-bold mb-10 text-center leading-relaxed'
          dangerouslySetInnerHTML={{ __html: coupang.title }}
        ></h1>
        {coupang.parnassus.map((p, idx) => (
          <p
            className='text-2xl mb-5 font-medium leading-loose tracking-[-0.62px]'
            key={idx}
            dangerouslySetInnerHTML={{ __html: p }}
          ></p>
        ))}
        <div className='flex justify-between items-center mt-10 w-full'>
          <div className='w-full h-full flex flex-col justify-between items-center ml-5'>
            {coupang.itemList.map(
              (item, idx) =>
                idx < 5 && (
                  <CoupangItemBox
                    key={idx}
                    icon={item.icon}
                    title={item.title}
                  />
                )
            )}
          </div>
          <img
            src='coupang_img.png'
            alt='coupang monitor'
            className='w-1/3 ml-10 mr-10'
          />
          <div className='w-full flex flex-col justify-between items-center space-y-3'>
            {coupang.itemList.map(
              (item, idx) =>
                idx > 4 && (
                  <CoupangItemBox
                    key={idx}
                    icon={item.icon}
                    title={item.title}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CoupangSection
