import React from 'react'

type Props = {
  icon: string
  title: string
}

function CoupangItemBox(props: Props) {
  const { icon, title } = props

  return (
    <div className='flex justify-around items-center rounded-[40px] border bg-white py-5 px-5 w-full border-[#BDD2E3]'>
      <img src={icon} alt='document' className='mr-2 h-14' />
      <span className='text-2xl'>{title}</span>
    </div>
  )
}

export default CoupangItemBox
