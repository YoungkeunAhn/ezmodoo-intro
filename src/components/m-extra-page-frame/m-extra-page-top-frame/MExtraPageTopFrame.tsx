import ExtraPageCardItem from 'components/extra-page-card-item/ExtraPageCardItem'
import React from 'react'

type Props = {
  cardList: { title: string; text: string }[]
  color: string
}

export default function MExtraPageTopFrame(props: Props) {
  const { cardList, color } = props

  return (
    <div className="flex flex-col mg:hidden space-y-12 md:hidden">
      <div className="w-full relative flex flex-col items-center">
        <div className="px-5 space-x-8 flex z-30">
          <ExtraPageCardItem {...cardList[0]} />
          <ExtraPageCardItem {...cardList[1]} />
        </div>
        <div
          style={{ background: color }}
          className="w-full h-[70px] rounded-l-[40px] absolute -bottom-[30px] left-0"
        ></div>
      </div>
      <div className="w-full relative flex flex-col items-center">
        <div className="px-5 space-x-8 flex z-30">
          <ExtraPageCardItem {...cardList[2]} />
          <ExtraPageCardItem {...cardList[3]} />
        </div>
        <div
          style={{ background: color }}
          className="w-full h-[70px] rounded-r-[40px] absolute -bottom-[30px] left-0"
        ></div>
      </div>
    </div>
  )
}
