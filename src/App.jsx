import React from "react"
import { useFetch } from "./hooks/useFetch"

import Post from "./pages/PostBlog/Post"
import Users from "./pages/Users/Users"
import Img from './assets/Comment.svg'

function App() {

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
        <div className="post-comment-item">
          <b>Post</b>
          <h1>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>
          <p> quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto</p>
          <button className="open-modal">
            <img src={Img} alt="" />
            Comentários...
          </button>
        </div>
        <Post />
        <Users />
      </section>
    </>
  )
}

export default App
