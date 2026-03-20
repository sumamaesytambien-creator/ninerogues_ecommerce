import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice.jsx'

const Products = () => {
  const dispatch = useDispatch()
  const { products, status } = useSelector(state => state.cart)

  if (status === 'loading') return <div className="text-center py-8">Cargando...</div>

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            {product.image && (
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-green-600">${product.price}</span>
              </div>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Añadir al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products