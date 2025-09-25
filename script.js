/**
 * Guitar Pasal E-commerce Cart System - Updated for NPR currency and new design
 * Handles adding/removing items, cart display, and checkout with Nepali payment options
 */

class GuitarPasalCart {
  constructor() {
    this.cart = [];
    this.isCartOpen = false;
    
    // Initialize event listeners
    this.initEventListeners();
    
    // Load cart from localStorage if available
    this.loadCart();
    
    // Update cart display
    this.updateCartDisplay();
  }

  /**
   * Initialize all event listeners
   */
  initEventListeners() {
    // Add to cart buttons - updated class name
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-add-to-cart')) {
        const name = e.target.getAttribute('data-name');
        const price = parseFloat(e.target.getAttribute('data-price'));
        this.addToCart(name, price);
      }
    });

    // View cart button
    const viewCartBtn = document.getElementById('view-cart');
    if (viewCartBtn) {
      viewCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleCart();
      });
    }

    // Close cart button
    const closeCartBtn = document.getElementById('close-cart');
    if (closeCartBtn) {
      closeCartBtn.addEventListener('click', () => this.toggleCart());
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => this.checkout());
    }

    // Clear cart button
    const clearCartBtn = document.getElementById('clear-cart');
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => this.clearCart());
    }

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
      const cartSidebar = document.getElementById('cart-sidebar');
      const viewCartBtn = document.getElementById('view-cart');
      
      if (this.isCartOpen && 
          !cartSidebar.contains(e.target) && 
          !viewCartBtn.contains(e.target)) {
        this.toggleCart();
      }
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.querySelector('.primary-nav');
    
    if (navToggle && primaryNav) {
      navToggle.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
      });
    }
  }

  /**
   * Add item to cart
   * @param {string} name - Product name
   * @param {number} price - Product price
   */
  addToCart(name, price) {
    // Check if item already exists in cart
    const existingItem = this.cart.find(item => item.name === name);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({
        id: Date.now(), // Simple ID generation
        name: name,
        price: price,
        quantity: 1
      });
    }

    this.saveCart();
    this.updateCartDisplay();
    this.showAddToCartFeedback(name);
  }

  /**
   * Remove item from cart
   * @param {number} id - Item ID
   */
  removeFromCart(id) {
    this.cart = this.cart.filter(item => item.id !== id);
    this.saveCart();
    this.updateCartDisplay();
  }

  /**
   * Update item quantity
   * @param {number} id - Item ID
   * @param {number} newQuantity - New quantity
   */
  updateQuantity(id, newQuantity) {
    const item = this.cart.find(item => item.id === id);
    if (item) {
      if (newQuantity <= 0) {
        this.removeFromCart(id);
      } else {
        item.quantity = newQuantity;
        this.saveCart();
        this.updateCartDisplay();
      }
    }
  }

  /**
   * Get cart total
   * @returns {number} Total price
   */
  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  /**
   * Get total item count
   * @returns {number} Total items
   */
  getCartCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  /**
   * Update cart display in UI
   */
  updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Update cart count
    if (cartCount) {
      cartCount.textContent = this.getCartCount();
    }

    // Update cart total - NPR currency
    if (cartTotal) {
      cartTotal.textContent = this.getCartTotal().toFixed(0); // No decimals for NPR
    }

    // Update cart items
    if (cartItems) {
      if (this.cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
      } else {
        cartItems.innerHTML = this.cart.map(item => `
          <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-info">
              <h4>${item.name}</h4>
              <p>₨${item.price} each</p>
            </div>
            <div class="cart-item-controls">
              <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
              <span class="quantity">${item.quantity}</span>
              <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
              <button class="remove-btn" onclick="cart.removeFromCart(${item.id})">×</button>
            </div>
          </div>
        `).join('');
      }
    }
  }

  /**
   * Toggle cart sidebar visibility
   */
  toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
      this.isCartOpen = !this.isCartOpen;
      cartSidebar.classList.toggle('open');
    }
  }

  /**
   * Process checkout with Nepali payment options
   */
  checkout() {
    if (this.cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const total = this.getCartTotal();
    const itemCount = this.getCartCount();
    
    // Show checkout options
    const paymentMethod = prompt(`Order Summary:
- ${itemCount} item(s)
- Total: ₨${total}

Choose payment method:
1. eSewa
2. Khalti  
3. QR Bank Transfer

Enter 1, 2, or 3:`);

    switch(paymentMethod) {
      case '1':
        this.processESewa(total);
        break;
      case '2':
        this.processKhalti(total);
        break;
      case '3':
        this.processQRPayment(total);
        break;
      default:
        alert('Invalid payment method selected.');
        return;
    }
  }

  /**
   * Process eSewa payment
   */
  processESewa(total) {
    alert(`Redirecting to eSewa for payment of ₨${total}...\n\nNote: This is a demo. In production, this would redirect to eSewa gateway.`);
    this.completeOrder();
  }

  /**
   * Process Khalti payment  
   */
  processKhalti(total) {
    alert(`Initializing Khalti payment for ₨${total}...\n\nNote: This is a demo. In production, this would use Khalti SDK.`);
    this.completeOrder();
  }

  /**
   * Process QR bank payment
   */
  processQRPayment(total) {
    const qrData = `Bank: Nabil Bank\nAccount: 0123456789\nAmount: ₨${total}\nReference: GP${Date.now()}`;
    alert(`QR Payment Details:\n\n${qrData}\n\nScan the QR code to complete payment.\n\nNote: This is a demo. In production, a QR code would be generated.`);
    this.completeOrder();
  }

  /**
   * Complete order after successful payment
   */
  completeOrder() {
    alert(`Thank you for shopping at Guitar Pasal!\n\nYour LED guitar picks will be shipped within 2-3 business days.\n\nOrder confirmation will be sent to your email.`);
    
    // Clear cart after successful checkout
    this.clearCart();
    this.toggleCart();
  }

  /**
   * Clear all items from cart
   */
  clearCart() {
    this.cart = [];
    this.saveCart();
    this.updateCartDisplay();
  }

  /**
   * Save cart to localStorage
   */
  saveCart() {
    try {
      localStorage.setItem('guitarPasalCart', JSON.stringify(this.cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage:', e);
    }
  }

  /**
   * Load cart from localStorage
   */
  loadCart() {
    try {
      const saved = localStorage.getItem('guitarPasalCart');
      if (saved) {
        this.cart = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not load cart from localStorage:', e);
      this.cart = [];
    }
  }

  /**
   * Show feedback when item is added to cart
   * @param {string} itemName - Name of added item
   */
  showAddToCartFeedback(itemName) {
    // Create temporary feedback element
    const feedback = document.createElement('div');
    feedback.textContent = `✓ ${itemName} added to cart!`;
    feedback.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #00b140;
      color: white;
      padding: 12px 20px;
      border-radius: 5px;
      z-index: 1000;
      font-weight: bold;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      animation: slideIn 0.3s ease;
    `;

    // Add slide in animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(feedback);

    // Remove feedback after 3 seconds
    setTimeout(() => {
      feedback.style.animation = 'slideIn 0.3s ease reverse';
      setTimeout(() => {
        if (feedback.parentNode) {
          feedback.parentNode.removeChild(feedback);
        }
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      }, 300);
    }, 3000);
  }
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create global cart instance
  window.cart = new GuitarPasalCart();

  // Mobile navigation toggle (if needed)
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      primaryNav.style.display = isExpanded ? 'none' : 'block';
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add loading states to buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      const originalText = this.textContent;
      this.textContent = 'Adding...';
      this.disabled = true;
      
      setTimeout(() => {
        this.textContent = originalText;
        this.disabled = false;
      }, 500);
    });
  });
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GuitarPasalCart;
}