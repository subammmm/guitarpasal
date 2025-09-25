import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { getFeaturedProducts } from '../utils/products'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const products = getFeaturedProducts()
  
  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [products.length])
  
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Ramesh K.",
      rating: 5,
      text: "Amazing LED picks! Perfect for my band's night performances. Battery lasts the whole gig!"
    },
    {
      id: 2,
      name: "Sita M.",
      rating: 5,
      text: "High quality and great visibility. My guitar teacher was impressed with the LED feature."
    },
    {
      id: 3,
      name: "Bikash S.", 
      rating: 5,
      text: "Fast delivery and excellent product. The white LED is super bright and looks professional."
    }
  ]
  
  return (
    <Layout
      title="Home"
      description="Guitar Pasal – Premium LED Guitar Picks from Nepal. Shop high-quality white, purple, and green LED guitar picks. ₨500 each with eSewa, Khalti, and QR payments."
      canonical="https://subammmm.github.io/guitarpasal/"
    >
      {/* Hero Section with Carousel */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Illuminate Your Music
            </motion.h1>
            <motion.p 
              className="tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Premium LED guitar picks crafted in Nepal
            </motion.p>
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/shop" className="btn btn-primary">
                Shop Now
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </motion.div>
          </div>
          
          {/* Hero Image Carousel */}
          <div className="hero-carousel">
            <div className="carousel-container">
              {products.map((product, index) => (
                <motion.figure
                  key={product.id}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={product.image}
                    width={600}
                    height={600}
                    alt={`${product.name} hero image`}
                    priority={index === 0}
                    className="hero-image"
                  />
                </motion.figure>
              ))}
            </div>
            
            {/* Carousel indicators */}
            <div className="carousel-indicators">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section featured-products">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Products
          </motion.h2>
          <div className="products-grid">
            {products.map((product, index) => (
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
        </div>
      </section>

      {/* TikTok Section */}
      <section className="section tiktok-showcase">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            See Our Picks in Action
          </motion.h2>
          <p className="section-subtitle">Follow us on TikTok for guitar tips and LED pick demos</p>
          
          <div className="tiktok-embeds">
            {/* TikTok embed placeholders - replace with real TikTok videos */}
            <div className="tiktok-embed">
              <div className="tiktok-placeholder">
                <i className="fab fa-tiktok"></i>
                <p>LED Pick Demo #1</p>
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
            <div className="tiktok-embed">
              <div className="tiktok-placeholder">
                <i className="fab fa-tiktok"></i>
                <p>Guitar Tutorial #1</p>
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
            <div className="tiktok-embed">
              <div className="tiktok-placeholder">
                <i className="fab fa-tiktok"></i>
                <p>Performance Tips</p>
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
        </div>
      </section>

      {/* About Snippet */}
      <section className="section about-snippet">
        <div className="container">
          <div className="content-grid">
            <motion.div 
              className="content-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Crafted in Nepal</h2>
              <p>Our LED guitar picks are carefully crafted in Nepal with precision engineering and high-quality materials. Each pick features bright LED illumination to help you perform in any lighting condition.</p>
              <Link href="/about" className="btn btn-outline">
                Learn Our Story
              </Link>
            </motion.div>
            <motion.figure 
              className="content-image"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&q=80&auto=format&fit=crop"
                width={600}
                height={400}
                alt="Artisan crafting LED guitar picks in Nepal"
                className="about-image"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section reviews">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Musicians Say
          </motion.h2>
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="review-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star" aria-hidden="true"></i>
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <p className="review-author">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}