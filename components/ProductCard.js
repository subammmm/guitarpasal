import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'

export default function ProductCard({ product, showAddToCart = true }) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  
  const handleAddToCart = async () => {
    setIsAdding(true)
    
    // Add item to cart
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      color: product.color,
      image: product.image,
      description: product.description
    })
    
    // Show loading state
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }
  
  return (
    <motion.article 
      className="product-card"
      data-product={product.id}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/products/${product.color?.toLowerCase()}`}>
        <figure className="product-media">
          <Image
            src={product.image}
            width={400}
            height={400}
            alt={`${product.name} in use`}
            loading="lazy"
            className="product-image"
          />
        </figure>
      </Link>
      
      <div className="product-info">
        <Link href={`/products/${product.color?.toLowerCase()}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <p className="product-description">{product.description}</p>
        <p className="product-price">₨{product.price}</p>
        
        {showAddToCart && (
          <button 
            className={`btn btn-add-to-cart ${isAdding ? 'loading' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdding ? (
              <>
                <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
                Adding...
              </>
            ) : (
              <>
                <i className="fas fa-cart-plus" aria-hidden="true"></i>
                Add to Cart
              </>
            )}
          </button>
        )}
      </div>
    </motion.article>
  )
}