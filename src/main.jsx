import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import ProductProvider, { ProductContext } from './context/ProductContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <CartProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </CartProvider>
  </ProductProvider>
)
