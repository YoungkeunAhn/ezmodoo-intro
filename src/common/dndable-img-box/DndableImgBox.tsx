import React from 'react'

type Props = {
  inputRef: React.RefObject<HTMLInputElement>
  inputImg: string
  onDragOver: (e: any) => void
  onDrop: (e: any) => false | undefined
}

function DndableImgBox(props: Props) {
  const { inputRef, onDragOver, onDrop, inputImg } = props

  return (
    <div
      className={`w-full h-[30rem] flex justify-center items-center rounded-md cursor-pointer ${
        !inputImg && 'border-dashed border-4 border-gray-500'
      }`}
      onClick={() => inputRef.current && inputRef.current.click()}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <span className='w-full h-[30rem] text-center flex justify-center items-center'>
        {inputImg ? (
          <img
            src={inputImg}
            className='object-contain h-full m-auto'
            alt='upload'
          />
        ) : (
          <h1 className='text-4xl text-gray-400 font-bold'>
            여기를 클릭하거나 이미지를 드래그 해주세요.
          </h1>
        )}
      </span>
    </div>
  )
}

export default DndableImgBox
