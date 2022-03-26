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
      <h3 className='text-xl mb-8font'></h3>
    </div>
  )
}

export default Comments