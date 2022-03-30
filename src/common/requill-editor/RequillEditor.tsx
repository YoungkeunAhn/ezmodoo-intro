import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

type Props = {
  value: any
  onChange: (html: string) => void
}

function RequillEditor(props: Props) {
  const { value, onChange } = props

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  }

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'link',
    'align',
    'color',
    'background',
  ]

  return (
    <ReactQuill
      style={{ height: '300px' }}
      theme='snow'
      modules={modules}
      formats={formats}
      value={value}
      onChange={(content, delta, source, editor) => onChange(editor.getHTML())}
    />
  )
}

export default RequillEditor
