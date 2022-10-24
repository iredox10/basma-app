import './App.css'
import Product from './pages/Product'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-product' element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App
