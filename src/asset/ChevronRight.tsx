import React from 'react'

type Props = {
  white?: true
}

function ChevronRight(props: Props) {
  const { white } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`rounded-full ml-2 ${white ? 'bg-black' : 'bg-white'} ${
        white ? 'h-4 w-4' : 'h-6 w-6'
      }`}
      fill='none'
      viewBox='0 0 24 24'
      stroke={white ? '#fff' : '#000'}
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
    </svg>
  )
}

export default ChevronRight
