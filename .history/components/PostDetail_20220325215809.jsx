import React from 'react'

const PostDetail = ({post}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
            <img src={post.featuredimage.url} alt={post.title} className="object-top h-full w-full rounded-t-lg" />
        </div>
        <div className='px-4 lg:px-0'>
            <div className='flex items-center mb-8 w-full'>
                {/* <img src={} */}
            </div>
        </div>
    </div>
  )
}

export default PostDetail