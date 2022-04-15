import React from 'react'
import ServiceAcceptTerms from './service-accept-terms/ServiceAcceptTerms'
import UserInfoAcceptTerms from './user-info-accept-terms/UserInfoAcceptTerms'

type Props = {
  checkList: string[]
  onChangeAllCheck: () => void
  onChangeServiceCheck: () => void
  onChangeUserInfoCheck: () => void
}

function JoinAcceptTerms(props: Props) {
  const {
    checkList,
    onChangeAllCheck,
    onChangeServiceCheck,
    onChangeUserInfoCheck,
  } = props

  return (
    <div>
      <div className='my-16 flex justify-between'>
        <h2 className='text-xl md:text-3xl font-bold'>약관 동의</h2>
        <div className='flex justify-end items-center'>
          <input
            type='checkbox'
            checked={checkList.length === 2}
            onChange={onChangeAllCheck}
          />
          <span
            className='ml-5 cursor-pointer text-sm md:text-base'
            onClick={onChangeAllCheck}
          >
            전체 동의
          </span>
        </div>
      </div>
      <div className='flex flex-col space-y-10'>
        <div className='flex flex-col space-y-2'>
          <ServiceAcceptTerms />
          <div className='flex justify-end items-center'>
            <input
              type='checkbox'
              checked={checkList.includes('service')}
              onChange={onChangeServiceCheck}
            />
            <span
              className='ml-5 cursor-pointer text-sm md:text-base'
              onClick={onChangeServiceCheck}
            >
              동의합니다.
            </span>
          </div>
        </div>
        <div className='flex flex-col space-y-2'>
          <UserInfoAcceptTerms />
          <div className='flex justify-end items-center'>
            <input
              type='checkbox'
              checked={checkList.includes('userInfo')}
              onChange={onChangeUserInfoCheck}
            />
            <span
              className='ml-5 cursor-pointer text-sm md:text-base'
              onClick={onChangeUserInfoCheck}
            >
              동의합니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinAcceptTerms
