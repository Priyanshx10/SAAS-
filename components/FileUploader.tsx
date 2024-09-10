'use client'

import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const FileUploader = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles)
    // Handle file upload logic here
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className='mt-24 border-2 border-dashed border-indigo-600 rounded-lg  flex items-center justify-center h-96 text-center cursor-pointer text-indigo-600 mx-20 w-[90] '>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
        }
      </div>
    </div>
  )
}

export default FileUploader