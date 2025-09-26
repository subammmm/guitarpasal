import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          {/* Shop Column */}
          <div className="footer-column">
            <h3>Shop</h3>
            <ul>
              <li><Link href="/shop">All Products</Link></li>
              <li><Link href="/products/white">White LED Picks</Link></li>
              <li><Link href="/products/purple">Purple LED Picks</Link></li>
              <li><Link href="/products/green">Green LED Picks</Link></li>
              <li><Link href="/shop">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/about">FAQ</Link></li>
              <li><Link href="/terms">Shipping Info</Link></li>
              <li><Link href="/terms">Returns</Link></li>
              <li><Link href="/contact">Help Center</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/contact">Careers</Link></li>
              <li><Link href="/contact">Press</Link></li>
            </ul>
          </div>

          {/* Newsletter & Social Column */}
          <div className="footer-column">
            <h3>Stay Connected</h3>
            <p>Get updates on new products and exclusive offers.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="btn">Subscribe</button>
            </form>
            <div className="social-icons">
              <a 
                href="https://tiktok.com/@guitarpasal" 
                aria-label="TikTok Profile" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok" aria-hidden="true"></i>
              </a>
              <a 
                href="#" 
                aria-label="Instagram Profile" 
                className="social-icon"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a 
                href="#" 
                aria-label="Facebook Profile" 
                className="social-icon"
              >
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 Guitar Pasal, Nepal. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/contact">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}