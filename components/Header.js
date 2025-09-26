import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import CartSidebar from './CartSidebar'

export default function Header() {
  const { cartCount } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const toggleCart = () => setIsCartOpen(!isCartOpen)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
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
              <li>
                <div className="mega-menu-trigger">
                  <Link href="/shop">Shop</Link>
                </div>
              </li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li>
                <div className="header-icons">
                  <button 
                    className="search-toggle" 
                    aria-label="Search"
                  >
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </button>
                  <button 
                    className="account-toggle" 
                    aria-label="Account"
                  >
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </button>
                  <button 
                    onClick={toggleCart} 
                    className="cart-toggle" 
                    aria-label={`Shopping cart with ${cartCount} items`}
                  >
                    <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}