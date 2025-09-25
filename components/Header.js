import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import CartSidebar from './CartSidebar'

export default function Header() {
  const { cartCount } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const toggleCart = () => setIsCartOpen(!isCartOpen)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="logo" aria-label="Guitar Pasal Home">
            Guitar Pasal
          </Link>

          <button 
            className="nav-toggle" 
            aria-label="Toggle menu" 
            aria-controls="primary-nav" 
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav id="primary-nav" className={`primary-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`} role="navigation">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li>
                <button 
                  onClick={toggleCart} 
                  className="cart-toggle" 
                  aria-label={`Shopping cart with ${cartCount} items`}
                >
                  <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                  <span className="cart-badge" id="cart-count">{cartCount}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}