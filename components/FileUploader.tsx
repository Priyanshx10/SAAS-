'use client'

import useUpload from '@/hooks/useUpload'
import { CircleArrowDown,CheckCircleIcon, HammerIcon, SaveIcon, RocketIcon } from 'lucide-react'
import React, { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/navigation'

const FileUploader = () => {

  const {progress , status, fileId , handleUpload} =  useUpload();
  const router = useRouter();

  useEffect(() => {
    if(fileId){
      router.push(`dashboard/chat/${fileId}`)
    }
  }, [fileId, router])

  const onDrop = useCallback( async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if(file){
      await handleUpload(file) 
    }else{
      //toast.error("Please Upload  a File");
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({ 
    onDrop ,
    maxFiles: 1,
    accept: {
      "application/pdf": [".pdf"]
    }
  })

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