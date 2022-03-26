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
            <img src={post.author.photo?.url} alt={post.author.name} width='30px' height='30px' className='align-middle rounded-full'/>
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>
                {post.author.name}
            </p>
        </div>
        <div className='font-medium text-gray-700 ml-2 text-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
        </div>
      </div>
    </div>
  )
}

export default PostCard
