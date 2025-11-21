import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <section className="relative bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-16 lg:py-20">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                FIND CLOTHES<br />
                THAT MATCHES<br />
                YOUR STYLE
              </h1>

              <p className="text-gray-600 text-sm max-w-md leading-relaxed">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              </p>

              <Link
                href="/shop"
                className="inline-block bg-black text-white px-12 py-3 rounded-full hover:bg-gray-800 transition-all font-medium text-sm"
              >
                Shop Now
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-[350px] lg:h-[450px] flex items-center justify-center">
              <div className="relative w-full h-full bg-white flex items-center justify-center">
                {/* Placeholder background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>

                {/* Center text placeholder */}
                <div className="relative text-center">
                  <div className="text-5xl lg:text-7xl font-black text-gray-200">ESSENTIALS</div>
                  <div className="text-xs text-gray-400 mt-2">FEAR OF GOD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Black divider bar */}
      <div className="w-full h-16 bg-black"></div>
    </>
  );
}
