import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <section className="relative bg-gray-100 min-h-[calc(100vh-80px)] flex items-center">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-12">
            {/* Left Content */}
            <div className="space-y-6 animate-[fadeInUp_0.8s_ease-out]">
              <div className="inline-block bg-black text-white px-4 py-1 text-xs font-medium rounded-full mb-2">
                ประสบการณ์ 18+ ปี
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                รับผลิตและพิมพ์<br />
                เสื้อผ้าครบวงจร
              </h1>

              <p className="text-gray-600 text-base max-w-md leading-relaxed">
                รับผลิตเสื้อยืด เสื้อโปโล แจ๊คเก็ต ชุดกีฬา พร้อมบริการสกรีนและปักด้วยระบบดิจิตอล
                คุณภาพพรีเมี่ยม ราคายุติธรรม ส่งตรงตามเวลา
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/shop"
                  className="inline-block bg-black text-white px-10 py-3.5 rounded-full hover:bg-gray-800 transition-all font-medium text-sm hover:scale-105 text-center"
                >
                  ดูสินค้าทั้งหมด
                </Link>
                <Link
                  href="/about"
                  className="inline-block bg-white border-2 border-black text-black px-10 py-3.5 rounded-full hover:bg-gray-50 transition-all font-medium text-sm hover:scale-105 text-center"
                >
                  ติดต่อสอบถาม
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold">18+</div>
                  <div className="text-xs text-gray-600">ปีประสบการณ์</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold">1000+</div>
                  <div className="text-xs text-gray-600">ลูกค้าทั่วประเทศ</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold">100%</div>
                  <div className="text-xs text-gray-600">คุณภาพรับประกัน</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg shadow-lg flex items-center justify-center overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Overlay pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTZjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDIyLjYyNyAwIDE2em0zNiAzNmMwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyem0tMzYgMGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyUzAgNTguNjI3IDAgNTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
                </div>

                {/* Center text placeholder */}
                <div className="relative text-center p-8">
                  <div className="text-6xl lg:text-8xl font-black text-white mb-4">RIDGEBACK</div>
                  <div className="text-lg text-gray-300 mb-6">GARMENT</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    #โรงงานหมาดำ<br/>
                    Digital Screen Printing & Embroidery
                  </div>
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
