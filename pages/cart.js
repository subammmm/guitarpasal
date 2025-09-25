import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, cartTotal, updateQuantity, removeItem, clearCart } = useCart()
  
  const shippingThreshold = 1000
  const shippingCost = cartTotal >= shippingThreshold ? 0 : 100
  const finalTotal = cartTotal + shippingCost
  
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return
    updateQuantity(id, newQuantity)
  }
  
  if (items.length === 0) {
    return (
      <Layout
        title="Shopping Cart"
        description="Your Guitar Pasal shopping cart"
        canonical="https://subammmm.github.io/guitarpasal/cart/"
      >
        <section className="section empty-cart">
          <div className="container">
            <motion.div 
              className="empty-cart-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="empty-cart-icon">
                <i className="fas fa-shopping-cart" aria-hidden="true"></i>
              </div>
              <h1>Your cart is empty</h1>
              <p>Looks like you haven't added any LED guitar picks to your cart yet.</p>
              <Link href="/shop" className="btn btn-primary">
                Continue Shopping
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    )
  }
  
  return (
    <Layout
      title="Shopping Cart"
      description="Review your Guitar Pasal LED guitar picks before checkout"
      canonical="https://subammmm.github.io/guitarpasal/cart/"
    >
      <section className="section cart-page">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Shopping Cart
          </motion.h1>
          
          <div className="cart-layout">
            {/* Cart Items */}
            <div className="cart-items-section">
              <div className="cart-table">
                <div className="cart-table-header">
                  <div className="col-product">Product</div>
                  <div className="col-price">Price</div>
                  <div className="col-quantity">Quantity</div>
                  <div className="col-total">Total</div>
                  <div className="col-actions">Remove</div>
                </div>
                
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="cart-table-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="col-product">
                      <div className="product-info">
                        <div className="product-image">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            objectFit="cover"
                          />
                        </div>
                        <div className="product-details">
                          <h3>{item.name}</h3>
                          <p className="product-color">Color: {item.color}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-price">
                      ₨{item.price}
                    </div>
                    
                    <div className="col-quantity">
                      <div className="quantity-controls">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="qty-btn"
                          aria-label="Decrease quantity"
                        >
                          <i className="fas fa-minus" aria-hidden="true"></i>
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                          className="qty-input"
                          min="1"
                        />
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="qty-btn"
                          aria-label="Increase quantity"
                        >
                          <i className="fas fa-plus" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                    
                    <div className="col-total">
                      ₨{item.price * item.quantity}
                    </div>
                    
                    <div className="col-actions">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="remove-btn"
                        aria-label="Remove item from cart"
                      >
                        <i className="fas fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="cart-actions">
                <Link href="/shop" className="btn btn-outline">
                  Continue Shopping
                </Link>
                <button onClick={clearCart} className="btn btn-secondary">
                  Clear Cart
                </button>
              </div>
            </div>
            
            {/* Cart Summary */}
            <motion.div 
              className="cart-summary"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="summary-card">
                <h2>Order Summary</h2>
                
                <div className="summary-row">
                  <span>Subtotal ({items.reduce((total, item) => total + item.quantity, 0)} items)</span>
                  <span>₨{cartTotal}</span>
                </div>
                
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : `₨${shippingCost}`}</span>
                </div>
                
                {cartTotal < shippingThreshold && (
                  <div className="shipping-notice">
                    <i className="fas fa-info-circle" aria-hidden="true"></i>
                    <p>Add ₨{shippingThreshold - cartTotal} more for free shipping!</p>
                  </div>
                )}
                
                <div className="summary-divider"></div>
                
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>₨{finalTotal}</span>
                </div>
                
                <div className="checkout-actions">
                  <Link href="/checkout" className="btn btn-primary btn-block">
                    Proceed to Checkout
                  </Link>
                </div>
                
                <div className="payment-methods">
                  <p>We Accept:</p>
                  <div className="payment-icons">
                    <div className="payment-icon">eSewa</div>
                    <div className="payment-icon">Khalti</div>
                    <div className="payment-icon">QR Pay</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}