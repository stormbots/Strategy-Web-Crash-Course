import { useState } from 'react'
import './App.css'
import {Home, Menu, Navbar} from "./components"
import{BrowserRouter, Routes, Route} from "react-router"

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/*" element={<h1>error 404 :(</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
