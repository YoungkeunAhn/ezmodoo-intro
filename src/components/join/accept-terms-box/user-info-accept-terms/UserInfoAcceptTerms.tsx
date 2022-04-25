import { userInfoAcceptTerms } from 'data/acceptTerms'
import React from 'react'

function UserInfoAcceptTerms() {
  const { mainTitle, required, content } = userInfoAcceptTerms

  return (
    <div>
      <h1>
        {mainTitle}
        <span>&#40;{required ? '필수' : '선택'}&#41;</span>
      </h1>
      <ol
        className='w-full bg-[#F4F5F8] p-4  flex flex-col max-h-[170px] overflow-y-auto text-[#666] border space-y-8 scrollbar-hide mt-2 text-xs md:text-base'
        style={{ WebkitScrollSnapType: 'none' }}
      >
        {content.map((sub, idx) => (
          <li key={idx} className='pl-2 text-sm'>
            <h3 className='mb-3 font-bold'>
              {idx + 1}. {sub.title}
            </h3>
            <p className='leading-6'>{sub.content}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default UserInfoAcceptTerms
