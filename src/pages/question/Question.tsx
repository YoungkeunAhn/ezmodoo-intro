import DataInputBox from 'common/data-input-box/DataInputBox'
import { questionSubmitMsg } from 'data/alert-msg'
import { questionPageHeader } from 'data/page'
import DataInputLayout from 'layout/DataInputLayout'
import PageLayout from 'layout/PageLayout'
import React, { useState } from 'react'

type InputsType = {
  company: string
  name: string
  companyCallNum: string
  phoneNum: string
  email: string
  content: string
}

const initInputs: InputsType = {
  company: '',
  name: '',
  companyCallNum: '',
  phoneNum: '',
  email: '',
  content: '',
}

function Question() {
  const [inputs, setInputs] = useState<InputsType>(initInputs)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const onChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const onSubmit = () => {
    alert(questionSubmitMsg)
    setInputs(initInputs)
  }

  return (
    <PageLayout header={questionPageHeader}>
      <div>
        <DataInputLayout
          button={
            <button
              className='bg-white w-40 text-center rounded-3xl py-2 hover:bg-[#eee] cursor-pointer font-bold'
              onClick={onSubmit}
            >
              문의하기
            </button>
          }
        >
          <div className='flex flex-col space-y-3'>
            <div className='flex items-center space-x-10'>
              <DataInputBox
                label='회사명'
                name='company'
                value={inputs.company}
                onChange={onChange}
              />
              <DataInputBox
                label='담당자명'
                name='name'
                value={inputs.name}
                onChange={onChange}
              />
            </div>
            <div className='flex items-center space-x-10'>
              <DataInputBox
                label='회사연락처'
                name='companyCallNum'
                value={inputs.companyCallNum}
                onChange={onChange}
              />
              <DataInputBox
                label='휴대폰번호'
                name='phoneNum'
                value={inputs.phoneNum}
                onChange={onChange}
              />
            </div>
            <div>
              <DataInputBox
                label='이메일'
                name='email'
                value={inputs.email}
                onChange={onChange}
                smLableWidth
              />
            </div>
            <div>
              <DataInputBox
                label='문의내용'
                name='content'
                value={inputs.content}
                multiLine
                rows={10}
                onChangeTextarea={onChangeTextarea}
                smLableWidth
              />
            </div>
          </div>
        </DataInputLayout>
      </div>
    </PageLayout>
  )
}

export default Question
