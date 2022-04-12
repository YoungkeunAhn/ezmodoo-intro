import MCardBox from 'common/m-card-box/MCardBox'
import { mFulfillmentCard } from 'data/section-content'
import React from 'react'

export default function MFulfillmentSection() {
  return (
    <div className="flex flex-col py-10 space-y-5 lg:hidden max-w-[550px] m-auto">
      {mFulfillmentCard.map((card, idx) => (
        <MCardBox key={idx} data={card} />
      ))}
    </div>
  )
}
