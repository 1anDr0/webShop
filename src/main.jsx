import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import App from './App'
// import { CartProvider } from '/context/CartProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       {/* <CartProvider>  */}
                    <App />     
      {/* </CartProvider> */}
    </BrowserRouter>
  </StrictMode>,
)
