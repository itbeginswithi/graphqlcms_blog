import React from 'react'

const PostCard = ({post}) => {
  return (
    <div className="post">
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default PostCard