import Link from 'next/link';
import { SITE_NAME } from '@/lib/utils/constants';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-bold mb-4 text-gray-400">{SITE_NAME}</h3>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              UI | UX Designing and Website Development located in Ohio, United States of America
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>8819 Ohio St. South Gate,<br />CA 90280</li>
              <li>Ourstudio@hello.com</li>
              <li>+1 386-688-3295</li>
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Service</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="/illustration" className="hover:text-black transition-colors">Illustration</Link></li>
              <li><Link href="/mobile" className="hover:text-black transition-colors">Mobile Design</Link></li>
              <li><Link href="/motion" className="hover:text-black transition-colors">Motion Graphic</Link></li>
              <li><Link href="/web" className="hover:text-black transition-colors">Web Design</Link></li>
              <li><Link href="/development" className="hover:text-black transition-colors">Development</Link></li>
              <li><Link href="/seo" className="hover:text-black transition-colors">SEO</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><Link href="/service" className="hover:text-black transition-colors">Service</Link></li>
              <li><Link href="/features" className="hover:text-black transition-colors">Features</Link></li>
              <li><Link href="/team" className="hover:text-black transition-colors">Our Team</Link></li>
              <li><Link href="/portfolio" className="hover:text-black transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>Copyright Tanah Air Studio</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Sed do eiusmod</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
