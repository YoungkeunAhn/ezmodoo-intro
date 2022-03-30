import BannerManageCard from 'components/banner-manage/banner-card/BannerManageCard'
import BannerManageCardAdd from 'components/banner-manage/card-add/BannerManageCardAdd'
import { banner } from 'data/banner'
import BannerManageLayout from 'layout/BannerManageLayout'
import React, { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function BannerManage() {
  const [bannerList, setBannerList] = useState<BannerType[]>([])

  useEffect(() => {
    setBannerList(
      banner
        .sort((a, b) => a.order - b.order)
        .sort((a, b) => {
          if (a.active === b.active) return 0
          if (a.active) return -1
          return 1
        })
    )
  }, [])

  return (
    <BannerManageLayout title='배너관리'>
      <DndProvider backend={HTML5Backend}>
        <div className='grid grid-cols-3 gap-10 p-10 bg-[#EDF0F5]'>
          <BannerManageCardAdd />
          {bannerList.map((data, idx) => (
            <BannerManageCard key={idx} data={data} />
          ))}
        </div>
      </DndProvider>
    </BannerManageLayout>
  )
}

export default BannerManage
