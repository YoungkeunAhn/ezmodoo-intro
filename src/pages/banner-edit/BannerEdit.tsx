import RequillEditor from 'common/requill-editor/RequillEditor'
import BannerManageLayout from 'layout/BannerManageLayout'
import React, { useCallback, useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import { Link, useParams } from 'react-router-dom'

type InputsType = {
  title: string
  image: string
  active: boolean
}

const initInputs: InputsType = {
  title: '',
  image: '',
  active: true,
}

function BannerEdit() {
  const params = useParams()
  const [inputs, setInputs] = useState<InputsType>(initInputs)

  const [editorValue, setEdiotrValue] = useState<string>('')
  const [inputImg, setInputImg] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const uploadDiv = useRef<HTMLDivElement>(null)

  //클릭했을 때
  const onChangeInputImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return false
    }
    if (!event.target.files[0].type.startsWith('image/')) {
      alert('이미지 파일만 올려주세요.')
      return false
    }
    handleFile(event.target.files[0])
  }

  const onDragOver = useCallback((e) => {
    e.preventDefault()
    console.log('drag over')
  }, [])

  //이미지 드랍했을 때
  const onDrop = useCallback((e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (!file) return false

    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 올려주세요.')
      return false
    }

    handleFile(file)
  }, [])

  //file handler
  const handleFile = (file: any) => {
    console.log(file.size)

    const reader = new FileReader()

    reader.onload = () => {
      if (inputRef.current) {
        console.log(reader.result)
        setInputImg(`${reader.result}`)
      }
    }
    reader.readAsDataURL(file)
  }

  //제목 change event
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  if (uploadDiv.current) {
    uploadDiv.current.addEventListener('dragover', onDragOver)
  }

  const onChangeEditor = (html: string) => {
    setEdiotrValue(html)
    console.log(editorValue)
  }

  return (
    <BannerManageLayout title={params.id ? '배너 수정' : '배너 추가'}>
      <div className='flex flex-col items-center'>
        <table className='border w-full'>
          <tr className='border-b'>
            <th className='w-40 text-center py-3 bg-[#FAFAFC] font-bold border-r'>
              제목
            </th>
            <td className='p-2'>
              <input
                className='border p-1 w-full rounded-md'
                type='text'
                name='title'
                value={inputs.title}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr className='border w-full'>
            <th className='w-40 text-center py-3 bg-[#FAFAFC] font-bold border-r'>
              활성여부
            </th>
            <td className='flex items-center p-2 pt-3 space-x-6'>
              <div className='flex items-center'>
                <input type='radio' name='active' className='mr-2' />
                <label htmlFor='active'>활성화</label>
              </div>
              <div className='flex items-center'>
                <input type='radio' name='noActive' className='mr-2' />
                <label htmlFor='noActive'>비활성화</label>
              </div>
            </td>
          </tr>
          <tr>
            <th className='w-40 text-center py-3 bg-[#FAFAFC] font-bold border-r border-b'>
              이미지
              <div className='text-sm mt-3 font-normal text-gray-400'>
                권장사이즈
                <br />
                (1900 * 790)
              </div>
            </th>
            <td className='flex items-center p-2 pt-3 space-x-6'>
              <input
                ref={inputRef}
                id='image'
                type='file'
                accept='image/*'
                onChange={onChangeInputImg}
                hidden
              />
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
            </td>
          </tr>
          <tr>
            <th className='w-40 text-center py-3 bg-[#FAFAFC] font-bold border-r'>
              내용
            </th>
            <td>
              <div className='w-full overflow-hidden'>
                <RequillEditor value={editorValue} onChange={onChangeEditor} />
              </div>
            </td>
          </tr>
        </table>

        <div className='flex w-full justify-end space-x-5'>
          <button className='w-48 py-3 text-center border rounded-xl bg-green-500 text-white hover:bg-green-600'>
            저장
          </button>
          <Link to='/banner-manage'>
            <button className='w-48 py-3 text-center border rounded-xl hover:bg-gray-300'>
              취소
            </button>
          </Link>
        </div>
      </div>
    </BannerManageLayout>
  )
}

export default BannerEdit
