import { faqSearchCategory } from 'data/faq'
import React, { useState } from 'react'
import FaqSearchCategoryItemBtn from './item-btn/FaqSearchCategoryItemBtn'

type Props = {
  searchOption: FaqCategoryId
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
      <div className='flex justify-center space-x-4'>
        {faqSearchCategory.map((item, idx) => (
          <FaqSearchCategoryItemBtn
            key={idx}
            item={item}
            searchOption={searchOption}
            onClick={onClick}
          />
        ))}
      </div>
      <div className='bg-white py-5 flex justify-center items-center mt-10 rounded-[4px] border'>
        <div className='w-3/4 flex space-x-2 '>
          <select
            className='border rounded-[4px] px-2'
            value={searchOption}
            onChange={onChange}
          >
            {faqSearchCategory.map((item, idx) => (
              <option key={idx} value={item.cateId}>
                {item.cateName}
              </option>
            ))}
          </select>
          <input
            className='border rounded-[4px] w-full'
            type='text'
            value={searchText}
            onChange={onChangeSearchText}
          />
          <button
            className='bg-[#39668F] p-2 border rounded-[4px] text-white font-bold w-20'
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
