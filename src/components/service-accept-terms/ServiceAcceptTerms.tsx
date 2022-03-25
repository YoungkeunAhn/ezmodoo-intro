import { serviceAcceptTerms } from 'data/acceptTerms'
import React from 'react'

function ServiceAcceptTerms() {
  const { mainTitle, required, content } = serviceAcceptTerms

  return (
    <div>
      <h1>
        {mainTitle}
        <span>&#40;{required ? '필수' : '선택'}&#41;</span>
      </h1>
      <div
        className='w-full bg-[#F4F5F8] p-4  flex flex-col max-h-[170px] overflow-y-auto text-[#666] border space-y-4 scrollbar-hide mt-2'
        style={{ WebkitScrollSnapType: 'none' }}
      >
        {content.map((content, idx) => (
          <div key={idx}>
            <h2 className='font-bold mb-3'>
              제 {idx + 1}장 {content.title}
            </h2>
            <ul>
              {content.subContent.map((sub, idx) => (
                <li key={idx} className='pl-2 text-sm'>
                  <h3 className='mb-1'>
                    제 {idx + 1}조 &#40;{sub.subTitle}&#41;
                  </h3>
                  <p className='leading-6'>{sub.content}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceAcceptTerms
