import React from 'react'
import { useFetch } from '../../hooks/useFetch'


const Index = ({ comment, ID, close }) => {
  const { data } = useFetch(`https://jsonplaceholder.typicode.com/posts/${ID}/comments`)

  return (
    <>
      <div className='comment_items comment_modal'>
        <button id='cy_post-click-close' className='close-modal' onClick={() => close(!true)}>X</button>
        <h1>{comment.title}</h1>
        <p>{comment.body}</p>
        <p>Comentários</p>
        {
          data.map(itmes => (
            <div key={itmes.id}>
              <h3>{itmes.name}</h3>
              <h4>{itmes.email}</h4>
              <p>{itmes.body}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Index
