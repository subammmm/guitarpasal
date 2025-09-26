import { motion } from 'framer-motion'
import Layout from '../components/Layout'

export default function Terms() {
  return (
    <Layout
      title="Terms of Service"
      description="Guitar Pasal Terms of Service - Terms and conditions for using our website and purchasing LED guitar picks."
      canonical="https://subammmm.github.io/guitarpasal/terms/"
    >
      {/* Hero Section */}
      <section className="hero legal-hero">
        <div className="container hero-inner">
          <motion.div 
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Terms of Service</h1>
            <p className="tagline">Terms and conditions</p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section legal-content">
        <div className="container">
          <motion.div 
            className="legal-document"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="last-updated"><strong>Last updated:</strong> January 2025</p>

            <div className="legal-section">
              <h2>Acceptance of Terms</h2>
              <p>By accessing and using Guitar Pasal website and purchasing our products, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.</p>
            </div>

            <div className="legal-section">
              <h2>Products and Services</h2>
              <ul>
                <li><strong>LED Guitar Picks:</strong> We manufacture and sell high-quality LED guitar picks in white, purple, and green colors</li>
                <li><strong>Product Information:</strong> We strive to provide accurate product descriptions, images, and specifications</li>
                <li><strong>Availability:</strong> Products are subject to availability and we reserve the right to limit quantities</li>
                <li><strong>Pricing:</strong> All prices are listed in Nepali Rupees (NPR) and are subject to change without notice</li>
                <li><strong>New Products:</strong> We may introduce new products or discontinue existing ones at our discretion</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Ordering and Payment</h2>
              <ul>
                <li><strong>Order Acceptance:</strong> All orders are subject to acceptance and availability</li>
                <li><strong>Payment Methods:</strong> We accept eSewa, Khalti, and QR payments through major Nepali banks</li>
                <li><strong>Payment Processing:</strong> Payment must be completed before order processing begins</li>
                <li><strong>Order Confirmation:</strong> You will receive an email confirmation once your order is accepted</li>
                <li><strong>Pricing Errors:</strong> We reserve the right to cancel orders if pricing errors occur</li>
                <li><strong>Taxes:</strong> All applicable taxes are included in the listed price</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Shipping and Delivery</h2>
              <ul>
                <li><strong>Shipping Areas:</strong> We currently ship only within Nepal</li>
                <li><strong>Free Shipping:</strong> Free shipping on orders over ₨1000, ₨100 shipping fee for smaller orders</li>
                <li><strong>Delivery Time:</strong> Standard delivery is 3-5 business days within Nepal</li>
                <li><strong>Shipping Address:</strong> You are responsible for providing accurate shipping information</li>
                <li><strong>Delivery Issues:</strong> We are not responsible for delays caused by incorrect addresses or unavailability of recipient</li>
                <li><strong>Risk of Loss:</strong> Risk of loss transfers to you upon delivery</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Returns and Exchanges</h2>
              <ul>
                <li><strong>Return Period:</strong> Returns accepted within 30 days of purchase</li>
                <li><strong>Condition:</strong> Products must be unused, in original packaging with all accessories</li>
                <li><strong>Return Process:</strong> Contact us at info@guitarpasal.com to initiate a return</li>
                <li><strong>Return Shipping:</strong> Customer is responsible for return shipping costs unless product is defective</li>
                <li><strong>Refunds:</strong> Refunds processed within 7 business days after receiving returned item</li>
                <li><strong>Exchanges:</strong> We offer exchanges for different colors subject to availability</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Product Warranty</h2>
              <ul>
                <li><strong>Warranty Period:</strong> 1-year limited warranty on LED functionality</li>
                <li><strong>Coverage:</strong> Warranty covers manufacturing defects and LED component failures</li>
                <li><strong>Exclusions:</strong> Warranty does not cover damage from misuse, accidents, or normal wear</li>
                <li><strong>Battery:</strong> Battery life varies with usage; batteries are user-replaceable</li>
                <li><strong>Warranty Service:</strong> Contact us for warranty claims with proof of purchase</li>
                <li><strong>Remedy:</strong> We will repair or replace defective products at our discretion</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>User Conduct</h2>
              <p>When using our website and services, you agree to:</p>
              <ul>
                <li>Provide accurate and truthful information</li>
                <li>Use the website for lawful purposes only</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to harm or disrupt our systems</li>
                <li>Not use automated systems to access our website</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Intellectual Property</h2>
              <ul>
                <li><strong>Trademarks:</strong> "Guitar Pasal" and our logo are trademarks owned by us</li>
                <li><strong>Content:</strong> All website content, images, and descriptions are our property</li>
                <li><strong>Design:</strong> Our LED guitar pick designs are protected intellectual property</li>
                <li><strong>Usage Rights:</strong> You may not use our intellectual property without written permission</li>
                <li><strong>User Content:</strong> Any content you submit may be used by us for marketing purposes</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Limitation of Liability</h2>
              <p>To the fullest extent permitted by law:</p>
              <ul>
                <li>Our liability is limited to the purchase price of the product</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>We do not guarantee uninterrupted website availability</li>
                <li>You use our products at your own risk</li>
                <li>Our liability does not extend beyond the warranty period</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Privacy and Data Protection</h2>
              <ul>
                <li>Your personal information is governed by our Privacy Policy</li>
                <li>We collect and use information as described in our Privacy Policy</li>
                <li>You consent to data processing as outlined in our Privacy Policy</li>
                <li>We implement appropriate security measures to protect your data</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Third-Party Services</h2>
              <ul>
                <li><strong>Payment Providers:</strong> eSewa and Khalti have their own terms of service</li>
                <li><strong>Social Media:</strong> Our TikTok presence is subject to TikTok's terms</li>
                <li><strong>Shipping Partners:</strong> Third-party logistics providers may have additional terms</li>
                <li><strong>Analytics:</strong> We use third-party analytics services for website improvement</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Modifications to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Changes will be effective when posted on our website. Your continued use of our services constitutes acceptance of modified terms.</p>
            </div>

            <div className="legal-section">
              <h2>Termination</h2>
              <p>We may terminate or suspend access to our services immediately, without prior notice, for conduct that violates these terms or is harmful to other users, us, or third parties.</p>
            </div>

            <div className="legal-section">
              <h2>Governing Law</h2>
              <p>These terms are governed by the laws of Nepal. Any disputes will be resolved in the courts of Nepal, and you consent to the jurisdiction of such courts.</p>
            </div>

            <div className="legal-section">
              <h2>Severability</h2>
              <p>If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
            </div>

            <div className="legal-section">
              <h2>Contact Information</h2>
              <p>If you have questions about these terms of service, please contact us:</p>
              <div className="contact-info">
                <p><strong>Guitar Pasal</strong></p>
                <p>Email: info@guitarpasal.com</p>
                <p>Phone: +977-1-4567890</p>
                <p>Address: Thamel, Kathmandu, Nepal</p>
                <p>Business Hours: Monday-Friday 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>Acknowledgment</h2>
              <p>By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms of service and our privacy policy.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}