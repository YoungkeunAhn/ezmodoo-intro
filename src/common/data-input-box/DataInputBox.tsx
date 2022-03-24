import React from 'react'

type Props = {
  label: string
  name: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeTextarea?: (evnet: React.ChangeEvent<HTMLTextAreaElement>) => void

  placeholder?: string
  smLableWidth?: true
  multiLine?: true
  rows?: number
  errorCheck: boolean
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
    onChange,
    onChangeTextarea,
  } = props

  return (
    <div className='flex items-center'>
      <label
        htmlFor={name}
        className={`text-[#686868] font-bold ${
          smLableWidth ? 'w-[7rem]' : 'w-[9rem]'
        }`}
      >
        {label}
      </label>
      {multiLine ? (
        <textarea
          id={name}
          className={`form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none bg-[#F4F5F8] ${
            errorCheck && 'border-rose-400'
          }`}
          name={name}
          value={value}
          onChange={onChangeTextarea}
          rows={rows}
        ></textarea>
      ) : (
        <input
          id={name}
          className={`form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none bg-[#F4F5F8] ${
            errorCheck && 'border-rose-400'
          }`}
          name={name}
          value={value}
          onChange={onChange}
          type={name === 'email' ? 'email' : 'text'}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  )
}

export default DataInputBox
