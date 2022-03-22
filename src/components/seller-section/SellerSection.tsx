import ButtonBox from 'common/button-box/ButtonBox'
import Container from 'common/custom-container/Container'
import { sellerEasy } from 'data/section-content'
import React from 'react'

function SellerSection() {
  const onClick = () => {}

  return (
    <div
      style={{
        backgroundImage: 'url(seller_easy_bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom right',
      }}
    >
      <Container noBg>
        <div className='flex flex-col items-center'>
          <h1
            className='text-5xl font-bold mb-14 text-center leading-relaxed'
            dangerouslySetInnerHTML={{ __html: sellerEasy.title }}
          ></h1>

          <p
            className='text-2xl leading-relaxed mb-16'
            dangerouslySetInnerHTML={{ __html: sellerEasy.subTitle }}
          ></p>
          <ButtonBox onClick={onClick} />
        </div>
      </Container>
    </div>
  )
}

export default SellerSection
