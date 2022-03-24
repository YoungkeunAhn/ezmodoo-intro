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
        <div className='flex space-x-4 w-full justify-center items-center'>
          {chargeInfoCard.map((card, idx) => (
            <ChargeInfomationCardForm key={idx} data={card} />
          ))}
        </div>

        <div className='flex justify-between items-center p-5 px-20 rounded-[200px] w-full bg-[#C6D5E3] text-[#2A3652] my-20'>
          <div className='flex flex-col items-center'>
            <h2 className='text-5xl font-bold mb-10'>선납할인율</h2>
            <div className='flex flex-col'>
              <span>* 가입비와 판매수수료는 따로 없습니다.</span>
              <span>* 부가서비스는 별도신청입니다.</span>
            </div>
          </div>
          {chargeInfoDiscount.map((info, idx) => (
            <DiscountItemBox key={idx} data={info} />
          ))}
        </div>
        <ChargeInfoBasicService />
        <ExperienceBtn />
      </div>
    </PageLayout>
  )
}

export default ChargeInfomation
