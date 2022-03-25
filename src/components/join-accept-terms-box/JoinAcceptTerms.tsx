import ServiceAcceptTerms from 'components/service-accept-terms/ServiceAcceptTerms'
import UserInfoAcceptTerms from 'components/user-info-accept-terms/UserInfoAcceptTerms'
import React from 'react'

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
        <h2 className='text-3xl font-bold'>약관 동의</h2>
        <div className='flex justify-end items-center'>
          <input
            type='checkbox'
            checked={checkList.length === 2}
            onChange={onChangeAllCheck}
          />
          <span className='ml-5 cursor-pointer' onClick={onChangeAllCheck}>
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
              className='ml-5 cursor-pointer'
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
              className='ml-5 cursor-pointer'
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
