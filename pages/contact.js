import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // In a real application, you would submit to a backend API or service like Formspree
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Reset form and show success message
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(true)
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <Layout
      title="Contact Us"
      description="Get in touch with Guitar Pasal. Contact us for orders, support, or inquiries about our LED guitar picks."
      canonical="https://subammmm.github.io/guitarpasal/contact/"
    >
      {/* Hero Section */}
      <section className="hero contact-hero">
        <div className="container hero-inner">
          <motion.div 
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact Us</h1>
            <p className="tagline">We'd love to hear from you</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-content">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-card">
                <h2>Send us a Message</h2>
                <p>Have a question about our LED guitar picks? Need help with an order? We're here to help!</p>
                
                {submitted && (
                  <motion.div 
                    className="success-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fas fa-check-circle" aria-hidden="true"></i>
                    <p>Thank you for your message! We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="product">Product Question</option>
                      <option value="shipping">Shipping & Delivery</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="media">Media & Press</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      required
                      disabled={isSubmitting}
                      placeholder="Please tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane" aria-hidden="true"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="contact-info">
                <h2>Get in Touch</h2>
                
                <div className="contact-methods">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="contact-details">
                      <h3>Email</h3>
                      <p>info@guitarpasal.com</p>
                      <p className="contact-note">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className="contact-details">
                      <h3>Phone</h3>
                      <p>+977-1-4567890</p>
                      <p className="contact-note">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                    </div>
                    <div className="contact-details">
                      <h3>Address</h3>
                      <p>Thamel, Kathmandu<br />Nepal</p>
                      <p className="contact-note">Visit our workshop</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fas fa-clock" aria-hidden="true"></i>
                    </div>
                    <div className="contact-details">
                      <h3>Business Hours</h3>
                      <p>
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fab fa-tiktok" aria-hidden="true"></i>
                    </div>
                    <div className="contact-details">
                      <h3>Follow Us</h3>
                      <p>Stay updated with our latest products and music tips on TikTok</p>
                      <a 
                        href="https://www.tiktok.com/@guitarpasal" 
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @guitarpasal
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Find Us
          </motion.h2>
          
          <motion.div 
            className="map-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789!2d85.31234567890123!3d27.712345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190123456789%3A0x123456789abcdef0!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1609459200000!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Guitar Pasal Location - Thamel, Kathmandu, Nepal"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="faq-grid">
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3>How long do the LED batteries last?</h3>
              <p>Our LED guitar picks provide 10+ hours of continuous illumination. The batteries are user-replaceable when they eventually run out.</p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Do you ship internationally?</h3>
              <p>Currently, we offer free shipping across Nepal. We're working on international shipping options and will update our customers when available.</p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3>What payment methods do you accept?</h3>
              <p>We accept eSewa, Khalti, and QR payments through major Nepali banks. All payments are secure and processed instantly.</p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>Do you offer bulk discounts?</h3>
              <p>Yes! We offer special pricing for music schools, bands, and retailers. Contact us with your requirements for a custom quote.</p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3>What's your return policy?</h3>
              <p>We offer a 30-day return policy for unused LED guitar picks. If you're not satisfied, we'll provide a full refund or exchange.</p>
            </motion.div>
            
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3>How do I activate the LED?</h3>
              <p>Each LED guitar pick comes with simple activation instructions. Usually, it involves a small switch or pressure activation. Full care guide included.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}