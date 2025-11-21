import { Product } from '@/lib/types';

export const products: Product[] = [
  // New Arrivals
  {
    id: '1',
    name: 'ESSENTIALS Classic White Tee',
    price: 100,
    image: '/images/product-1.jpg',
    category: 'new-arrivals',
    description: 'Classic white t-shirt made from premium cotton. Perfect for everyday wear with a timeless design that never goes out of style.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Grey'],
    style: 'casual',
    rating: 4.5
  },
  {
    id: '2',
    name: 'ESSENTIALS Grey Oversized T-Shirt',
    price: 100,
    image: '/images/product-2.jpg',
    category: 'new-arrivals',
    description: 'Oversized fit grey t-shirt for a relaxed, contemporary look. Made with soft, breathable fabric.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Grey', 'Black', 'White'],
    style: 'casual',
    rating: 4.7
  },
  {
    id: '3',
    name: 'ESSENTIALS Cream Short Sleeve Tee',
    price: 100,
    image: '/images/product-3.jpg',
    category: 'new-arrivals',
    description: 'Soft cream-colored short sleeve tee with a modern fit. Versatile piece for any wardrobe.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'White', 'Beige'],
    style: 'casual',
    rating: 4.3
  },
  {
    id: '4',
    name: 'ESSENTIALS Black Short Sleeve Tee',
    price: 100,
    image: '/images/product-4.jpg',
    category: 'new-arrivals',
    description: 'Essential black t-shirt with perfect fit. A wardrobe staple that goes with everything.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy'],
    style: 'casual',
    rating: 4.8
  },

  // Top Selling
  {
    id: '5',
    name: 'Premium Cotton T-Shirt',
    price: 120,
    image: '/images/product-5.jpg',
    category: 'top-selling',
    description: 'High-quality premium cotton t-shirt with superior comfort and durability. Best seller for good reason.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Grey', 'Navy'],
    style: 'casual',
    rating: 4.9
  },
  {
    id: '6',
    name: 'Vintage Graphic Tee',
    price: 95,
    image: '/images/product-6.jpg',
    category: 'top-selling',
    description: 'Retro-inspired graphic tee with unique design. Perfect for making a statement.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black'],
    style: 'casual',
    rating: 4.6
  },
  {
    id: '7',
    name: 'Minimalist Black Tee',
    price: 85,
    image: '/images/product-7.jpg',
    category: 'top-selling',
    description: 'Clean, minimalist design in classic black. Simple yet sophisticated.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey'],
    style: 'casual',
    rating: 4.7
  },
  {
    id: '8',
    name: 'Urban Style White Tee',
    price: 110,
    image: '/images/product-8.jpg',
    category: 'top-selling',
    description: 'Modern urban style white tee with contemporary cut. Street style essential.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Grey'],
    style: 'casual',
    rating: 4.5
  },

  // Casual Style
  {
    id: '9',
    name: 'Casual Striped Polo Shirt',
    price: 135,
    image: '/images/product-9.jpg',
    category: 'casual',
    description: 'Classic striped polo shirt perfect for casual outings. Comfortable and stylish.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy/White', 'Black/Grey', 'Red/White'],
    style: 'casual',
    rating: 4.4
  },
  {
    id: '10',
    name: 'Relaxed Fit Denim Shirt',
    price: 145,
    image: '/images/product-10.jpg',
    category: 'casual',
    description: 'Comfortable denim shirt with relaxed fit. Perfect for layering or wearing solo.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    style: 'casual',
    rating: 4.6
  },
  {
    id: '11',
    name: 'Cotton Henley Long Sleeve',
    price: 95,
    image: '/images/product-11.jpg',
    category: 'casual',
    description: 'Comfortable henley with button placket. Great for casual everyday wear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Grey', 'Navy', 'Olive'],
    style: 'casual',
    rating: 4.5
  },

  // Formal Style
  {
    id: '12',
    name: 'Classic White Dress Shirt',
    price: 180,
    image: '/images/product-12.jpg',
    category: 'formal',
    description: 'Crisp white dress shirt perfect for formal occasions. Premium quality fabric with impeccable tailoring.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Pink'],
    style: 'formal',
    rating: 4.8
  },
  {
    id: '13',
    name: 'Slim Fit Black Dress Shirt',
    price: 175,
    image: '/images/product-13.jpg',
    category: 'formal',
    description: 'Elegant black dress shirt with modern slim fit. Perfect for evening events.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Charcoal'],
    style: 'formal',
    rating: 4.7
  },
  {
    id: '14',
    name: 'Tailored Blazer',
    price: 299,
    image: '/images/product-14.jpg',
    category: 'formal',
    description: 'Professional tailored blazer for the modern gentleman. Versatile and sophisticated.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Black', 'Grey', 'Charcoal'],
    style: 'formal',
    rating: 4.9
  },

  // Party Style
  {
    id: '15',
    name: 'Sequin Party Shirt',
    price: 165,
    image: '/images/product-15.jpg',
    category: 'party',
    description: 'Eye-catching sequin shirt perfect for parties and special occasions. Stand out in style.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gold', 'Silver'],
    style: 'party',
    rating: 4.3
  },
  {
    id: '16',
    name: 'Silk Blend Party Shirt',
    price: 195,
    image: '/images/product-16.jpg',
    category: 'party',
    description: 'Luxurious silk blend shirt with smooth finish. Perfect for upscale events.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Burgundy', 'Navy'],
    style: 'party',
    rating: 4.6
  },
  {
    id: '17',
    name: 'Metallic Print Party Tee',
    price: 125,
    image: '/images/product-17.jpg',
    category: 'party',
    description: 'Bold metallic print tee for a night out. Make a statement with this unique design.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black/Gold', 'White/Silver'],
    style: 'party',
    rating: 4.4
  },

  // Gym Style
  {
    id: '18',
    name: 'Performance Compression Shirt',
    price: 75,
    image: '/images/product-18.jpg',
    category: 'gym',
    description: 'High-performance compression shirt with moisture-wicking technology. Perfect for intense workouts.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Navy', 'Red'],
    style: 'gym',
    rating: 4.7
  },
  {
    id: '19',
    name: 'Athletic Tank Top',
    price: 55,
    image: '/images/product-19.jpg',
    category: 'gym',
    description: 'Breathable tank top for maximum mobility. Lightweight and comfortable for all workouts.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Grey', 'Blue'],
    style: 'gym',
    rating: 4.5
  },
  {
    id: '20',
    name: 'Quick-Dry Sports Tee',
    price: 65,
    image: '/images/product-20.jpg',
    category: 'gym',
    description: 'Advanced quick-dry sports tee that keeps you cool and dry. Perfect for running or gym sessions.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Blue', 'Green'],
    style: 'gym',
    rating: 4.8
  },
];
