import React from 'react'

type Props = {
  icon: string
  title: string
}

function CoupangItemBox(props: Props) {
  const { icon, title } = props

  return (
    <div className='flex justify-around items-center rounded-[50px] border bg-white border-[#BDD2E3] hover:-translate-x-1 hover:-translate-y-1 cursor-pointer p-3 lg:p-5 w-full'>
      <img
        src={icon}
        alt='document'
        className='mr-2 object-contain w-[4vw] lg:w-[40px]'
      />
      <span className='text-[1rem] lg:text-2xl'>{title}</span>
    </div>
  )
}

export default CoupangItemBox
