import React, { useState } from "react"
import { useFetch } from "./hooks/useFetch"

import Post from "./pages/PostBlog/Post"
import Users from "./pages/Users/Users"
import CardMock from './components/CardMock/Index'
import Img from './assets/Comment.svg'

function App() {
  const [modal, setModal] = useState(null)

  return (
    <>
      <header>
        <nav className="nav" id='post'>
          <a href="/">Blog</a>
        </nav>
        <div className="nav_mobile">
          <a href="#post">Posts</a>
          <a href="#user">Users</a>
        </div>
      </header>
      <section className="app">
        <div className="post_comment-item">
          <b>Post</b>
          <h1>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>
          <p> quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto</p>
          <button className="open-modal" onClick={() => setModal(true)}>
            <img src={Img} alt="" />
            Comentários...
          </button>
          <div className="comment" >
            {
              modal && <CardMock close={setModal} />
            }
          </div>
        </div>
        <Post />
        <Users />
      </section>
    </>
  )
}

export default App
