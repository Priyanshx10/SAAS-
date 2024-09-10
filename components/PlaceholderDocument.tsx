'use client'

import { Button } from './ui/button'
import { useRouter } from 'next/navigation' 
import { PlusCircleIcon } from 'lucide-react'

const PlaceholderDocument = () => {

  const handleAddDocument = () => {
    router.push('/dashboard/upload')
} 

const router = useRouter() 

  return (
    <Button onClick={handleAddDocument} className='flex flex-col items-center justify-center w-64 h-80 rounded-md drop-shadow-md text-gray-500 bg-gray-200'>
      <PlusCircleIcon className='w-16 h-16 mb-2' />
      <p>Add a document</p>
    </Button>
  )
}

export default PlaceholderDocument