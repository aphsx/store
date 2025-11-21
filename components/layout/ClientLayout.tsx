'use client';

import { ReactNode } from 'react';
import { CartProvider } from '@/lib/context/CartContext';
import Header from './Header';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <Header />
      {children}
      <Footer />
    </CartProvider>
  );
}
