

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import App from './App';
import { CartProvider } from './context/CartContext';
import { AuthContextProvider } from './context/authContext';

import './index.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <CartProvider> 
                    <App />     
       </CartProvider>
    </AuthContextProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
