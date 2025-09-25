import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { useCart } from '../context/CartContext'
import { QRCodeCanvas as QRCode } from 'qrcode.react'

export default function Checkout() {
  const router = useRouter()
  const { items, cartTotal, clearCart } = useCart()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    province: '',
    postalCode: ''
  })
  const [paymentMethod, setPaymentMethod] = useState('esewa')
  const [isProcessing, setIsProcessing] = useState(false)
  const [showQR, setShowQR] = useState(false)
  
  const shippingCost = cartTotal >= 1000 ? 0 : 100
  const finalTotal = cartTotal + shippingCost
  
  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      router.push('/cart')
    }
  }, [items, router])
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const validateForm = () => {
    const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'district', 'province']
    return required.every(field => formData[field].trim() !== '')
  }
  
  const generateOrderId = () => {
    return 'GP' + Date.now() + Math.random().toString(36).substr(2, 5)
  }
  
  const handleESewaPayment = async (orderId, amount) => {
    // eSewa payment integration
    const esewaForm = document.createElement('form')
    esewaForm.method = 'POST'
    esewaForm.action = 'https://uat.esewa.com.np/epay/main' // Test URL
    
    const params = {
      amt: amount,
      pdc: 0,
      psc: 0,
      txAmt: 0,
      tAmt: amount,
      pid: orderId,
      scd: 'EPAYTEST', // Test merchant code
      su: `${window.location.origin}/thank-you?status=success&order=${orderId}`,
      fu: `${window.location.origin}/checkout?status=failed&order=${orderId}`
    }
    
    Object.keys(params).forEach(key => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = params[key]
      esewaForm.appendChild(input)
    })
    
    document.body.appendChild(esewaForm)
    esewaForm.submit()
  }
  
  const handleKhaltiPayment = async (orderId, amount) => {
    // Khalti payment integration (mock for now since we don't have real Khalti SDK)
    try {
      // In a real implementation, you would use:
      // import KhaltiCheckout from 'khalti-checkout-web'
      
      // Mock Khalti popup
      const confirmed = window.confirm(
        `Khalti Payment\n\nAmount: ₨${amount}\nOrder ID: ${orderId}\n\nClick OK to simulate successful payment, Cancel to simulate failure.`
      )
      
      if (confirmed) {
        // Simulate successful payment
        setTimeout(() => {
          router.push(`/thank-you?status=success&order=${orderId}&method=khalti`)
        }, 1000)
      } else {
        throw new Error('Payment cancelled by user')
      }
    } catch (error) {
      alert('Khalti payment failed: ' + error.message)
      setIsProcessing(false)
    }
  }
  
  const handleQRPayment = (orderId, amount) => {
    setShowQR(true)
    
    // In a real implementation, you would show QR for specific time
    setTimeout(() => {
      const confirmed = window.confirm('Have you completed the QR payment? Click OK if payment is done.')
      if (confirmed) {
        router.push(`/thank-you?status=success&order=${orderId}&method=qr`)
      } else {
        setShowQR(false)
        setIsProcessing(false)
      }
    }, 5000)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      alert('Please fill in all required fields.')
      return
    }
    
    if (items.length === 0) {
      alert('Your cart is empty.')
      return
    }
    
    setIsProcessing(true)
    const orderId = generateOrderId()
    
    try {
      // Save order data to localStorage (in a real app, this would go to a backend)
      const orderData = {
        id: orderId,
        items,
        customer: formData,
        paymentMethod,
        subtotal: cartTotal,
        shipping: shippingCost,
        total: finalTotal,
        timestamp: new Date().toISOString(),
        status: 'pending'
      }
      
      localStorage.setItem(`order-${orderId}`, JSON.stringify(orderData))
      
      // Process payment based on selected method
      switch (paymentMethod) {
        case 'esewa':
          await handleESewaPayment(orderId, finalTotal)
          break
        case 'khalti':
          await handleKhaltiPayment(orderId, finalTotal)
          break
        case 'qr':
          handleQRPayment(orderId, finalTotal)
          break
        default:
          throw new Error('Invalid payment method')
      }
      
    } catch (error) {
      console.error('Checkout error:', error)
      alert('There was an error processing your order. Please try again.')
      setIsProcessing(false)
    }
  }
  
  if (items.length === 0) {
    return null // Will redirect in useEffect
  }
  
  return (
    <Layout
      title="Checkout"
      description="Complete your Guitar Pasal order with secure payment options"
      canonical="https://subammmm.github.io/guitarpasal/checkout/"
    >
      <section className="section checkout-page">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Checkout
          </motion.h1>
          
          <div className="checkout-layout">
            {/* Checkout Form */}
            <div className="checkout-form-section">
              <form onSubmit={handleSubmit} className="checkout-form">
                {/* Customer Information */}
                <motion.div 
                  className="form-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h2>Shipping Information</h2>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="address">Street Address *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="city">City *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="district">District *</label>
                      <input
                        type="text"
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="province">Province *</label>
                      <select
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Province</option>
                        <option value="Province 1">Province 1</option>
                        <option value="Madhesh Pradesh">Madhesh Pradesh</option>
                        <option value="Bagmati Pradesh">Bagmati Pradesh</option>
                        <option value="Gandaki Pradesh">Gandaki Pradesh</option>
                        <option value="Lumbini Pradesh">Lumbini Pradesh</option>
                        <option value="Karnali Pradesh">Karnali Pradesh</option>
                        <option value="Sudurpashchim Pradesh">Sudurpashchim Pradesh</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="postalCode">Postal Code</label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Payment Method */}
                <motion.div 
                  className="form-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2>Payment Method</h2>
                  
                  <div className="payment-options">
                    <label className="payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="esewa"
                        checked={paymentMethod === 'esewa'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <div className="payment-option-content">
                        <div className="payment-logo">eSewa</div>
                        <p>Pay with eSewa digital wallet</p>
                      </div>
                    </label>
                    
                    <label className="payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="khalti"
                        checked={paymentMethod === 'khalti'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <div className="payment-option-content">
                        <div className="payment-logo">Khalti</div>
                        <p>Pay with Khalti digital wallet</p>
                      </div>
                    </label>
                    
                    <label className="payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="qr"
                        checked={paymentMethod === 'qr'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <div className="payment-option-content">
                        <div className="payment-logo">QR Pay</div>
                        <p>Pay via bank app QR code</p>
                      </div>
                    </label>
                  </div>
                </motion.div>
                
                {/* QR Code Display */}
                {showQR && paymentMethod === 'qr' && (
                  <motion.div 
                    className="qr-section"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>Scan QR Code to Pay</h3>
                    <div className="qr-code-container">
                      <QRCode
                        value={`PAY TO: Guitar Pasal Nepal | AMOUNT: ${finalTotal} NPR | ORDER: ${generateOrderId()}`}
                        size={256}
                        level="H"
                        includeMargin={true}
                      />
                    </div>
                    <p>Scan this QR code with your bank's mobile app to complete payment</p>
                  </motion.div>
                )}
                
                <div className="form-actions">
                  <button
                    type="submit"
                    className={`btn btn-primary btn-block ${isProcessing ? 'loading' : ''}`}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
                        Processing...
                      </>
                    ) : (
                      <>
                        Place Order - ₨{finalTotal}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Order Summary */}
            <motion.div 
              className="order-summary"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="summary-card">
                <h2>Order Summary</h2>
                
                <div className="order-items">
                  {items.map((item) => (
                    <div key={item.id} className="order-item">
                      <div className="item-info">
                        <h4>{item.name}</h4>
                        <p>Qty: {item.quantity}</p>
                      </div>
                      <div className="item-price">
                        ₨{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₨{cartTotal}</span>
                </div>
                
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : `₨${shippingCost}`}</span>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>₨{finalTotal}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}