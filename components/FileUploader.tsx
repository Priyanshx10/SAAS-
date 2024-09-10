'use client'

import { CircleArrowDown, RocketIcon } from 'lucide-react'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const FileUploader = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles)
    // Handle file upload logic here
  }, [])

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({ onDrop })

  return (
    <div className='flex flex-col gap-4 items-center mx-auto max-w-7xl'>
      <div 
        {...getRootProps()} 
        className={`
          mt-24 h-96 text-center cursor-pointer 
          ${isDragActive ? 'bg-indigo-50' : 'bg-white'}
          text-indigo-600 mx-auto w-full max-w-2xl 
          border-2 border-dashed rounded-lg 
          transition-colors duration-300 ease-in-out
          flex items-center justify-center 
          ${isFocused || isDragAccept ? 'border-indigo-400 shadow-lg' : 'border-indigo-300'}
        `}
      >
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center p-8'>
          {isDragActive ? (
            <>
              <RocketIcon className='w-24 h-24 text-indigo-500 animate-pulse mb-4' />
              <p className='text-lg font-semibold'>Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className='w-24 h-24 text-indigo-500 animate-bounce mb-4' />
              <p className='text-lg font-semibold mb-2'>Drag &apos;n&apos; drop some files here</p>
              <p className='text-sm text-gray-500'>or click to select files</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default FileUploader