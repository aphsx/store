import Link from 'next/link';
import { Award, Users, TrendingUp, Heart } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-100 py-20">
        <ScrollReveal>
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ABOUT SHOP.COM
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about bringing you the finest clothing that matches your unique style.
              Since our founding, we've been dedicated to quality, affordability, and customer satisfaction.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <ScrollReveal>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At SHOP.COM, our mission is to democratize fashion by making high-quality,
                  stylish clothing accessible to everyone. We believe that everyone deserves
                  to look and feel their best, regardless of their budget.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We carefully curate our collection to ensure that every piece meets our
                  high standards for quality, comfort, and style. From casual everyday wear
                  to formal occasions, we have something for every moment in your life.
                </p>
              </div>
              <div className="relative h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                <div className="text-9xl font-black text-gray-200">SHOP</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <ScrollReveal direction="right">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Quality */}
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality First</h3>
                <p className="text-gray-600 text-sm">
                  We never compromise on quality. Every product is carefully selected and inspected.
                </p>
              </div>

              {/* Customer Focus */}
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer First</h3>
                <p className="text-gray-600 text-sm">
                  Your satisfaction is our priority. We're here to serve you with excellence.
                </p>
              </div>

              {/* Innovation */}
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  We stay ahead of trends to bring you the latest and greatest in fashion.
                </p>
              </div>

              {/* Passion */}
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Passion</h3>
                <p className="text-gray-600 text-sm">
                  We love what we do, and it shows in every aspect of our service.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <ScrollReveal>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our Story
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  SHOP.COM was founded with a simple idea: fashion should be accessible to everyone.
                  What started as a small online store has grown into a thriving fashion destination
                  serving thousands of customers worldwide.
                </p>

                <p>
                  Our journey began when our founders noticed a gap in the market for quality,
                  affordable clothing that doesn't compromise on style. They set out to create
                  a brand that would bridge this gap, and SHOP.COM was born.
                </p>

                <p>
                  Today, we work with designers and manufacturers around the world to bring you
                  a diverse range of styles, from casual streetwear to elegant formal wear.
                  Our team is passionate about fashion and dedicated to helping you find pieces
                  that make you feel confident and comfortable.
                </p>

                <p className="font-semibold text-black">
                  Thank you for being part of our story. We look forward to helping you
                  express your unique style for years to come.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <ScrollReveal>
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Style?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse our collection and discover clothing that speaks to you.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
