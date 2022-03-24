import {
  callNumRangeErrorMsg,
  emailErrorMsg,
  nameErrorMsg,
  numErrorMsg,
} from 'data/alert-msg'

const korRex = new RegExp(/[(ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/)
const engRex = new RegExp(/[a-z|A-Z|0-9]/)
const numberRex = new RegExp(/[0-9]/)
const symbolRex = new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g)

const emailRex = new RegExp(
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
)

const korNameRex = new RegExp(/[가-힣]/)

export const checkNullText = (inputs: any): string[] => {
  const nullArr: string[] = []

  Object.entries(inputs).map(
    (value) => value[1] === '' && nullArr.push(value[0])
  )
  return nullArr
}

export const checkKorName = (name: string) => {
  if (korNameRex.test(name)) {
    return true
  }

  alert(nameErrorMsg)
  return false
}

export const checkNum = (num: string) => {
  if (numberRex.test(num) && !symbolRex.test(num)) {
    if (num.length > 8 && num.length < 12) {
      return true
    } else {
      alert(callNumRangeErrorMsg)
      return false
    }
  }
  alert(numErrorMsg)
  return false
}

export const checkEmail = (email: string) => {
  if (emailRex.test(email)) {
    return true
  }

  alert(emailErrorMsg)
  return false
}
