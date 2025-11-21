import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              FIND CLOTHES<br />
              THAT MATCHES<br />
              YOUR STYLE
            </h1>
            <p className="text-gray-600 max-w-md">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
            </p>
            <Link
              href="/shop"
              className="inline-block bg-black text-white px-12 py-4 rounded-full hover:bg-gray-800 transition"
            >
              Shop Now
            </Link>
          </div>
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/images/hero-model.jpg"
              alt="Fashion model"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
