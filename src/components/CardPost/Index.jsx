import React, { useState } from 'react'
import Comments from '../Comments/Index'
import Img from '../../assets/Comment.svg'

const Index = ({ post }) => {
  const [modal, setModal] = useState(null)
  const [id, setId] = useState('')

  const getId = () => {
    setModal(true)
    setId(post.id)
  }
  return (
    <div className='card_post'>
      <b>Post</b>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button className='open-modal' onClick={getId}>
        <img src={Img} alt="logo of comment" />
        Comentários...
      </button>
      <div className='comment'>
        {
          modal && <Comments comment={post} ID={id} img={Img} close={setModal} />
        }
      </div>
    </div>
  )
}

export default Index
