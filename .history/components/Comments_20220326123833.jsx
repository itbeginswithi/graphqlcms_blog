import React, {useEffect, useState} from 'react'
import moment from 'moment'
import { getComments } from '../services'

const Comments = ({slug}) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug)
      .then((res) => setComments(res))
  }, [])

  return (
    <div className="bg-white rounded-lg p-8 mb-8 pb-12 shadow-lg">
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {comments.length} 
        {' '}
        {comments.length < 2 ? "comment" : "comments"}
      </h3>
      {
        comments.map((comment) => (
          <div key={comment.createdAt} className="border-b pb-4 mb-4 border-gray-100">
            <p className='mb-4'>
              <span className='font-semibold'>
                {comment.name}
              </span>
              {' '}
              on
              {' '}
              {moment(comment.createdAt).format('')}
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default Comments