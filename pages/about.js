import Image from 'next/image'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

export default function About() {
  const features = [
    {
      icon: 'fas fa-mountain',
      title: 'Nepal-Made Quality',
      description: 'Each pick is handcrafted by skilled artisans in Nepal'
    },
    {
      icon: 'fas fa-gem',
      title: 'Premium Materials',
      description: 'We use only the finest materials for durability and sound quality'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'LED Innovation',
      description: 'Bright, long-lasting LED illumination for dark venues'
    },
    {
      icon: 'fas fa-tag',
      title: 'Affordable Pricing',
      description: 'Premium quality at ₨500 per pick'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Local Support',
      description: 'Supporting Nepal\'s growing music and technology industries'
    },
    {
      icon: 'fas fa-heart',
      title: 'Passion-Driven',
      description: 'Made with love for music and innovation'
    }
  ]
  
  return (
    <Layout
      title="About Us"
      description="Learn about Guitar Pasal - Nepal's premier LED guitar pick manufacturer. Crafted with precision for musicians worldwide."
      canonical="https://subammmm.github.io/guitarpasal/about/"
    >
      {/* Hero Section */}
      <section className="hero about-hero">
        <div className="container hero-inner">
          <motion.div 
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>About Guitar Pasal</h1>
            <p className="tagline">Crafting Excellence in Nepal</p>
          </motion.div>
          <motion.figure 
            className="hero-media"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80&auto=format&fit=crop"
              width={800}
              height={600}
              alt="Artisan crafting LED guitar picks in Nepal"
              className="hero-image"
              priority
            />
          </motion.figure>
        </div>
      </section>

      {/* Our Story */}
      <section className="section about-content">
        <div className="container">
          <div className="content-grid">
            <motion.div 
              className="content-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Story</h2>
              <p>Guitar Pasal was born from a passion for music and innovation in the heart of Nepal. We recognized that musicians needed something more than traditional guitar picks – they needed picks that could illuminate their performance, literally and figuratively.</p>
              
              <p>Founded by a team of local artisans and electronics enthusiasts, we combine traditional Nepali craftsmanship with cutting-edge LED technology to create guitar picks that not only sound great but also light up the stage.</p>

              <h2>Our Mission</h2>
              <p>To empower musicians worldwide with innovative, high-quality LED guitar picks that enhance their performance and creativity. Every pick is crafted with precision, tested for durability, and designed to inspire musical excellence.</p>
              
              <h2>Made in Nepal</h2>
              <p>We're proud to be a Nepali company supporting local artisans and contributing to Nepal's growing technology sector. Each Guitar Pasal LED pick represents the perfect fusion of traditional craftsmanship and modern innovation.</p>
            </motion.div>
            
            <motion.div 
              className="content-image"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=600&q=80&auto=format&fit=crop"
                width={600}
                height={400}
                alt="Musicians performing with LED guitar picks"
                className="content-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Guitar Pasal */}
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

      {/* The Team */}
      <section className="section team-section">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>
          
          <div className="team-grid">
            <motion.div 
              className="team-member"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="member-image">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Founder and CEO"
                  className="team-img"
                />
              </div>
              <div className="member-info">
                <h3>Rajesh Thapa</h3>
                <p className="member-role">Founder & CEO</p>
                <p>Electronics engineer and music enthusiast who envisioned LED guitar picks for Nepal's musicians.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="team-member"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="member-image">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=300&q=80&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Head of Design"
                  className="team-img"
                />
              </div>
              <div className="member-info">
                <h3>Priya Sharma</h3>
                <p className="member-role">Head of Design</p>
                <p>Industrial designer focused on creating ergonomic and aesthetically pleasing LED guitar picks.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="team-member"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="member-image">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Master Craftsman"
                  className="team-img"
                />
              </div>
              <div className="member-info">
                <h3>Krishna Basnet</h3>
                <p className="member-role">Master Craftsman</p>
                <p>Traditional artisan with 20+ years experience, specializing in precision crafting of guitar accessories.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>
          
          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="value-icon">
                <i className="fas fa-star" aria-hidden="true"></i>
              </div>
              <h3>Excellence</h3>
              <p>We strive for perfection in every LED guitar pick we create, from concept to delivery.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="value-icon">
                <i className="fas fa-lightbulb" aria-hidden="true"></i>
              </div>
              <h3>Innovation</h3>
              <p>Constantly pushing boundaries to create revolutionary products for modern musicians.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="value-icon">
                <i className="fas fa-users" aria-hidden="true"></i>
              </div>
              <h3>Community</h3>
              <p>Supporting Nepal's music community and creating opportunities for local artisans.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="value-icon">
                <i className="fas fa-leaf" aria-hidden="true"></i>
              </div>
              <h3>Sustainability</h3>
              <p>Using eco-friendly materials and processes while supporting local economic growth.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Light Up Your Music?</h2>
            <p>Join thousands of musicians who trust Guitar Pasal LED picks for their performances.</p>
            <div className="cta-actions">
              <a href="/shop" className="btn btn-primary">
                Shop LED Picks
              </a>
              <a href="/contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}