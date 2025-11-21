# E-Commerce Project Structure

## Folder Organization

```
store/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with Header
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
│
├── components/                   # Reusable components
│   ├── layout/                  # Layout components
│   │   └── Header.tsx           # Main navigation header
│   ├── ui/                      # UI components
│   │   └── ProductCard.tsx      # Product card component
│   └── home/                    # Home page sections
│       ├── HeroSection.tsx      # Hero banner section
│       ├── NewArrivals.tsx      # New arrivals section
│       └── TopSelling.tsx       # Top selling section
│
├── lib/                         # Utility functions and data
│   ├── types/                   # TypeScript types
│   │   ├── product.ts           # Product type definitions
│   │   └── index.ts             # Type exports
│   ├── utils/                   # Utility functions
│   │   └── constants.ts         # Site constants
│   └── data/                    # Static data
│       └── products.ts          # Product data
│
└── public/                      # Static assets
    └── images/                  # Image assets
```

## Key Files

### Components

- **Header.tsx**: Navigation bar with logo, menu links, search, cart, and user icons
- **ProductCard.tsx**: Reusable product card with image, name, and price
- **HeroSection.tsx**: Main banner section with heading and CTA
- **NewArrivals.tsx**: Section displaying new arrival products
- **TopSelling.tsx**: Section displaying top selling products

### Data & Types

- **product.ts**: Product interface definition
- **products.ts**: Mock product data
- **constants.ts**: Site-wide constants (site name, navigation links)

### Pages

- **page.tsx**: Homepage combining all home sections
- **layout.tsx**: Root layout with header and metadata

## Getting Started

1. Add product images to `public/images/`
2. Update product data in `lib/data/products.ts`
3. Customize styles in `app/globals.css`
4. Run development server: `npm run dev`
