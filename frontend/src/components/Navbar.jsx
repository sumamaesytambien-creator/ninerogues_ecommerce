import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">🛒 Ninerogues</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <ShoppingCart size={24} className="text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar