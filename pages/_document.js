import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <meta name="description" content="Guitar Pasal – Premium LED Guitar Picks from Nepal. Shop high-quality white, purple, and green LED guitar picks. ₨500 each with eSewa, Khalti, and QR payments." />
        <meta name="keywords" content="LED guitar picks, Nepal, guitar accessories, music, LED picks, eSewa, Khalti, guitar pasal" />
        <meta name="author" content="Guitar Pasal" />
        <meta name="robots" content="index, follow" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Guitar Pasal – LED Guitar Picks Nepal" />
        <meta property="og:description" content="Discover high-quality LED guitar picks in white, purple, and green. Shop now with eSewa, Khalti, and QR payments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://subammmm.github.io/guitarpasal/" />
        <meta property="og:image" content="https://subammmm.github.io/guitarpasal/images/og-image.jpg" />
        <meta property="og:site_name" content="Guitar Pasal" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guitar Pasal – LED Guitar Picks Nepal" />
        <meta name="twitter:description" content="Premium LED guitar picks from Nepal. ₨500 each." />
        <meta name="twitter:image" content="https://subammmm.github.io/guitarpasal/images/og-image.jpg" />
        
        {/* Theme and Icons */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light only" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://subammmm.github.io/guitarpasal/" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Guitar Pasal",
              "url": "https://subammmm.github.io/guitarpasal/",
              "logo": "https://subammmm.github.io/guitarpasal/images/logo.png",
              "description": "Premium LED guitar picks manufacturer from Nepal",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NP",
                "addressLocality": "Kathmandu"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "LED Guitar Picks",
                "itemListElement": [
                  {
                    "@type": "Product",
                    "name": "LED Guitar Pick - White",
                    "description": "Bright white LED illumination for dark stages",
                    "offers": {
                      "@type": "Offer",
                      "price": "500",
                      "priceCurrency": "NPR"
                    }
                  },
                  {
                    "@type": "Product", 
                    "name": "LED Guitar Pick - Purple",
                    "description": "Purple LED pick for unique stage presence",
                    "offers": {
                      "@type": "Offer",
                      "price": "500",
                      "priceCurrency": "NPR"
                    }
                  },
                  {
                    "@type": "Product",
                    "name": "LED Guitar Pick - Green", 
                    "description": "Green LED pick with vibrant illumination",
                    "offers": {
                      "@type": "Offer",
                      "price": "500",
                      "priceCurrency": "NPR"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}