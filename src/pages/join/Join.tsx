import DataInputBox from 'common/data-input-box/DataInputBox'
import JoinAcceptTerms from 'components/join-accept-terms-box/JoinAcceptTerms'
import {
  doubleCheckErrorMsg,
  inputDataNullMsg,
  requiredCheckErrorMsg,
  successJoinMsg,
  unmatchPasswdCheckMsg,
} from 'data/alert-msg'
import { joinPageHeader } from 'data/page'
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
  id: string
  passwd: string
  passwdCheck: string
  company: string
  businessNum: string
  name: string
  phoneNum: string
  email: string
  joinRoot: string
}

const initInputs: InputsType = {
  id: '',
  passwd: '',
  passwdCheck: '',
  company: '',
  businessNum: '',
  name: '',
  phoneNum: '',
  email: '',
  joinRoot: '',
}

function Join() {
  const [inputs, setInputs] = useState<InputsType>(initInputs)
  const [doubleCheck, setDoubleCheck] = useState<'success' | 'fail'>()
  const [valiArr, setValiArr] = useState<string[]>([])
  const [agreeCheckList, setAgreeCheckList] = useState<string[]>([])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const onClickDoubleCheck = () => {
    setDoubleCheck('success')
    setValiArr([])
  }

  const validate = useCallback(() => {
    const nullArr = checkNullText(inputs).filter((it) => it !== 'joinRoot')
    if (nullArr.length !== 0) {
      alert(inputDataNullMsg)
      alert(nullArr)
      setValiArr(nullArr)
      return false
    }

    if (doubleCheck !== 'success') {
      alert(doubleCheckErrorMsg)
      setValiArr(['id'])
      return false
    }

    if (inputs.passwd !== inputs.passwdCheck) {
      alert(unmatchPasswdCheckMsg)
      setValiArr(['passwd', 'passwdCheck'])
      return false
    }

    if (!checkKorName(inputs.name)) {
      setValiArr(['name'])
      return false
    }

    if (!checkEmail(inputs.email)) {
      setValiArr(['email'])
      return false
    }

    if (!checkNum(inputs.phoneNum)) {
      setValiArr(['phoneNum'])
      return false
    }

    if (agreeCheckList.length !== 2) {
      alert(requiredCheckErrorMsg)
      return false
    }

    return true
  }, [inputs, doubleCheck, agreeCheckList])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validate()) {
      return false
    }

    alert(successJoinMsg)
    setInputs(initInputs)
    setDoubleCheck(undefined)
    setValiArr([])
    setAgreeCheckList([])
    return true
  }

  const onChangeAllCheck = () => {
    if (agreeCheckList.length === 2) {
      setAgreeCheckList([])
    } else {
      setAgreeCheckList(['service', 'userInfo'])
    }
  }

  const onChangeServiceCheck = () => {
    if (agreeCheckList.includes('service')) {
      setAgreeCheckList(agreeCheckList.filter((it) => it !== 'service'))
    } else {
      setAgreeCheckList(agreeCheckList.concat('service'))
    }
  }

  const onChangeUserInfoCheck = () => {
    if (agreeCheckList.includes('userInfo')) {
      setAgreeCheckList(agreeCheckList.filter((it) => it !== 'userInfo'))
    } else {
      setAgreeCheckList(agreeCheckList.concat('userInfo'))
    }
  }

  return (
    <PageLayout header={joinPageHeader}>
      <form onSubmit={(e) => onSubmit(e)}>
        <DataInputLayout
          button={
            <button
              type='submit'
              className='bg-white w-40 rounded-3xl py-2 hover:bg-[#eee] cursor-pointer'
            >
              가입하기
            </button>
          }
        >
          <div className='w-full md:w-[52rem] flex flex-col space-y-2 md:space-y-5 px-4'>
            <div className='flex justify-between items-end py-1 md:space-x-5 relative'>
              <div className='w-full flex'>
                <DataInputBox
                  label='아이디'
                  name='id'
                  value={inputs.id}
                  onChange={onChange}
                  errorCheck={valiArr.includes('id')}
                  placeholder='아이디'
                  flexCol
                />
              </div>
              <button
                type='button'
                className='bg-[#39668F] text-white text-center w-28 h-8 rounded-3xl md:mb-1 text-sm md:text-base ml-4 md:ml-0'
                onClick={onClickDoubleCheck}
              >
                중복확인
              </button>
              {doubleCheck === 'success' ? (
                <span
                  className={`absolute top-[0.4rem] left-12 text-sm text-green-500`}
                >
                  사용할 수 있는 아이디 입니다.
                </span>
              ) : doubleCheck === 'fail' ? (
                <span
                  className={`absolute top-[0.4rem] left-12 text-sm text-red-500`}
                >
                  중복 된 아이디 입니다.
                </span>
              ) : (
                ''
              )}
            </div>
            <div className='flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0 justify-between'>
              <DataInputBox
                label='비밀번호'
                name='passwd'
                value={inputs.passwd}
                onChange={onChange}
                errorCheck={valiArr.includes('passwd')}
                placeholder='비밀번호'
                flexCol
              />
              <DataInputBox
                label='비밀번호 확인'
                name='passwdCheck'
                value={inputs.passwdCheck}
                onChange={onChange}
                errorCheck={valiArr.includes('passwdCheck')}
                placeholder='비밀번호 확인'
                flexCol
              />
            </div>
            <div className='flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0 justify-between'>
              <DataInputBox
                label='상호/법인명'
                name='company'
                value={inputs.company}
                onChange={onChange}
                errorCheck={valiArr.includes('company')}
                placeholder='상호/법인명'
                flexCol
              />
              <DataInputBox
                label='사업자 등록번호'
                name='businessNum'
                value={inputs.businessNum}
                onChange={onChange}
                errorCheck={valiArr.includes('businessNum')}
                placeholder='사업자 등록번호'
                flexCol
              />
            </div>
            <div className='flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0 justify-between'>
              <DataInputBox
                label='담당자명'
                name='name'
                value={inputs.name}
                onChange={onChange}
                errorCheck={valiArr.includes('name')}
                placeholder='담당자명'
                flexCol
              />
              <DataInputBox
                label='담당자 연락처'
                name='phoneNum'
                value={inputs.phoneNum}
                onChange={onChange}
                errorCheck={valiArr.includes('phoneNum')}
                placeholder='담당자 연락처'
                flexCol
              />
            </div>
            <div className='flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0 justify-between'>
              <DataInputBox
                label='담당자 이메일'
                name='email'
                value={inputs.email}
                onChange={onChange}
                errorCheck={valiArr.includes('email')}
                placeholder='담당자 이메일'
                flexCol
              />
              <DataInputBox
                label='가입경로'
                name='joinRoot'
                value={inputs.joinRoot}
                onChange={onChange}
                errorCheck={false}
                placeholder='가입경로'
                flexCol
                noRequired
              />
            </div>
            <JoinAcceptTerms
              checkList={agreeCheckList}
              onChangeAllCheck={onChangeAllCheck}
              onChangeServiceCheck={onChangeServiceCheck}
              onChangeUserInfoCheck={onChangeUserInfoCheck}
            />
          </div>
        </DataInputLayout>
      </form>
    </PageLayout>
  )
}

export default Join
