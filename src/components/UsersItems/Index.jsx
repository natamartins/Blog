import React from 'react'

const Index = ({ user, close, img }) => {

  return (
    <div className='user_modal' >
      <button id='cy_user-click-close' className='close-modal-user' onClick={() => close(!true)}>X</button>
      <p>Email: {user.email}</p>
      <p>Número: {user.phone}</p>
      <a href={user.website}>website</a>
      <p>Edereço:</p>
      <ul>
        <li>Cidade: {user.address.city}</li>
        <li>Rua: {user.address.street}</li>
        <li>Suite: {user.address.suite}</li>
        <li>Código postal: {user.address.zipcode}</li>
      </ul>
      <p>Empresa:</p>
      <ul>
        <li>Nome: {user.company.name}</li>
        <li>Bs: {user.company.bs}</li>
        <li>Frase de efeito: {user.company.catchPhrase}</li>
      </ul>
    </div>
  )
}

export default Index
