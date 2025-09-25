import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; 2025 Guitar Pasal, Nepal</p>
        <nav aria-label="Social">
          <ul className="social-links">
            <li><Link href="/privacy" aria-label="Privacy Policy">Privacy</Link></li>
            <li><Link href="/terms" aria-label="Terms of Service">Terms</Link></li>
            <li>
              <a 
                href="https://tiktok.com/@guitarpasal" 
                aria-label="TikTok Profile" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}