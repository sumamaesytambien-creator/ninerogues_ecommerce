import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './features/cart/cartSlice.jsx'
import Products from './components/Products.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          {status === 'loading' ? (
            <div className="text-center text-xl py-12">🔄 Cargando productos...</div>
          ) : (
            <Routes>
              <Route path="/" element={<Products />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  )
}

export default App