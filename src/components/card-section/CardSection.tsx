import Container from 'common/custom-container/Container'
import { fulfillmentCard } from 'data/section-content'
import React from 'react'
import CardItemBox from './card-item-box/CardItemBox'

function CardSection() {
  return (
    <Container noFixedHeight>
      <div className='flex flex-1 justify-between items-center space-x-10 pt-20 pb-20'>
        {fulfillmentCard.map((card, idx) => (
          <CardItemBox key={idx} {...card} />
        ))}
      </div>
    </Container>
  )
}

export default CardSection
