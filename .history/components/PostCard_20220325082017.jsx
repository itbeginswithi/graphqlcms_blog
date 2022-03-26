import React from 'react'

const PostCard = ({ post }) => {
    console.log(post)
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src="https://via.placeholder.com/150"
          alt={post.title}
          style={{position: "-webkit-sticky"}}
          className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
    </div>
  )
}

export default PostCard
