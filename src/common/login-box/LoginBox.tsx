import React, { useState } from 'react'

type Props = {
  open: boolean
  onLogin: () => void
}

type InputsType = {
  domain: string
  id: string
  passwd: string
}

const initInputs: InputsType = {
  domain: '',
  id: '',
  passwd: '',
}

function LoginBox(props: Props) {
  const { open, onLogin } = props

  const [inputs, setInputs] = useState<InputsType>(initInputs)
  const [loginSave, setLoginSave] = useState<boolean>(false)

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  return (
    <div
      className={`absolute top-[65px] right-[80px] z-10 ${
        open ? 'opacity-100' : 'opacity-0 hidden'
      }`}
    >
      <div className='bg-[#7FA2C2] flex justify-center items-center rounded-t-[10px] p-3'>
        <img
          src='white_logo.png'
          alt='white logo'
          width={130}
          className='ml-5'
        />
      </div>
      <div className='bg-white flex flex-col items-center p-5 pl-10 pr-10 w-[25rem] box-border'>
        <h1 className='font-bold text-2xl'>로그인</h1>
        <span className='text-sm mt-2 text-gray-400'>
          도메인, 사용자아이디, 비밀번호를 입력하세요.
        </span>
        <div className='flex flex-col mt-5 w-full space-y-2'>
          <input
            type='text'
            className='form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center'
            placeholder='도메인'
            name='domain'
            value={inputs.domain}
            onChange={onChangeInputs}
          />
          <input
            type='text'
            className='form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center'
            placeholder='사용자아이디'
            name='id'
            value={inputs.id}
            onChange={onChangeInputs}
          />
          <input
            type='password'
            className='form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center'
            placeholder='비밀번호'
            name='passwd'
            value={inputs.passwd}
            onChange={onChangeInputs}
          />
        </div>
        <div>
          <div className='form-group form-check mt-3'>
            <input
              type='checkbox'
              className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
              id='loginSave'
              name='loginSave'
              checked={loginSave}
              onChange={(event) => {
                setLoginSave(event.target.checked)
              }}
            />
            <label
              className='form-check-label inline-block text-gray-800 text-sm hover:cursor-pointer'
              htmlFor='loginSave'
            >
              로그인 저장
            </label>
          </div>
        </div>
      </div>
      <div
        className='bg-[#7FA2C2] flex justify-center items-center p-3 rounded-b-[10px] text-xl hover:cursor-pointer hover:text-[1.3rem]'
        onClick={onLogin}
      >
        <span className='text-white font-bold'>Login</span>
      </div>
    </div>
  )
}

export default LoginBox
