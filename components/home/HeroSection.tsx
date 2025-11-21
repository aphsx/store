import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <section className="relative bg-gray-100 min-h-[calc(100vh-80px)] flex items-center">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-12">
            {/* Left Content */}
            <div className="space-y-6 animate-[fadeInUp_0.8s_ease-out]">
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                FIND CLOTHES<br />
                THAT MATCHES<br />
                YOUR STYLE
              </h1>

              <p className="text-gray-600 text-sm max-w-md leading-relaxed">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>

              <Link
                href="/shop"
                className="inline-block bg-black text-white px-12 py-3 rounded-full hover:bg-gray-800 transition-all font-medium text-sm hover:scale-105"
              >
                Shop Now
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              <div className="relative w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden hover:shadow-md transition-shadow duration-300">
                {/* Placeholder background */}
                <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-gray-100"></div>

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
