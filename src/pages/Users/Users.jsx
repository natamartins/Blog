import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import CardUser from '../../components/CardUsers/Index'
const Users = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <div id='user' className='user'>
      <p>User</p>
      {
        data.map(user => (
          <CardUser user={user} key={user.id} />
        ))
      }
    </div>
  )
}

export default Users
