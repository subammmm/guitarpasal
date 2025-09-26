# Copilot Instructions for Guitar Pasal

## Project Overview
Guitar Pasal is an e-commerce website selling LED guitar picks crafted in Nepal. The site features a clean, minimal design with support for Nepali payment methods (eSewa, Khalti) and is built using vanilla HTML, CSS, and JavaScript.

## Architecture & Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Custom Properties (variables), responsive design
- **State Management**: localStorage for cart persistence
- **Payment Integration**: eSewa, Khalti (demo implementations)
- **No Build Tools**: Direct file serving, no compilation step required

## Code Style & Standards

### HTML
- Use semantic HTML5 elements (`<main>`, `<section>`, `<article>`, `<nav>`)
- Include proper accessibility attributes (`aria-label`, `role`, `alt` text)
- Follow meta tag standards with proper descriptions and SEO optimization
- Use consistent class naming with descriptive, hyphenated names

### CSS
- Use CSS custom properties (variables) defined in `:root`
- Follow the minimal, clean design aesthetic matching oyyo.se style
- Color scheme: Pure white background (#FFFFFF), black text (#000000), gray accents (#9C9C9C)
- Typography: Helvetica/Arial sans-serif stack
- Use logical properties for layout (`margin-inline`, `padding-block`)
- Mobile-first responsive design with `@media` queries

### JavaScript
- Use ES6+ class syntax for cart functionality
- Follow JSDoc commenting standards for methods
- Use `addEventListener` for event handling, avoid inline handlers
- Implement error handling with try/catch for localStorage operations
- Use descriptive variable names and consistent formatting

## Project-Specific Guidelines

### Products & Business Logic
- LED guitar picks come in three colors: White, Purple, Green
- All products priced at ₨500 (Nepali Rupees)
- Cart functionality with localStorage persistence
- Nepal-focused payment methods (eSewa, Khalti)

### Design Patterns
- **Color Variables**: Use `--color-white-pick`, `--color-purple-pick`, `--color-green-pick` for product colors
- **Spacing**: Use CSS custom properties for consistent spacing:
  - `--spacing-base`: 1rem (16px)
  - `--spacing-section`: 2rem (32px) - default gap
  - `--spacing-large`: 3rem (48px) - for sections
  - `--spacing-xlarge`: 4rem (64px) - between major sections
- **Typography**: Maintain hierarchy with defined font sizes:
  - `--font-size-h1`: 2rem (32px)
  - `--font-size-h2`: 1.5rem (24px)
  - `--font-size-body`: 1rem (16px)
  - `--font-size-small`: 0.875rem (14px)
- **Container**: Max-width `--container-max-width: 1200px` with responsive padding

### Cart System
- Use `GuitarPasalCart` class for all cart operations
- Persist cart state in localStorage with key `guitarPasalCart`
- Show feedback messages for user actions (add to cart, checkout)
- Support quantity changes and item removal

### Social Media Integration
- TikTok embeds in "See Them in Action" section using placeholder iframes
- Social links in footer with proper aria-labels
- TikTok SVG icons with consistent styling
- Use `social-links` class for footer navigation

### Accessibility Requirements
- Include skip links for keyboard navigation
- Use proper ARIA labels and roles
- Ensure color contrast meets WCAG standards
- Support screen readers with descriptive alt text and labels

### File Organization
- Keep all styles in `style.css` (no CSS frameworks)
- JavaScript in `script.js` with class-based organization
- Images via Unsplash CDN with proper `loading` and `decoding` attributes
- Separate HTML files for different pages (index, shop, about, contact)

## Common Tasks & Patterns

### Adding New Products
1. Add product card HTML with proper data attributes (`data-name`, `data-price`)
2. Include high-quality Unsplash image with descriptive alt text
3. Use consistent pricing (₨500) and button styling (`btn btn-add-to-cart`)
4. Ensure product color matches available LED variants

### Payment Integration
- Use demo implementations for eSewa/Khalti
- Show clear user feedback for payment processes
- Include fallback messaging for demo vs. production environments

### Performance Considerations
- Use `loading="lazy"` for images below the fold
- Include `decoding="async"` for better image loading
- Preconnect to external domains (Unsplash CDN)
- Minimize CSS and JS file sizes

## Testing Guidelines
- Test cart functionality across browser sessions (localStorage persistence)
- Verify responsive design on various screen sizes
- Check accessibility with keyboard navigation
- Validate payment demo flows work as expected
- Ensure all external links and images load properly

## Deployment Notes
- Static site deployment via GitHub Pages
- No build process required - direct file serving
- Canonical URLs point to `subammmm.github.io/guitarpasal/`
- All assets served from repository root directory