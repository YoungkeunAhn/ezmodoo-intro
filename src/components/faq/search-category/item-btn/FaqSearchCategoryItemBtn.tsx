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
      className={`flex flex-1 flex-col items-center pb-2 sm:p-4 rounded-lg cursor-pointer w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] md:h-[10rem] border ${
        searchOption.cateId === cateId
          ? 'bg-[#ccc] '
          : 'bg-white text-[#31415E]'
      }`}
      onClick={() => onClick(cateId)}
    >
      <div className='w-[40px] md:w-full flex flex-1 justify-center items-center'>
        <img
          src={icon}
          alt='category icon'
          className='w-[20px] h-[20px] sm:w-[60px] sm:h-[60px] object-contain'
        />
      </div>
      <span
        className='font-bold text-xs sm:text-base'
        style={{ wordBreak: 'keep-all' }}
      >
        {cateName}
      </span>
    </button>
  )
}

export default FaqSearchCategoryItemBtn
