import { SearchOptionType } from 'pages/faq/Faq'
import React from 'react'

type Props = {
  item: FaqCategoryType
  searchOption: SearchOptionType
  onClick: (cateId: FaqCategoryId) => void
}

function FaqSearchCategoryItemBtn(props: Props) {
  const { item, searchOption, onClick } = props
  const { cateId, cateName, icon } = item

  return (
    <button
      className={`flex flex-1 flex-col items-center p-4 rounded-2xl cursor-pointer h-[10rem] border ${
        searchOption.cateId === cateId
          ? 'bg-[#ccc] '
          : 'bg-white text-[#31415E]'
      }`}
      onClick={() => onClick(cateId)}
    >
      <div className='w-full flex flex-1 justify-center items-center'>
        <img src={icon} alt='category icon' />
      </div>
      <span className='font-bold'>{cateName}</span>
    </button>
  )
}

export default FaqSearchCategoryItemBtn
