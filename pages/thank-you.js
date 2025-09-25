import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { useCart } from '../context/CartContext'

export default function ThankYou() {
  const router = useRouter()
  const { clearCart } = useCart()
  const [orderData, setOrderData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const { status, order, method } = router.query
    
    if (status === 'success' && order) {
      // Clear the cart on successful order
      clearCart()
      
      // Load order data from localStorage
      const savedOrder = localStorage.getItem(`order-${order}`)
      if (savedOrder) {
        try {
          const parsedOrder = JSON.parse(savedOrder)
          parsedOrder.paymentMethod = method || parsedOrder.paymentMethod
          parsedOrder.status = 'completed'
          setOrderData(parsedOrder)
          
          // Update order status in localStorage
          localStorage.setItem(`order-${order}`, JSON.stringify(parsedOrder))
        } catch (error) {
          console.error('Error loading order data:', error)
        }
      }
    } else if (status === 'failed') {
      // Handle failed payment
      setOrderData({ status: 'failed', id: order })
    }
    
    setLoading(false)
  }, [router.query, clearCart])
  
  if (loading) {
    return (
      <Layout title="Processing Order">
        <section className="section">
          <div className="container">
            <div className="loading-spinner">
              <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
              <p>Processing your order...</p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
  
  if (!orderData || orderData.status === 'failed') {
    return (
      <Layout
        title="Order Failed"
        description="Your Guitar Pasal order could not be processed"
      >
        <section className="section order-failed">
          <div className="container">
            <motion.div 
              className="order-status-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="status-icon failed">
                <i className="fas fa-times-circle" aria-hidden="true"></i>
              </div>
              <h1>Order Failed</h1>
              <p>We're sorry, but there was an issue processing your payment. Please try again.</p>
              
              <div className="failed-actions">
                <Link href="/cart" className="btn btn-primary">
                  Return to Cart
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    )
  }
  
  const getPaymentMethodDisplay = (method) => {
    switch (method) {
      case 'esewa':
        return 'eSewa'
      case 'khalti':
        return 'Khalti'
      case 'qr':
        return 'QR Payment'
      default:
        return 'Online Payment'
    }
  }
  
  return (
    <Layout
      title="Order Confirmed"
      description="Thank you for your Guitar Pasal order! Your LED guitar picks will be shipped soon."
      canonical="https://subammmm.github.io/guitarpasal/thank-you/"
    >
      <section className="section order-success">
        <div className="container">
          <motion.div 
            className="order-status-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="status-icon success">
              <i className="fas fa-check-circle" aria-hidden="true"></i>
            </div>
            <h1>Order Confirmed!</h1>
            <p className="success-message">
              Thank you for your order! We've received your payment and will process your LED guitar picks shortly.
            </p>
            
            <div className="order-details-card">
              <h2>Order Details</h2>
              
              <div className="order-info">
                <div className="info-row">
                  <span className="label">Order ID:</span>
                  <span className="value">{orderData.id}</span>
                </div>
                <div className="info-row">
                  <span className="label">Payment Method:</span>
                  <span className="value">{getPaymentMethodDisplay(orderData.paymentMethod)}</span>
                </div>
                <div className="info-row">
                  <span className="label">Total Amount:</span>
                  <span className="value">₨{orderData.total}</span>
                </div>
                <div className="info-row">
                  <span className="label">Order Date:</span>
                  <span className="value">
                    {new Date(orderData.timestamp).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
              
              <div className="ordered-items">
                <h3>Items Ordered</h3>
                {orderData.items.map((item) => (
                  <div key={item.id} className="ordered-item">
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>Color: {item.color}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <div className="item-price">
                      ₨{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="shipping-info">
                <h3>Shipping Address</h3>
                <p>
                  {orderData.customer.firstName} {orderData.customer.lastName}<br />
                  {orderData.customer.address}<br />
                  {orderData.customer.city}, {orderData.customer.district}<br />
                  {orderData.customer.province}
                  {orderData.customer.postalCode && `, ${orderData.customer.postalCode}`}
                </p>
              </div>
            </div>
            
            <div className="next-steps">
              <h2>What's Next?</h2>
              <div className="steps-grid">
                <motion.div 
                  className="step-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="step-icon">
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                  </div>
                  <h3>Confirmation Email</h3>
                  <p>You'll receive an order confirmation email at {orderData.customer.email} shortly.</p>
                </motion.div>
                
                <motion.div 
                  className="step-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="step-icon">
                    <i className="fas fa-box" aria-hidden="true"></i>
                  </div>
                  <h3>Processing</h3>
                  <p>Your LED guitar picks will be carefully packaged within 1-2 business days.</p>
                </motion.div>
                
                <motion.div 
                  className="step-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="step-icon">
                    <i className="fas fa-shipping-fast" aria-hidden="true"></i>
                  </div>
                  <h3>Shipping</h3>
                  <p>Free delivery across Nepal. Expected delivery: 3-5 business days.</p>
                </motion.div>
              </div>
            </div>
            
            <div className="success-actions">
              <Link href="/shop" className="btn btn-primary">
                Continue Shopping
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
            
            <div className="social-share">
              <p>Share your Guitar Pasal experience:</p>
              <div className="social-buttons">
                <a 
                  href="https://www.tiktok.com/@guitarpasal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn tiktok"
                >
                  <i className="fab fa-tiktok" aria-hidden="true"></i>
                  Follow us on TikTok
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}