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
          <span className='text-5xl font-bold mr-5 text-[#31415E] w-11'>
            Q.
          </span>
          <span>{item.question}</span>
        </div>
        <div>
          <span
            className='cursor-pointer p-5 mr-5 text-[3.5rem] text-center'
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
          open ? 'h-20 ' : 'h-0'
        }`}
      >
        <span className='text-5xl font-bold text-[#567DC8] w-11 p-4'>A.</span>
        <span className='ml-9 py-4 pr-4'>{item.answer}</span>
      </div>
    </div>
  )
}

export default FaqContentListRow
