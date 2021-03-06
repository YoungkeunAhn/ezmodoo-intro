import CoupangContent from 'components/main-section/coupang-section/coupang-content/CoupangContent'
import React from 'react'

function ChargeInfoBasicService() {
  return (
    <div>
      <h2 className='text-4xl font-bold mb-20 text-center hidden md:block'>
        기본제공서비스
      </h2>
      <CoupangContent className='hidden md:block' />
    </div>
  )
}

export default ChargeInfoBasicService
