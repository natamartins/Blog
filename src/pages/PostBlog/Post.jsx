import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import CardPost from '../../components/CardPost/Index'

const Post = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/posts")

  return (
    <div>
      {
        data.map(item => (
          <CardPost post={item} key={item.id} />
        ))
      }
    </div>
  )
}

export default Post
