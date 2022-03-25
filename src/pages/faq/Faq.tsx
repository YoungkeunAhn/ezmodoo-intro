import FaqContentList from 'components/faq/content-list/FaqContentList'
import FaqSearchCategory from 'components/faq/search-category/FaqSearchCategory'
import { faqList } from 'data/faq'
import { faqPageHeader } from 'data/page'
import PageLayout from 'layout/PageLayout'
import React, { useState } from 'react'

export type SearchOptionType = {
  cateId: FaqCategoryId
  text: string
}

function Faq() {
  const [openList, setOpenList] = useState<string[]>([])
  const [searchOption, setSearchOption] = useState<SearchOptionType>({
    cateId: 'All',
    text: '',
  })
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [faqContentList, setFaqContentList] =
    useState<FaqContentType[]>(faqList)

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchOption({
      ...searchOption,
      cateId: event.target.value as FaqCategoryId,
    })
  }

  const onClickItemBtn = (cateId: FaqCategoryId) => {
    setSearchOption({ ...searchOption, cateId })
  }

  const onSearch = (text: string) => {
    setSearchOption({ ...searchOption, text })
  }

  const onClickOpenContent = (contentId: string) => {
    if (openList.includes(contentId)) {
      setOpenList(openList.filter((it) => it !== contentId))
    } else {
      setOpenList(openList.concat(contentId))
    }
  }

  const onClickPageNav = (page: number) => {
    setCurrentPage(page)
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
          currentPage={currentPage}
          onClickOpenContent={onClickOpenContent}
          onClickPageNav={onClickPageNav}
          searchOption={searchOption}
        />
      </div>
    </PageLayout>
  )
}

export default Faq
