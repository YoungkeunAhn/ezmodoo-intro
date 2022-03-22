import React from 'react'

type Props = {
  icon: string
  title: string
}

function CoupangItemBox(props: Props) {
  const { icon, title } = props

  return (
    <div className='flex justify-around items-center rounded-[40px] border bg-white pt-2 pb-2 pl-5 pr-5 w-full'>
      <img src={icon} alt='document' width={35} height={35} className='mr-2' />
      <span className='text-lg'>{title}</span>
    </div>
  )
}

export default CoupangItemBox
