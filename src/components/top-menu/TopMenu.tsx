import { headerContent, topMenu } from 'data/top-menu'
import React from 'react'

function TopMenu() {
  return (
    <div>
      <div className='h-50px bg-[#E3EAF1] relative flex justify-center	'>
        <p>{headerContent}</p>
        <div></div>
      </div>
      <ul>
        {topMenu.map((menu, idx) => (
          <li key={idx}>{menu.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TopMenu
