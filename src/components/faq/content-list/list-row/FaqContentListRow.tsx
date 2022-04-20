import React from 'react'

type Props = {
  item: FaqContentType
  onClick: (contentId: string) => void
  open: boolean
}

function FaqContentListRow(props: Props) {
  const { item, open, onClick } = props
  return (
    <div className='border-b bg-white'>
      <div className='flex justify-between items-center'>
        <div className='flex p-4 items-center'>
          <span className='text-xl font-bold mr-5 text-[#31415E] sm:text-2xl md:w-11 md:text-5xl'>
            Q.
          </span>
          <span className='font-bold text-sm sm:text-base sm:mt-1 md:mt-0'>
            {item.question}
          </span>
        </div>
        <div>
          <span
            className='cursor-pointer p-2 md:p-5 md:mr-5 text-[2rem] md:text-[3.5rem] text-center text-[#888]'
            onClick={() => onClick(item.id)}
          >
            {open ? '-' : '+'}
          </span>
        </div>
      </div>
      <div
        style={{
          transition: 'height 0.3s',
          boxSizing: 'border-box',
        }}
        className={`border-t flex overflow-hidden pl-5 ${
          open ? 'md:h-20 ' : 'h-0'
        }`}
      >
        <span className='text-xl md:text-5xl font-bold text-[#567DC8] sm:text-2xl md:w-11 p-4'>
          A.
        </span>
        <span className='md:ml-9 py-4 pr-4 text-sm sm:text-base sm:mt-1 md:mt-0'>
          {item.answer}
        </span>
      </div>
    </div>
  )
}

export default FaqContentListRow
