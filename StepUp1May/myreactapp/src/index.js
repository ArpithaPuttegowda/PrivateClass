import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import About from './AboutUs'

function App() {
  return (
    <BrowserRouter>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route element={<h1>Home Content</h1>} path="home" />
        <Route element={<About />} path="about" />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))