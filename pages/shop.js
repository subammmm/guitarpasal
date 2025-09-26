import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { getAllProducts } from '../utils/products'

export default function Shop() {
  const [products] = useState(getAllProducts())
  const [selectedColor, setSelectedColor] = useState('all')
  
  // Filter products by color
  const filteredProducts = selectedColor === 'all' 
    ? products 
    : products.filter(product => product.color.toLowerCase() === selectedColor.toLowerCase())
  
  const features = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Bright Illumination',
      description: 'Ultra-bright LEDs ensure your pick is visible even in the darkest venues, helping you never miss a beat.'
    },
    {
      icon: 'fas fa-battery-full',
      title: 'Long Battery Life',
      description: 'Each LED pick provides 10+ hours of continuous illumination, perfect for extended performances.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Durable Construction',
      description: 'Made with high-quality materials designed to withstand regular use and maintain performance.'
    },
    {
      icon: 'fas fa-shipping-fast',
      title: 'Fast Delivery',
      description: 'Free shipping across Nepal. Quick and secure delivery to your doorstep.'
    }
  ]
  
  return (
    <Layout
      title="Shop LED Guitar Picks"
      description="Shop premium LED guitar picks from Guitar Pasal. White, Purple, and Green LED picks at ₨500 each. Free shipping across Nepal."
      canonical="https://subammmm.github.io/guitarpasal/shop/"
    >
      {/* Hero Section */}
      <section className="hero shop-hero">
        <div className="container hero-inner">
          <motion.div 
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>LED Guitar Picks</h1>
            <p className="tagline">Premium quality picks with LED illumination</p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section filter-section">
        <div className="container">
          <div className="filter-controls">
            <label htmlFor="color-filter" className="filter-label">
              Filter by Color:
            </label>
            <select
              id="color-filter"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="color-filter"
            >
              <option value="all">All Colors</option>
              <option value="white">White</option>
              <option value="purple">Purple</option>
              <option value="green">Green</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section products-section">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our LED Guitar Picks
          </motion.h2>
          
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section why-choose">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Guitar Pasal?
          </motion.h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="feature-icon">
                  <i className={feature.icon} aria-hidden="true"></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section specifications">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Product Specifications
          </motion.h2>
          
          <div className="specs-grid">
            <motion.div 
              className="spec-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Technical Details</h3>
              <ul>
                <li><strong>LED Type:</strong> High-brightness SMD LED</li>
                <li><strong>Battery Life:</strong> 10+ hours continuous use</li>
                <li><strong>Material:</strong> Durable ABS plastic</li>
                <li><strong>Thickness:</strong> Standard pick thickness (0.7mm)</li>
                <li><strong>Colors:</strong> White, Purple, Green</li>
                <li><strong>Weight:</strong> 2.5g (lightweight design)</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="spec-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>What's Included</h3>
              <ul>
                <li><i className="fas fa-check"></i> 1x LED Guitar Pick</li>
                <li><i className="fas fa-check"></i> Pre-installed battery</li>
                <li><i className="fas fa-check"></i> Activation instructions</li>
                <li><i className="fas fa-check"></i> Care guide</li>
                <li><i className="fas fa-check"></i> 1-year warranty</li>
                <li><i className="fas fa-check"></i> Free shipping in Nepal</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}