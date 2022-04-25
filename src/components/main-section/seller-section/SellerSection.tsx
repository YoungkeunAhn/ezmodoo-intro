import ButtonBox from 'common/button-box/ButtonBox'
import Container from 'common/custom-container/Container'
import SmSellerSection from 'components/main-section/seller-section/sm-seller-section/SmSellerSection'
import { sellerEasy } from 'data/section-content'
import React from 'react'

function SellerSection() {
  return (
    <div>
      <div
        className='hidden lg:block'
        style={{
          backgroundImage: 'url(seller_easy_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right',
        }}
      >
        <Container noBg>
          <div className='flex flex-col items-center'>
            <h1
              className='lg:leading-relaxed lg:text-5xl font-bold mb-14 text-center'
              dangerouslySetInnerHTML={{ __html: sellerEasy.title }}
            ></h1>

            <p
              className='text-2xl leading-relaxed mb-16'
              dangerouslySetInnerHTML={{ __html: sellerEasy.subTitle }}
            ></p>
            <ButtonBox />
          </div>
        </Container>
      </div>
      <SmSellerSection />
    </div>
  )
}

export default SellerSection
