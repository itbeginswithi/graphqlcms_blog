import React from 'react'

const Author = ({author}) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 bg-black relative rounded-lg bg-opacity-20">
        <div className="absolute left-0 right-2 -top-14">
            <img
                alt={author.name}
                height="100px"
                width="100px"
                className="align-middle rounded-full"
                draggable={false}
                src={author.photo.url}
            />

            <h3 className='text-white my-4 font-bold text-xl'>{author.name}</h3>
            <p>{author.}</p>
        </div>
    </div>
  )
}

export default Author