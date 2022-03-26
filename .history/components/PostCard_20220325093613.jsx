import Link from 'next/link'
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
              {post.title}
          </Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex justify-center align-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img src={post.author.photo?.url} alt={post.author.name} width='30px' height='30px' className=''/>
        </div>
      </div>
    </div>
  )
}

export default PostCard
