import React from 'react'

const Author = ({author}) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 bg-black relative rounded-lg bg-opacity-20">
        <div className="absolute left-0 right-2 -top-14">
            <img
                alt={author.name}
                height="100px"
                width="100px"
            />
        </div>
    </div>
  )
}

export default Author