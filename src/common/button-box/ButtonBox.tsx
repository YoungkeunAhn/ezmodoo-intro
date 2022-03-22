import ChevronRight from 'asset/ChevronRight'
import React from 'react'

type Props = {
  onClick: () => void
}

function ButtonBox(props: Props) {
  const { onClick } = props
  return (
    <div className='flex justify-end w-full'>
      <button
        type='button'
        className='inline-flex px-6 py-2.5 bg-gray-800 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out text-2xl items-center'
        onClick={onClick}
      >
        문의하기
        <ChevronRight />
      </button>
    </div>
  )
}

export default ButtonBox
