import React from 'react'
import {getPosts, getPostDetails} from '../'

import {PostDetail, Categories, PostWidget, Author, Comments, CommentsForm} from '../../components'

const PostDetails = ({post}) => {
  return (
    <div className="container px-10 mb-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
                <PostDetail post={post}/>
                <Author  authro={post.author}/>
                <CommentsForm/>
                <Comments/>
            </div>
            <div className="col-span-1 lg:col-span-4">
                <div className="relative lg:sticky top-8">
                    <PostWidget/>
                    <Categories/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}){
    const post = (await getPostDetails(params.slug)) || [];
  
    return{
      props: {post}
    }
}

export async function getStaticPaths(){
    const posts = (await getPosts()) || [];
  
    return{
      paths: posts.map(({node: {slug}}) => ({params: {slug}})),
      fallback: false,
    }
}