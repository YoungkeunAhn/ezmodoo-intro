import Container from 'common/Container'
import { coupang } from 'data/section-content'
import React from 'react'
import CoupangItemBox from './item-box/CoupangItemBox'

function CoupangSection() {
  return (
    <Container noFixedHeight>
      <div className='flex flex-col justify-between items-center pt-20 pb-20'>
        <h1
          className='text-2xl font-bold mb-5'
          dangerouslySetInnerHTML={{ __html: coupang.title }}
        ></h1>
        {coupang.parnassus.map((p, idx) => (
          <p
            className='text-xl mb-5'
            key={idx}
            dangerouslySetInnerHTML={{ __html: p }}
          ></p>
        ))}
        <div className='flex justify-between items-center mt-10 w-full'>
          <div className='h-full flex flex-col justify-between items-center'>
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
          <img src='coupang_img.png' alt='coupang monitor' width={350} />
          <div className='h-full flex flex-col justify-between items-center'>
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
