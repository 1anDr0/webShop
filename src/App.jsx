import { Routes, Route } from 'react-router-dom';

import Navbar from './comp/Navbar/Navbar';

import Home from './pages/Home';
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from './pages/CategoryPage';
import SearchResultsPage from './pages/SearchResultsPage';
import CartPage from './pages/CartPage';
import Footer from './comp/Footer';
import Login from './pages/Login';
import RegForm from './pages/RegForm';



const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/RegForm" element={<RegForm/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
