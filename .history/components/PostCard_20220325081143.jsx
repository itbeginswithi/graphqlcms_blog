import React from 'react'

const PostCard = ({post}) => {
  return (
    <div className="bg-white shadow-lg ">
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default PostCard