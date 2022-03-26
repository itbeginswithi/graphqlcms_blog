import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts } from '../services';

const PostWidget = () => {
  const [relatedPosts, setRelatedPosts] = useState([])
  
  useEffect(() => {
    if(slug){
        getSimilarPosts(category, slug)
            .then(res => setRelatedPosts(res))
            .catch(err => console.err)
    }
  }, [input])

  return (
    <div>PostWidget</div>
  )
}

export default PostWidget