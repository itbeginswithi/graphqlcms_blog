import React, { useRef, useState, useEffect } from 'react'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h1 className="font-semibol mb-8 border-b pb-4 text-xl">Comments Form</h1>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="comment"
          name="comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <input
          type="text"
          ref={nameEl}
          className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="name"
          name="name"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4"></div>
            <input
            type="text"
            ref={nameEl}
            className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="name"
            name="name"
            />
      <div className="mb-4 grid grid-cols-1 gap-4"></div>
    </div>
  )
}

export default CommentsForm
