'use client';

import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import { Package } from 'lucide-react';

export default function OrdersPage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Orders</h1>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="text-center">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h2>
              <p className="text-gray-600 mb-6">
                You haven't placed any orders yet. Start shopping to see your orders here!
              </p>
              {user && (
                <div className="text-sm text-gray-500 mb-6">
                  Logged in as: <span className="font-medium">{user.email}</span>
                </div>
              )}
              <a
                href="/products"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
