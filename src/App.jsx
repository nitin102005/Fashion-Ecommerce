import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import './index.css';
import ProductDetails from './components/ProductDetails'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
