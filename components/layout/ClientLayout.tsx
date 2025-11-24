'use client';

import { ReactNode } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { CartProvider } from '@/lib/context/CartContext';
import Header from './Header';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <Header />
        {children}
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}
