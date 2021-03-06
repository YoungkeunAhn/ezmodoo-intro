import DataInputBox from 'common/data-input-box/DataInputBox'
import {
  questionCheckErrorMsg,
  successQuestiontMsg,
  inputDataNullMsg,
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

  const validate = useCallback(() => {
    if (checkNullText(inputs).length !== 0) {
      alert(inputDataNullMsg)
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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) {
      return false
    }

    alert(successQuestiontMsg)
    setInputs(initInputs)
    setCheck(false)
    setValiArr([])
  }

  return (
    <PageLayout header={questionPageHeader}>
      <form onSubmit={(e) => onSubmit(e)}>
        <DataInputLayout
          button={
            <button
              type='submit'
              className='bg-white w-40 rounded-3xl py-2 font-bold hover:bg-[#eee] cursor-pointer'
            >
              ????????????
            </button>
          }
        >
          <div className='flex flex-col px-4 md:px-0 space-y-3'>
            <div className='flex items-center flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-10'>
              <DataInputBox
                label='?????????'
                name='company'
                value={inputs.company}
                onChange={onChange}
                errorCheck={valiArr.includes('company')}
              />
              <DataInputBox
                label='????????????'
                name='name'
                value={inputs.name}
                onChange={onChange}
                errorCheck={valiArr.includes('name')}
              />
            </div>
            <div className='flex items-center flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-10'>
              <DataInputBox
                label='???????????????'
                name='companyCallNum'
                value={inputs.companyCallNum}
                onChange={onChange}
                errorCheck={valiArr.includes('companyCallNum')}
                placeholder='-??? ?????? ??????????????????'
              />
              <DataInputBox
                label='???????????????'
                name='phoneNum'
                value={inputs.phoneNum}
                onChange={onChange}
                errorCheck={valiArr.includes('phoneNum')}
                placeholder='-??? ?????? ??????????????????'
              />
            </div>
            <div>
              <DataInputBox
                label='?????????'
                name='email'
                value={inputs.email}
                onChange={onChange}
                errorCheck={valiArr.includes('email')}
                smLableWidth
              />
            </div>
            <div>
              <DataInputBox
                label='????????????'
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
                className='cursor-pointer mr-3 text-xs md:text-base'
                onClick={() => setCheck(!check)}
              >
                ???????????? ??????????????? ??????
              </span>
              <span className='cursor-pointer text-xs md:text-base'>
                [???????????????]
              </span>
            </div>
          </div>
        </DataInputLayout>
      </form>
    </PageLayout>
  )
}

export default Question
