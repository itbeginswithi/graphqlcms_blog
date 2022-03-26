import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(category, slug)
        .then((res) => setRelatedPosts(res))
        .catch((err) => console.error(err))
    } else {
      getRecentPosts()
        .then((res) => setRelatedPosts(res))
        .catch((err) => console.error(err))
    }
  }, [slug])

  console.log(relatedPosts)

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8"></div>
  )
}

export default PostWidget
