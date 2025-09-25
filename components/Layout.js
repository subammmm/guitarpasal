import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title, description, canonical }) {
  const pageTitle = title ? `${title} - Guitar Pasal` : 'Guitar Pasal – LED Guitar Picks from Nepal'
  const pageDescription = description || 'Discover high-quality LED guitar picks in white, purple, and green. Shop now with eSewa, Khalti, and QR payments.'
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="site-wrapper">
        <Header />
        <main id="main" className="site-main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}