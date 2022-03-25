import FaqContentList from 'components/faq/content-list/FaqContentList'
import FaqSearchCategory from 'components/faq/search-category/FaqSearchCategory'
import { faqList } from 'data/faq'
import { faqPageHeader } from 'data/page'
import PageLayout from 'layout/PageLayout'
import React, { useState } from 'react'

function Faq() {
  const [faqContentList, setFaqContentList] =
    useState<FaqContentType[]>(faqList)

  const [openList, setOpenList] = useState<string[]>([])

  const [searchOption, setSearchOption] = useState<FaqCategoryId>('All')

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchOption(event.target.value as FaqCategoryId)
  }

  const onClickItemBtn = (cateId: FaqCategoryId) => {
    setSearchOption(cateId)
  }

  const onSearch = (text: string) => {
    console.log(text)
  }

  const onClickOpenContent = (contentId: string) => {
    if (openList.includes(contentId)) {
      setOpenList(openList.filter((it) => it !== contentId))
    } else {
      setOpenList(openList.concat(contentId))
    }
  }

  return (
    <PageLayout header={faqPageHeader}>
      <div className='flex flex-col space-y-10'>
        <FaqSearchCategory
          onClick={onClickItemBtn}
          onSearch={onSearch}
          searchOption={searchOption}
          onChange={onChange}
        />
        <FaqContentList
          faqContentList={faqContentList}
          openList={openList}
          onClick={onClickOpenContent}
          currentPage={1}
        />
      </div>
    </PageLayout>
  )
}

export default Faq
