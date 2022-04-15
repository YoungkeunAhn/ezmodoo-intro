import ExperienceBtn from 'common/experience-btn/ExperienceBtn'
import ChargeInfoBasicService from 'components/charge-infomation/basic-service/ChargeInfoBasicService'
import ChargeInfomationCardForm from 'components/charge-infomation/card-form/ChargeInfomationCardForm'
import DiscountItemBox from 'components/charge-infomation/discount-item-box/DiscountItemBox'
import { chargeInfoCard, chargeInfoDiscount } from 'data/charge-infomation'
import { chargeInfomationPageHeader } from 'data/page'
import PageLayout from 'layout/PageLayout'
import React from 'react'

function ChargeInfomation() {
  return (
    <PageLayout header={chargeInfomationPageHeader}>
      <div>
        <div className='w-full md:flex md:space-x-4 md:justify-center md:items-center grid grid-flow-row grid-cols-2 gap-x-4 gap-y-8'>
          {chargeInfoCard.map((card, idx) => (
            <ChargeInfomationCardForm key={idx} data={card} />
          ))}
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center p-5 md:px-20 rounded-3xl md:rounded-[200px] w-full bg-[#C6D5E3] text-[#2A3652] my-12 md:my-20'>
          <div className='flex flex-col items-center'>
            <h2 className='text-3xl md:text-5xl font-bold mb-6 md:mb-10'>
              선납할인율
            </h2>
            <div className='flex flex-col text-xs md:text-base'>
              <span>* 가입비와 판매수수료는 따로 없습니다.</span>
              <span>* 부가서비스는 별도신청입니다.</span>
            </div>
          </div>

          <div className='flex mt-6 md:mt-0'>
            {chargeInfoDiscount.map((info, idx) => (
              <DiscountItemBox key={idx} data={info} />
            ))}
          </div>
        </div>
        <ChargeInfoBasicService />
        <ExperienceBtn />
      </div>
    </PageLayout>
  )
}

export default ChargeInfomation
