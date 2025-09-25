import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '../../components/Layout' 
import ProductCard from '../../components/ProductCard'
import { getProductByColor, getRelatedProducts } from '../../utils/products'
import { useCart } from '../../context/CartContext'

export default function ProductDetail({ product, relatedProducts }) {
  const router = useRouter()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  
  if (router.isFallback) {
    return (
      <Layout title="Loading...">
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
          <p>Loading product...</p>
        </div>
      </Layout>
    )
  }
  
  if (!product) {
    return (
      <Layout title="Product Not Found">
        <section className="section not-found">
          <div className="container">
            <h1>Product Not Found</h1>
            <p>The product you're looking for doesn't exist.</p>
            <Link href="/shop" className="btn btn-primary">
              Back to Shop
            </Link>
          </div>
        </section>
      </Layout>
    )
  }
  
  // Mock multiple images (in real app, products would have multiple photos)
  const productImages = [
    product.image,
    product.image, // Duplicate for demo
    product.image  // Duplicate for demo
  ]
  
  const handleAddToCart = async () => {
    setIsAdding(true)
    
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        color: product.color,
        image: product.image,
        description: product.description
      })
    }
    
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }
  
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }
  
  return (
    <Layout
      title={product.name}
      description={product.description}
      canonical={`https://subammmm.github.io/guitarpasal/products/${product.color?.toLowerCase()}/`}
    >
      {/* Breadcrumb */}
      <section className="breadcrumb">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li aria-current="page">{product.name}</li>
            </ol>
          </nav>
        </div>
      </section>
      
      {/* Product Detail */}
      <section className="section product-detail">
        <div className="container">
          <div className="product-layout">
            {/* Product Images */}
            <motion.div 
              className="product-images"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="main-image">
                <Image
                  src={productImages[selectedImage]}
                  width={600}
                  height={600}
                  alt={`${product.name} main image`}
                  className="product-main-image"
                  priority
                />
              </div>
              
              <div className="image-thumbnails">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                    aria-label={`View image ${index + 1}`}
                  >
                    <Image
                      src={image}
                      width={100}
                      height={100}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="thumbnail-image"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
            
            {/* Product Info */}
            <motion.div 
              className="product-info"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="product-header">
                <h1>{product.name}</h1>
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star" aria-hidden="true"></i>
                    ))}
                  </div>
                  <span className="rating-text">(50+ reviews)</span>
                </div>
              </div>
              
              <div className="product-price">
                <span className="price">₨{product.price}</span>
                <span className="price-note">Free shipping across Nepal</span>
              </div>
              
              <div className="product-description">
                <p>{product.description}</p>
              </div>
              
              <div className="product-features">
                <h3>Key Features:</h3>
                <ul>
                  {product.features?.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check" aria-hidden="true"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="product-actions">
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity:</label>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="qty-btn"
                      aria-label="Decrease quantity"
                    >
                      <i className="fas fa-minus" aria-hidden="true"></i>
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                      className="qty-input"
                      min="1"
                      max="10"
                    />
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="qty-btn"
                      aria-label="Increase quantity"
                    >
                      <i className="fas fa-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className={`btn btn-primary btn-add-to-cart ${isAdding ? 'loading' : ''}`}
                  disabled={isAdding}
                >
                  {isAdding ? (
                    <>
                      <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
                      Adding to Cart...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-cart-plus" aria-hidden="true"></i>
                      Add to Cart - ₨{product.price * quantity}
                    </>
                  )}
                </button>
              </div>
              
              <div className="product-guarantees">
                <div className="guarantee-item">
                  <i className="fas fa-shield-alt" aria-hidden="true"></i>
                  <span>1 Year Warranty</span>
                </div>
                <div className="guarantee-item">
                  <i className="fas fa-undo" aria-hidden="true"></i>
                  <span>30-Day Returns</span>
                </div>
                <div className="guarantee-item">
                  <i className="fas fa-shipping-fast" aria-hidden="true"></i>
                  <span>Free Shipping</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Product Tabs */}
      <section className="section product-tabs">
        <div className="container">
          <div className="tabs-container">
            <div className="tab-content active">
              <h2>Product Details</h2>
              <div className="details-grid">
                <div className="detail-section">
                  <h3>Specifications</h3>
                  <table className="specs-table">
                    <tbody>
                      <tr>
                        <td>LED Type</td>
                        <td>High-brightness SMD LED</td>
                      </tr>
                      <tr>
                        <td>Battery Life</td>
                        <td>10+ hours continuous use</td>
                      </tr>
                      <tr>
                        <td>Material</td>
                        <td>Durable ABS plastic</td>
                      </tr>
                      <tr>
                        <td>Thickness</td>
                        <td>Standard pick thickness (0.7mm)</td>
                      </tr>
                      <tr>
                        <td>Color</td>
                        <td>{product.color} LED</td>
                      </tr>
                      <tr>
                        <td>Weight</td>
                        <td>2.5g (lightweight design)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="detail-section">
                  <h3>Care Instructions</h3>
                  <ul className="care-list">
                    <li>Store in a dry place when not in use</li>
                    <li>Clean gently with a soft, damp cloth</li>
                    <li>Avoid exposing to extreme temperatures</li>
                    <li>Replace battery when LED dims (user replaceable)</li>
                    <li>Handle with care to maintain LED functionality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TikTok Embed for this product */}
      <section className="section product-tiktok">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            See the {product.color} LED Pick in Action
          </motion.h2>
          
          <div className="tiktok-embed-single">
            <div className="tiktok-placeholder">
              <i className="fab fa-tiktok"></i>
              <p>{product.color} LED Pick Demo</p>
              <a 
                href="https://www.tiktok.com/@guitarpasal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-small"
              >
                Watch on TikTok
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section related-products"> 
          <div className="container">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              You Might Also Like
            </motion.h2>
            
            <div className="products-grid">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard product={relatedProduct} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}

// Generate static paths for all product colors
export async function getStaticPaths() {
  const paths = [
    { params: { color: 'white' } },
    { params: { color: 'purple' } },
    { params: { color: 'green' } }
  ]
  
  return {
    paths,
    fallback: true
  }
}

// Get static props for each product
export async function getStaticProps({ params }) {
  const product = getProductByColor(params.color)
  
  if (!product) {
    return {
      notFound: true
    }
  }
  
  const relatedProducts = getRelatedProducts(product.id)
  
  return {
    props: {
      product,
      relatedProducts
    }
  }
}