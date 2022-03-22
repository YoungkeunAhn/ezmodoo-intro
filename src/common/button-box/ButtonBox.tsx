import ChevronRight from 'asset/ChevronRight'
import React from 'react'

type Props = {
  onClick: () => void
  white?: true
  noFull?: true
}

function ButtonBox(props: Props) {
  const { onClick, white, noFull } = props
  return (
    <div className={`flex justify-end h-12 ${noFull ? 'w-fit' : 'w-full'}`}>
      <button
        type='button'
        className={`inline-flex px-6 py-2.5  font-medium leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out text-2xl items-center whitespace-nowrap ${
          white
            ? 'bg-white text-gray-900 active:bg-slate-50 hover:bg-slate-50  focus:bg-slate-50'
            : 'bg-gray-800 text-white active:bg-gray-900 hover:bg-gray-900  focus:bg-gray-900'
        } `}
        onClick={onClick}
      >
        문의하기
        <ChevronRight white />
      </button>
    </div>
  )
}

export default ButtonBox
