// Product data for Guitar Pasal LED Guitar Picks
export const products = [
  {
    id: 'white-led-pick',
    name: 'LED Guitar Pick - White',
    color: 'White',
    price: 500,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&auto=format&fit=crop',
    description: 'Bright white LED illumination for dark stages. Perfect for acoustic and electric guitars with 10+ hour battery life.',
    features: [
      'Ultra-bright white LED',
      '10+ hour battery life',
      'Durable plastic construction',
      'Perfect for stage performances',
      'Comfortable grip design'
    ],
    inStock: true,
    category: 'led-picks'
  },
  {
    id: 'purple-led-pick',
    name: 'LED Guitar Pick - Purple',
    color: 'Purple',
    price: 500,
    image: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=400&h=400&auto=format&fit=crop',
    description: 'Vibrant purple LED for unique stage presence. Stand out with stunning purple illumination.',
    features: [
      'Vibrant purple LED',
      '10+ hour battery life',
      'High-quality materials',
      'Unique stage presence',
      'Professional grade'
    ],
    inStock: true,
    category: 'led-picks'
  },
  {
    id: 'green-led-pick',
    name: 'LED Guitar Pick - Green',
    color: 'Green',
    price: 500,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&auto=format&fit=crop',
    description: 'Brilliant green LED with exceptional visibility. Perfect for both studio and live performances.',
    features: [
      'Brilliant green LED',
      '10+ hour battery life',
      'Superior visibility',
      'Versatile performance',
      'Precision crafted'
    ],
    inStock: true,
    category: 'led-picks'
  }
]

// Get product by color
export function getProductByColor(color) {
  return products.find(product => 
    product.color.toLowerCase() === color.toLowerCase()
  )
}

// Get all products
export function getAllProducts() {
  return products
}

// Get featured products (for homepage)
export function getFeaturedProducts() {
  return products // All products are featured for now
}

// Get related products (exclude current product)
export function getRelatedProducts(currentProductId) {
  return products.filter(product => product.id !== currentProductId)
}