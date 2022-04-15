import { faqSearchCategory } from 'data/faq'
import { SearchOptionType } from 'pages/faq/Faq'
import React, { useState } from 'react'
import FaqSearchCategoryItemBtn from './item-btn/FaqSearchCategoryItemBtn'

type Props = {
  searchOption: SearchOptionType
  onClick: (cateId: FaqCategoryId) => void
  onSearch: (text: string) => void
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function FaqSearchCategory(props: Props) {
  const { searchOption, onClick, onSearch, onChange } = props

  const [searchText, setSearchText] = useState<string>('')

  const onChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  return (
    <div>
      <div className='hidden md:flex justify-center space-x-4'>
        {faqSearchCategory.map((item, idx) => (
          <FaqSearchCategoryItemBtn
            key={idx}
            item={item}
            searchOption={searchOption}
            onClick={onClick}
          />
        ))}
      </div>
      <div className='flex flex-col items-center w-full space-y-2 md:hidden'>
        <div className='flex justify-center items-center space-x-2 '>
          {faqSearchCategory.slice(0, 4).map((item, idx) => (
            <FaqSearchCategoryItemBtn
              key={idx}
              item={item}
              searchOption={searchOption}
              onClick={onClick}
            />
          ))}
        </div>
        <div className='flex justify-center items-center space-x-2'>
          {faqSearchCategory.slice(4, 7).map((item, idx) => (
            <FaqSearchCategoryItemBtn
              key={idx}
              item={item}
              searchOption={searchOption}
              onClick={onClick}
            />
          ))}
        </div>
      </div>
      <div className='bg-white p-2 md:py-5 flex justify-between items-center mt-10 rounded-[4px] border'>
        <div className='w-full md:w-3/4 flex space-x-2 '>
          <select
            className='border rounded-[4px] px-2 text-sm md:text-base'
            value={searchOption.cateId}
            onChange={onChange}
          >
            {faqSearchCategory.map((item, idx) => (
              <option key={idx} value={item.cateId}>
                {item.cateName}
              </option>
            ))}
          </select>
          <input
            className='border rounded-[4px] w-full px-4'
            type='text'
            value={searchText}
            onChange={onChangeSearchText}
          />
          <button
            style={{ wordBreak: 'keep-all' }}
            className='bg-[#39668F] p-2 border rounded-[4px] text-white font-bold w-20 text-sm md:text-base'
            onClick={() => onSearch(searchText)}
          >
            검색
          </button>
        </div>
      </div>
    </div>
  )
}

export default FaqSearchCategory
