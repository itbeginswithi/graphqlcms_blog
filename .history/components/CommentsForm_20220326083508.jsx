import React, {useRef, useState, useEffect} from 'react'

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h1 className='text-xl font-semibol border-b pb-4 mb-8'>
            Comments Form
        </h1>
        <div className='grid grid-cols-1 gap-4 mb-4'>
            <textarea ref={commentEl} className='p-4 outline-none w-full '>

            </textarea>
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'>
            
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'>
            
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'>
            
        </div>
    </div>
  )
}

export default CommentsForm