import { Routes, Route } from 'react-router-dom';

import Navbar from './comp/Navbar/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home />} />

      </Routes>
    </>
  )
}

export default App
