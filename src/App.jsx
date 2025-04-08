import { Routes, Route } from 'react-router-dom';

import Navbar from './comp/Navbar/Navbar';

import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from './pages/CategoryPage';
import SearchResultsPage from './pages/SearchResultsPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </>
  )
}

export default App
