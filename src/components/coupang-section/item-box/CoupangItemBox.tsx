import React from 'react'

type Props = {
  icon: string
  title: string
}

function CoupangItemBox(props: Props) {
  const { icon, title } = props

  return (
    <div className='flex justify-around items-center rounded-[50px] border bg-white py-5 px-5 w-full border-[#BDD2E3] hover:-translate-x-1 hover:-translate-y-1 cursor-pointer'>
      <img
        src={icon}
        alt='document'
        className='mr-2 object-contain'
        width={40}
      />
      <span className='text-2xl'>{title}</span>
    </div>
  )
}

export default CoupangItemBox
