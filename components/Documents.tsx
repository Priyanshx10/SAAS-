import React from 'react'
import PlaceholderDocument from './PlaceholderDocument'

const Documents = () => {
  return (
    <div className=' flex flex-wrap p-5 justify-center lg:justify-start rounded-sm gap-5 mx-auto max-w-7xl'>
        {/*Map through the Document*/}
 
        <PlaceholderDocument />
    </div>
  )
}

export default Documents