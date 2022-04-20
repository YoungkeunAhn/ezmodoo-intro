import React, { useCallback, useEffect, useState } from 'react'

type Props = {
  label: string
  name: string
  value: string
  errorCheck: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeTextarea?: (evnet: React.ChangeEvent<HTMLTextAreaElement>) => void

  placeholder?: string
  smLableWidth?: true
  multiLine?: true
  rows?: number
  flexCol?: true
  noRequired?: true
}

function DataInputBox(props: Props) {
  const {
    label,
    name,
    value,
    multiLine,
    rows,
    smLableWidth,
    errorCheck,
    placeholder,
    flexCol,
    noRequired,
    onChange,
    onChangeTextarea,
  } = props

  const [inputType, setInputType] = useState<string>('text')

  const divideInputType = useCallback(() => {
    if (name === 'email') {
      return setInputType('email')
    }

    if (name === 'passwd' || name === 'passwdCheck') {
      return setInputType('password')
    }

    return setInputType('text')
  }, [name])

  useEffect(() => {
    divideInputType()
  }, [divideInputType])

  return (
    <div
      className={`flex w-full  ${
        flexCol ? 'flex-col item-left' : 'flex-col md:flex-row items-center'
      }`}
    >
      <label
        htmlFor={name}
        className={`text-[#686868] font-bold text-sm md:text-base ${
          smLableWidth
            ? 'w-full md:w-[7rem] mb-2 md:mb-0'
            : 'w-full md:w-[9rem] mb-2 md:mb-0'
        }`}
      >
        {label}
      </label>
      {multiLine ? (
        <textarea
          id={name}
          className={`form-control block w-full px-4 py-2 text-xs md:text-sm font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none bg-[#F4F5F8] ${
            errorCheck && 'border-rose-400'
          }`}
          name={name}
          value={value}
          onChange={onChangeTextarea}
          rows={rows}
          required={noRequired ? false : true}
        ></textarea>
      ) : (
        <input
          id={name}
          className={`sm:h-11 form-control block w-full px-4 py-2 text-xs md:text-sm font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none bg-[#F4F5F8] ${
            errorCheck && 'border-rose-400'
          }
          ${flexCol && 'text-center'}`}
          name={name}
          value={value}
          onChange={onChange}
          type={inputType}
          placeholder={placeholder}
          required={noRequired ? false : true}
        />
      )}
    </div>
  )
}

export default DataInputBox
