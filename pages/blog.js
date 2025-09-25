import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

export default function Blog() {
  // Sample blog articles
  const articles = [
    {
      id: 1,
      title: "5 Essential Guitar Techniques Every Beginner Should Master",
      excerpt: "Learn the fundamental guitar techniques that will set you up for success. From proper picking to basic chord progressions, these skills are your foundation.",
      author: "Rajesh Thapa",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80&auto=format&fit=crop",
      category: "Techniques",
      featured: true
    },
    {
      id: 2,
      title: "The Science Behind LED Guitar Picks: Why They Work",
      excerpt: "Discover how LED technology enhances your guitar playing experience. We explore the physics of light, visibility, and performance psychology.",
      author: "Priya Sharma", 
      date: "2025-01-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80&auto=format&fit=crop",
      category: "Technology",
      featured: true
    },
    {
      id: 3,
      title: "Caring for Your LED Guitar Picks: Maintenance Tips",
      excerpt: "Keep your LED guitar picks performing at their best with these simple maintenance and care tips. Extend battery life and preserve functionality.",
      author: "Krishna Basnet",
      date: "2025-01-05",
      readTime: "4 min read", 
      image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=800&q=80&auto=format&fit=crop",
      category: "Tips",
      featured: false
    },
    {
      id: 4,
      title: "Stage Presence: How Lighting Affects Your Performance",
      excerpt: "Learn how proper stage lighting, including LED accessories, can boost your confidence and connect better with your audience during live performances.",
      author: "Sita Poudel",
      date: "2024-12-28",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80&auto=format&fit=crop",
      category: "Performance",
      featured: false
    },
    {
      id: 5,
      title: "The History of Guitar Picks: From Bone to LED",
      excerpt: "Take a journey through the evolution of guitar picks, from ancient materials to modern LED technology. Discover how innovation has shaped music.",
      author: "Rajesh Thapa",
      date: "2024-12-20",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80&auto=format&fit=crop",
      category: "History",
      featured: false
    },
    {
      id: 6,
      title: "Recording Tips: Getting the Perfect Guitar Sound",
      excerpt: "Professional recording techniques for guitarists. Learn about microphone placement, room acoustics, and how to capture your best performance.",
      author: "Amit Shrestha",
      date: "2024-12-15",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=800&q=80&auto=format&fit=crop",
      category: "Recording",
      featured: false
    }
  ]
  
  const featuredArticles = articles.filter(article => article.featured)
  const regularArticles = articles.filter(article => !article.featured)
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    })
  }
  
  return (
    <Layout
      title="Guitar Tips & Tutorials"
      description="Learn guitar techniques, maintenance tips, and performance advice from Guitar Pasal experts. Improve your skills with our comprehensive guides."
      canonical="https://subammmm.github.io/guitarpasal/blog/"
    >
      {/* Hero Section */}
      <section className="hero blog-hero">
        <div className="container hero-inner">
          <motion.div 
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Guitar Tips & Tutorials</h1>
            <p className="tagline">Learn from the experts, improve your skills</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section featured-articles">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Articles
          </motion.h2>
          
          <div className="featured-grid">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                className="featured-article"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="article-image">
                  <Image
                    src={article.image}
                    width={800}
                    height={400}
                    alt={article.title}
                    className="featured-img"
                  />
                  <div className="article-category">{article.category}</div>
                </div>
                
                <div className="article-content">
                  <div className="article-meta">
                    <span className="article-author">By {article.author}</span>
                    <span className="article-date">{formatDate(article.date)}</span>
                    <span className="article-read-time">{article.readTime}</span>
                  </div>
                  
                  <h3 className="article-title">
                    <Link href={`/blog/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="article-excerpt">{article.excerpt}</p>
                  
                  <Link href={`/blog/${article.id}`} className="read-more">
                    Read More <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section all-articles">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Latest Articles
          </motion.h2>
          
          <div className="articles-grid">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                className="article-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="article-image">
                  <Image
                    src={article.image}
                    width={400}
                    height={250}
                    alt={article.title}
                    className="article-img"
                  />
                  <div className="article-category">{article.category}</div>
                </div>
                
                <div className="article-content">
                  <div className="article-meta">
                    <span className="article-author">By {article.author}</span>
                    <span className="article-date">{formatDate(article.date)}</span>
                  </div>
                  
                  <h3 className="article-title">
                    <Link href={`/blog/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="article-excerpt">{article.excerpt}</p>
                  
                  <div className="article-footer">
                    <span className="article-read-time">{article.readTime}</span>
                    <Link href={`/blog/${article.id}`} className="read-more">
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section blog-categories">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Browse by Category
          </motion.h2>
          
          <div className="categories-grid">
            <motion.div 
              className="category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="category-icon">
                <i className="fas fa-guitar" aria-hidden="true"></i>
              </div>
              <h3>Techniques</h3>
              <p>Master essential guitar playing techniques</p>
              <Link href="/blog/category/techniques" className="category-link">
                View Articles
              </Link>
            </motion.div>
            
            <motion.div 
              className="category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="category-icon">
                <i className="fas fa-lightbulb" aria-hidden="true"></i>
              </div>
              <h3>Technology</h3>
              <p>Explore the tech behind LED guitar picks</p>
              <Link href="/blog/category/technology" className="category-link">
                View Articles
              </Link>
            </motion.div>
            
            <motion.div 
              className="category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="category-icon">
                <i className="fas fa-stage" aria-hidden="true"></i>
              </div>
              <h3>Performance</h3>
              <p>Tips for better live performances</p>
              <Link href="/blog/category/performance" className="category-link">
                View Articles
              </Link>
            </motion.div>
            
            <motion.div 
              className="category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="category-icon">
                <i className="fas fa-tools" aria-hidden="true"></i>
              </div>
              <h3>Tips</h3>
              <p>Practical advice for guitar maintenance</p>
              <Link href="/blog/category/tips" className="category-link">
                View Articles
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section newsletter-section">
        <div className="container">
          <motion.div 
            className="newsletter-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Stay Updated</h2>
            <p>Get the latest guitar tips, product news, and exclusive offers delivered to your inbox.</p>
            
            <form className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
              <p className="newsletter-note">
                <i className="fas fa-lock" aria-hidden="true"></i>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* TikTok Follow */}
      <section className="section tiktok-follow">
        <div className="container">
          <motion.div 
            className="tiktok-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Follow Us on TikTok</h2>
            <p>Get quick guitar tips, LED pick demos, and behind-the-scenes content from our Nepal workshop.</p>
            
            <a 
              href="https://www.tiktok.com/@guitarpasal" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tiktok"
            >
              <i className="fab fa-tiktok" aria-hidden="true"></i>
              Follow @guitarpasal
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}