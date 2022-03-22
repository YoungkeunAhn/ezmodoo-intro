import ButtonBox from 'common/button-box/ButtonBox'
import Container from 'common/custom-container/Container'
import { fulfillment } from 'data/section-content'
import React from 'react'

function FulfillmentSection() {
  const onClick = () => {}
  return (
    <div
      style={{
        backgroundImage: 'url(fulfillment_bg.png)',
        backgroundSize: 'cover',
      }}
    >
      <div style={{ background: 'rgba(0,0,0,0.5)' }}>
        <Container noBg>
          <div>
            <div className='flex justify-between text-white items-end'>
              <div className='flex'>
                <div className='flex flex-col mr-10 mb-11 items-start'>
                  <div className='flex mb-3 justify-center'>
                    <img
                      src='white_logo.png'
                      alt='white logo'
                      width={120}
                      className='object-contain relative top-[-5px]'
                    />
                    <span className='ml-2 whitespace-nowrap p-0 text-xs'>
                      Fulfillment & Modoo Platform
                    </span>
                  </div>
                  <div className='flex'>
                    <img
                      src='fulfillment_icon.png'
                      alt='fulfillment icon'
                      className='object-contain mr-3'
                      width={50}
                    />
                    <h1 className='text-4xl whitespace-nowrap'>
                      {fulfillment.title}
                    </h1>
                  </div>
                </div>
              </div>
              <h2
                dangerouslySetInnerHTML={{ __html: fulfillment.text }}
                className='w-[32rem] text-lg'
                style={{ wordBreak: 'keep-all' }}
              ></h2>
              <div className='ml-10 flex items-end pb-2'>
                <ButtonBox onClick={onClick} white />
              </div>
            </div>
            <img src='fulfillment_img.png' alt='logistics' className='mt-10' />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default FulfillmentSection
