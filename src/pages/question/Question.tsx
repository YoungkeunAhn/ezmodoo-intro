import DataInputBox from 'common/data-input-box/DataInputBox'
import {
  questionCheckErrorMsg,
  questionSubmitMsg,
  questionTextNullMsg,
} from 'data/alert-msg'
import { questionPageHeader } from 'data/page'
import DataInputLayout from 'layout/DataInputLayout'
import PageLayout from 'layout/PageLayout'
import React, { useCallback, useState } from 'react'
import {
  checkEmail,
  checkKorName,
  checkNullText,
  checkNum,
} from 'validation/textCheck'

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
  const [check, setCheck] = useState<boolean>(false)
  const [valiArr, setValiArr] = useState<string[]>([])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const onChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const validation = useCallback(() => {
    if (checkNullText(inputs).length !== 0) {
      alert(questionTextNullMsg)
      setValiArr(checkNullText(inputs))
      return false
    }

    if (!check) {
      alert(questionCheckErrorMsg)
      return false
    }

    if (!checkKorName(inputs.name)) {
      setValiArr(['name'])
      return false
    }

    if (!checkNum(inputs.companyCallNum)) {
      setValiArr(['companyCallNum'])
      return false
    }

    if (!checkNum(inputs.phoneNum)) {
      setValiArr(['phoneNum'])
      return false
    }

    if (!checkEmail(inputs.email)) {
      setValiArr(['email'])
      return false
    }

    return true
  }, [check, inputs])

  const onSubmit = () => {
    if (!validation()) {
      return false
    }

    alert(questionSubmitMsg)
    setInputs(initInputs)
    setCheck(false)
    setValiArr([])
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
                errorCheck={valiArr.includes('company')}
              />
              <DataInputBox
                label='담당자명'
                name='name'
                value={inputs.name}
                onChange={onChange}
                errorCheck={valiArr.includes('name')}
              />
            </div>
            <div className='flex items-center space-x-10'>
              <DataInputBox
                label='회사연락처'
                name='companyCallNum'
                value={inputs.companyCallNum}
                onChange={onChange}
                errorCheck={valiArr.includes('companyCallNum')}
                placeholder='-를 빼고 입력해주세요'
              />
              <DataInputBox
                label='휴대폰번호'
                name='phoneNum'
                value={inputs.phoneNum}
                onChange={onChange}
                errorCheck={valiArr.includes('phoneNum')}
                placeholder='-를 빼고 입력해주세요'
              />
            </div>
            <div>
              <DataInputBox
                label='이메일'
                name='email'
                value={inputs.email}
                onChange={onChange}
                errorCheck={valiArr.includes('email')}
                smLableWidth
              />
            </div>
            <div>
              <DataInputBox
                label='문의내용'
                name='content'
                value={inputs.content}
                multiLine
                errorCheck={valiArr.includes('content')}
                rows={10}
                onChangeTextarea={onChangeTextarea}
                smLableWidth
              />
            </div>
            <div className='flex justify-center items-center text-[#666]'>
              <input
                type='checkbox'
                className='mr-2'
                checked={check}
                onChange={(e) => setCheck(e.target.checked)}
              />
              <span
                className='cursor-pointer mr-3'
                onClick={() => setCheck(!check)}
              >
                개인정보 취급방침에 동의
              </span>
              <span className='cursor-pointer'>[자세히보기]</span>
            </div>
          </div>
        </DataInputLayout>
      </div>
    </PageLayout>
  )
}

export default Question
