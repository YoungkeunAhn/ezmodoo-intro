import BannerManageCard from 'components/banner-manage/banner-card/BannerManageCard'
import BannerManageCardAdd from 'components/banner-manage/card-add/BannerManageCardAdd'
import { banner } from 'data/banner'
import BannerManageLayout from 'layout/BannerManageLayout'
import React from 'react'

function BannerManage() {
  return (
    <BannerManageLayout title='배너관리'>
      <div className='grid grid-cols-3 gap-10 p-10 bg-[#EDF0F5]'>
        <BannerManageCardAdd />
        {banner.map((data, idx) => (
          <BannerManageCard key={idx} data={data} />
        ))}
      </div>
    </BannerManageLayout>
  )
}

export default BannerManage
