import React from 'react'

type Props = {
  data: { titleList: string[]; mainColor: string; subColor: string }
}

export default function MExtraPageColorFrame(props: Props) {
  const { data } = props
  const { titleList, mainColor, subColor } = data

  return (
    <div className='px-4 flex flex-col mt-16 space-y-3 md:hidden'>
      {titleList.map((title, idx) => (
        <div
          className='p-3 text-white rounded-lg flex items-center'
          style={{
            background: titleList.length - 1 === idx ? mainColor : subColor,
          }}
        >
          <span className='text-2xl font-bold mr-3'>0{idx + 1}</span>
          <span className='text-sm'>{title}</span>
        </div>
      ))}
    </div>
  )
}
