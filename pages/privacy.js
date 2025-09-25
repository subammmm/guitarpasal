import { motion } from 'framer-motion'
import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Guitar Pasal Privacy Policy - How we collect, use, and protect your personal information."
      canonical="https://subammmm.github.io/guitarpasal/privacy/"
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
            <h1>Privacy Policy</h1>
            <p className="tagline">Your privacy matters to us</p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
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
              <h2>Information We Collect</h2>
              <p>When you visit Guitar Pasal, we may collect the following information:</p>
              <ul>
                <li>Personal information you provide (name, email, phone number)</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Order history and preferences</li>
                <li>Website usage data and analytics</li>
                <li>Device information and IP address</li>
                <li>Communications with our customer service team</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li><strong>Order Processing:</strong> To process and fulfill your LED guitar pick orders</li>
                <li><strong>Customer Service:</strong> To respond to your inquiries and provide support</li>
                <li><strong>Communication:</strong> To send order confirmations, shipping updates, and important notices</li>
                <li><strong>Marketing:</strong> To send promotional emails about new products and offers (with your consent)</li>
                <li><strong>Analytics:</strong> To understand how our website is used and improve our services</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> With trusted partners who help us operate our business (shipping, payment processing, email services)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of our business</li>
                <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information:</p>
              <ul>
                <li>SSL encryption for all data transmissions</li>
                <li>Secure payment processing through trusted providers (eSewa, Khalti)</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Data backup and recovery procedures</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Cookies and Tracking</h2>
              <p>Our website uses cookies and similar technologies to:</p>
              <ul>
                <li>Remember your preferences and shopping cart contents</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Provide personalized content and recommendations</li>
                <li>Enable social media features and integrations</li>
              </ul>
              <p>You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality.</p>
            </div>

            <div className="legal-section">
              <h2>Your Rights</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Update:</strong> Correct or update your personal information</li>
                <li><strong>Delete:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                <li><strong>Restriction:</strong> Request restrictions on how we process your data</li>
              </ul>
              <p>To exercise these rights, please contact us at info@guitarpasal.com.</p>
            </div>

            <div className="legal-section">
              <h2>Data Retention</h2>
              <p>We retain your personal information for as long as necessary to:</p>
              <ul>
                <li>Provide our services and fulfill orders</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records for tax and accounting purposes</li>
              </ul>
              <p>We will securely delete or anonymize your information when it's no longer needed.</p>
            </div>

            <div className="legal-section">
              <h2>Third-Party Links</h2>
              <p>Our website may contain links to third-party websites (such as TikTok, payment providers). We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.</p>
            </div>

            <div className="legal-section">
              <h2>Children's Privacy</h2>
              <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information immediately.</p>
            </div>

            <div className="legal-section">
              <h2>International Data Transfers</h2>
              <p>Your information may be processed and stored in Nepal and other countries where our service providers operate. We ensure appropriate safeguards are in place for international transfers.</p>
            </div>

            <div className="legal-section">
              <h2>Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:</p>
              <ul>
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying prominent notices on our website</li>
              </ul>
              <p>Your continued use of our services after changes indicates acceptance of the updated policy.</p>
            </div>

            <div className="legal-section">
              <h2>Contact Information</h2>
              <p>If you have questions about this privacy policy or our data practices, please contact us:</p>
              <div className="contact-info">
                <p><strong>Guitar Pasal</strong></p>
                <p>Email: info@guitarpasal.com</p>
                <p>Phone: +977-1-4567890</p>
                <p>Address: Thamel, Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="legal-section">
              <h2>Specific to Nepal Users</h2>
              <p>For users in Nepal, we comply with applicable Nepali data protection laws and regulations. Your personal information is processed in accordance with local legal requirements and industry best practices.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}