import React, { useState } from 'react'
import UserItems from '../UsersItems/Index'
import USER from '../../assets/user.png'

const Index = ({user}) => {
  const [modal, setModal] = useState(null)

  return (
    <div className='user_card'>
     <button className='open-modal' onClick={() =>  setModal(true)}>
     <h1>
        <img src={USER} alt="logo of users " />
        {user.name}
      </h1>
     </button>
     <div className='user_card-modal'>
     {
      modal && <UserItems user={user} close={setModal} img={USER}  />
     }
     </div>
    </div>
  )
}

export default Index
