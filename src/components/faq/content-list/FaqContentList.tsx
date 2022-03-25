import React from 'react'
import FaqContentListRow from './list-row/FaqContentListRow'

type Props = {
  faqContentList: FaqContentType[]
  openList: string[]
  onClick: (contentId: string) => void
  currentPage: number
}

function FaqContentList(props: Props) {
  const { faqContentList, openList, currentPage, onClick } = props

  return (
    <div>
      <div className='border'>
        {faqContentList.map((content, idx) => (
          <FaqContentListRow
            key={idx}
            item={content}
            onClick={onClick}
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
          >
            {idx + 1}
          </span>
        ))}
      </div>
    </div>
  )
}

export default FaqContentList
