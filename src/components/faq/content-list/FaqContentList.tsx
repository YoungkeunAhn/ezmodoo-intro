import { SearchOptionType } from 'pages/faq/Faq'
import React from 'react'
import FaqContentListRow from './list-row/FaqContentListRow'

type Props = {
  faqContentList: FaqContentType[]
  openList: string[]
  currentPage: number
  searchOption: SearchOptionType
  onClickOpenContent: (contentId: string) => void
  onClickPageNav: (page: number) => void
}

function FaqContentList(props: Props) {
  const {
    faqContentList,
    openList,
    currentPage,
    searchOption,
    onClickOpenContent,
    onClickPageNav,
  } = props

  return (
    <div>
      <div className='border'>
        {faqContentList
          .filter((it) =>
            searchOption.cateId !== 'All'
              ? it.category === searchOption.cateId
              : it
          )
          .filter((it) =>
            searchOption.text !== ''
              ? it.question.includes(searchOption.text)
              : it
          )
          .map((content, idx) => (
            <FaqContentListRow
              key={idx}
              item={content}
              onClick={onClickOpenContent}
              open={openList.includes(content.id)}
            />
          ))}
      </div>
      <div className='flex justify-center items-center space-x-4 mt-5'>
        {new Array(3).fill(0).map((x, idx) => (
          <span
            key={idx}
            className={`${
              currentPage === idx + 1 && 'font-bold'
            } cursor-pointer`}
            onClick={() => onClickPageNav(idx + 1)}
          >
            {idx + 1}
          </span>
        ))}
      </div>
    </div>
  )
}

export default FaqContentList
