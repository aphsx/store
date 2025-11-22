'use client';

import { Mail } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-white">
      <ScrollReveal direction="right">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-black rounded-2xl px-6 md:px-12 py-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Left side - Text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  รับข้อมูลโปรโมชั่นและ<br />ข่าวสารล่าสุด
                </h2>
                <p className="text-gray-300 text-sm mt-3">
                  อัพเดตสินค้าใหม่ โปรโมชั่นพิเศษ และเคล็ดลับการผลิตเสื้อผ้า
                </p>
              </div>

              {/* Right side - Form */}
              <div className="space-y-3">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      placeholder="อีเมลของคุณ"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-full bg-white text-sm text-black outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-black font-medium py-3 rounded-full hover:bg-gray-100 transition-colors text-sm"
                  >
                    ติดตามข่าวสาร
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
