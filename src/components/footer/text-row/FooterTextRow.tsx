import React from 'react'

type Props = {
  title: string
  content: string
}

function FooterTextRow(props: Props) {
  const { title, content } = props

  return (
    <div className='flex space-x-1 md:space-x-2 justify-center items-center text-[7px] md:text-xs'>
      <span className='uppercase'>{title}</span>
      <span>/</span>
      <span>{content}</span>
    </div>
  )
}

export default FooterTextRow
