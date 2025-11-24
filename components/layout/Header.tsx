'use client';

import Link from 'next/link';
import { SITE_NAME, NAV_LINKS } from '@/lib/utils/constants';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/lib/context/CartContext';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            {SITE_NAME}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-black transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search Bar */}
            <div className={`hidden lg:flex items-center transition-all ${isSearchOpen ? 'w-64' : 'w-10'}`}>
              {isSearchOpen ? (
                <div className="flex items-center w-full bg-gray-100 rounded-full px-4 py-2">
                  <Search className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="flex-1 bg-transparent outline-none text-sm"
                    autoFocus
                  />
                  <button onClick={() => setIsSearchOpen(false)}>
                    <X className="w-5 h-5 text-gray-500 hover:text-black" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Mobile Search Button */}
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Button with Badge */}
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-black text-white text-xs flex items-center justify-center rounded-full">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-700 hover:text-black transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
