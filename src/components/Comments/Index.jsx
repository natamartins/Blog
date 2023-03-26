import React from 'react'
import { useFetch } from '../../hooks/useFetch'


const Index = ({comment, ID, img, close}) => {
  const { data } = useFetch(`https://jsonplaceholder.typicode.com/posts/${ID}/comments`)

  return (
    <>
         <div className='comment-items comment-modal'>
          <button className='close-modal' onClick={() => close(!true)}>X</button>
         <h1>{comment.title}</h1>
         <p>{comment.body}</p>
         <p>Comentários</p>
         {
          data.map(itmes => (
            <>
             <div>
              <h3><span></span>{itmes.name}</h3>
              <h4>{itmes.email}</h4>
              <p>{itmes.body}</p>
             </div>
            </>
          ))
         }
         </div>
    </>
  )
}

export default Index
