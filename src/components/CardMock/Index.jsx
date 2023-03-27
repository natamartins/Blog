import React from 'react'
import { useFetch } from '../../hooks/useFetch'


const comment = [
  {
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    comment: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'
  },
  {
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    comment: 'est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et'
  },
  {
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    comment: 'quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione'
  },
  {
    name: 'alias odio sit',
    email: 'Lew@alysha.tv',
    comment: 'non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati'
  },
  {
    name: 'vero eaque aliquid doloribus et culpa',
    email: 'Hayden@althea.biz',
    comment: 'harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et'
  },

]


const Index = ({ close }) => {

  return (
    <>
      <div className='comment_items comment_modal'>
        <button id='cy_post-click-close' className='btn-mock' onClick={() => close(!true)}>X</button>
        <h1>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>
        <p> quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto</p>
        <p>Comentários</p>
        {
          comment.map(comments =>
          (
            <>
              <h1>{comments.name}</h1>
              <p>{comments.email}</p>
              <p>{comments.comment}</p>
            </>
          )
          )
        }
      </div>
    </>
  )
}

export default Index
