import React, { useState } from "react"
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
        <Post />
        <Users />
      </section>
    </>
  )
}

export default App
