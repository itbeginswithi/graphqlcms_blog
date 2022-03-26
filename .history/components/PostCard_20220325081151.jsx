import React from 'react'

const PostCard = ({post}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:">
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default PostCard