import React, {useEffect, useState} from 'react'
import moment from 'moment'
import { getComments } from '../services'

const Comments = ({slug}) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug)
      .then((res))
  }, [])

  return (
    <div>Comments</div>
  )
}

export default Comments