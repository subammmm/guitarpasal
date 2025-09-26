import { useCart } from '../context/CartContext'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function CartSidebar({ isOpen, onClose }) {
  const { items, cartTotal, updateQuantity, removeItem, clearCart } = useCart()
  
  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, parseInt(newQuantity))
  }
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Cart Sidebar */}
          <motion.div
            className="cart-sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="cart-content">
              <div className="cart-header">
                <h3>Shopping Cart</h3>
                <button onClick={onClose} className="close-btn" aria-label="Close cart">
                  <i className="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>
              
              <div className="cart-items">
                {items.length === 0 ? (
                  <p className="empty-cart">Your cart is empty</p>
                ) : (
                  <>
                    {items.map((item) => (
                      <div key={item.id} className="cart-item">
                        <div className="item-image">
                          <Image
                            src={item.image || `/images/${item.color?.toLowerCase()}.jpg`}
                            alt={item.name}
                            width={60}
                            height={60}
                            objectFit="cover"
                          />
                        </div>
                        <div className="item-details">
                          <h4>{item.name}</h4>
                          <p className="item-price">₨{item.price}</p>
                          <div className="quantity-controls">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="qty-btn"
                              aria-label="Decrease quantity"
                            >
                              <i className="fas fa-minus" aria-hidden="true"></i>
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="qty-btn"
                              aria-label="Increase quantity"
                            >
                              <i className="fas fa-plus" aria-hidden="true"></i>
                            </button>
                          </div>
                        </div>
                        <div className="item-actions">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="remove-btn"
                            aria-label="Remove item"
                          >
                            <i className="fas fa-trash" aria-hidden="true"></i>
                          </button>
                          <p className="item-total">₨{item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              
              {items.length > 0 && (
                <>
                  <div className="cart-total">
                    <strong>Total: ₨{cartTotal}</strong>
                  </div>
                  <div className="cart-actions">
                    <Link href="/checkout" className="btn checkout-btn" onClick={onClose}>
                      Checkout
                    </Link>
                    <button onClick={clearCart} className="btn btn-secondary">
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}