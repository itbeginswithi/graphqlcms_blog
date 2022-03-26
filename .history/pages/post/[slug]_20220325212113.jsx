import React from 'react'
import {getPosts, getPostDetails} from '../'

import {PostDetail, Categories, PostWidget, Author, Comments, CommentsForm} from '../../components'

const PostDetails = () => {
  return (
    <div className="container px-10 mb-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
                <PostDetails/>
                <Author/>
                <CommentsForm/>
                <CommentsForm/>
            </div>
            <div className="col-span-1 lg:col-span-4">
                <div className="">

                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails