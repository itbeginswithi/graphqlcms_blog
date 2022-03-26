import React from 'react'

const PostCard = ({ post }) => {
  console.log(post.title)
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={post.featuredimage?.url}
          alt={post.title}
          style={{ position: '-webkit-sticky' }}
          className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-700 hover:text-pink-600">
          <Link href={`/post/${post.slug}`}>
          </Link>
      </h1>
    </div>
  )
}

export default PostCard
