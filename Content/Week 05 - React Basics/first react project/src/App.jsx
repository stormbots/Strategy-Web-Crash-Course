import './App.css'
import {Home, Menu, Navbar, Header, Footer, Admin} from "./components"
import{BrowserRouter, Routes, Route} from "react-router"
import { useState } from 'react'

function App() {

      let pizzaList = [
        {
            id:"1", 
            name: "Veggie", 
            specs:{
                price:12, 
                Size:"medium", 
                toppings: ["olives", "pinapple", "bell pepper", "onions"]
            }
        },
        {
            id:"2", 
            name: "Meat", 
            specs:{
                price:13, 
                Size:"medium", 
                toppings:["pepperoni","ham","bacon"]
            }
        },
    ]



    const [pizzas, setPizzas] = useState(pizzaList)

  return (
    <BrowserRouter>

    <div className="layout">

      <Header></Header>

      <Navbar></Navbar>

      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu pizzas={pizzas}/>}/>
          <Route path="/admin" element={<Admin pizzas={pizzas} setPizzas={setPizzas}/>}/>
          <Route path="/*" element={<h1>error 404 :(</h1>}/>
        </Routes>
      </main>


        <Footer></Footer>

    </div>

    </BrowserRouter>
  )
}

export default App
