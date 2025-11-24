import Link from 'next/link';
import { ArrowLeft, Check, Wind, Zap, Trophy, Star } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function SportswarePage() {
  const features = [
    {
      icon: Wind,
      title: 'ระบายอากาศดี',
      description: 'ผ้าระบายอากาศพิเศษ ไม่อับชื้น'
    },
    {
      icon: Zap,
      title: 'เบา สบาย',
      description: 'ผ้าเบา ไม่หนักอึดอัด เคลื่อนไหวง่าย'
    },
    {
      icon: Trophy,
      title: 'พิมพ์ซับลิเมชั่น',
      description: 'สีสันสดใส ไม่หลุดลอก ทนทาน'
    },
    {
      icon: Star,
      title: 'ออกแบบได้ทุกสไตล์',
      description: 'ออกแบบลายได้อิสระ ไม่จำกัดสี'
    }
  ];

  const fabricTypes = [
    { name: 'Dry-Fit', desc: 'ซับเหงื่อดี แห้งไว ระบายอากาศดีเยี่ยม' },
    { name: 'Micro-Fiber', desc: 'เบามาก เนื้อผ้านุ่ม สวมใส่สบาย' },
    { name: 'Mesh', desc: 'ผ้าตาข่าย ระบายอากาศสูงสุด' },
    { name: 'Spandex Mix', desc: 'ยืดหยุ่นดี กระชับตัว รับทรง' }
  ];

  const sportTypes = [
    { name: 'ฟุตบอล', desc: 'เสื้อ + กางเกง + ถุงเท้า (ชุดเดียวกัน)' },
    { name: 'วอลเลย์บอล', desc: 'เสื้อแขนสั้น/กุด + กางเกงขาสั้น' },
    { name: 'บาสเกตบอล', desc: 'เสื้อกุด + กางเกงขาสั้น' },
    { name: 'แบดมินตัน', desc: 'เสื้อ + กางเกง/กระโปรง' },
    { name: 'วิ่ง/กรีฑา', desc: 'เสื้อ + กางเกง ระบายอากาศพิเศษ' },
    { name: 'อื่นๆ', desc: 'ออกแบบได้ตามต้องการ' }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gray-100 min-h-[50vh] flex items-center">
          <div className="container mx-auto px-4 lg:px-8 w-full py-12">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับหน้าหลัก
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-block bg-black text-white px-4 py-1 text-xs font-medium rounded-full mb-2">
                  สั่งขั้นต่ำ 30 ตัว
                </div>

                <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                  ชุดกีฬา
                </h1>

                <p className="text-gray-600 text-base max-w-md leading-relaxed">
                  รับผลิตชุดกีฬาทุกประเภท พิมพ์ซับลิเมชั่น
                  สีสันสดใส ออกแบบได้ไม่จำกัด ผ้าระบายอากาศดี
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-black text-white px-10 py-3.5 rounded-full hover:bg-gray-800 transition-all font-medium text-sm hover:scale-105 text-center"
                  >
                    ขอใบเสนอราคา
                  </Link>
                  <Link
                    href="/"
                    className="inline-block bg-white border-2 border-black text-black px-10 py-3.5 rounded-full hover:bg-gray-50 transition-all font-medium text-sm hover:scale-105 text-center"
                  >
                    ดูสินค้าอื่น
                  </Link>
                </div>
              </div>

              {/* Right Image Placeholder */}
              <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center">
                <div className="relative w-full h-full bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg flex items-center justify-center overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTZjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDIyLjYyNyAwIDE2em0zNiAzNmMwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyem0tMzYgMGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyUzAgNTguNjI3IDAgNTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
                  </div>
                  <div className="relative text-center p-8">
                    <div className="text-4xl lg:text-6xl font-black text-white mb-2">SPORTS</div>
                    <div className="text-sm text-green-100">Premium Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Black divider bar */}
        <div className="w-full h-16 bg-black"></div>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal direction="left">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3">จุดเด่นของชุดกีฬา</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  ระบายอากาศดีเยี่ยม พิมพ์ซับลิเมชั่นคุณภาพสูง
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal
                  key={index}
                  direction="left"
                  delay={index * 0.1}
                  className="h-full"
                >
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
                    <div className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left - Fabric Types & Sport Types */}
              <ScrollReveal direction="right">
                <div>
                  <h2 className="text-3xl font-bold mb-6">ประเภทผ้าที่มีให้เลือก</h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                    <div className="space-y-4">
                      {fabricTypes.map((fabric, index) => (
                        <div key={index} className="flex items-start pb-4 border-b last:border-b-0 last:pb-0">
                          <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-lg mb-1">{fabric.name}</p>
                            <p className="text-sm text-gray-600">{fabric.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-4">จุดเด่นของซับลิเมชั่น</h3>
                    <div className="space-y-3">
                      {[
                        'พิมพ์ได้ทั้งชิ้น ไม่จำกัดสี',
                        'สีไม่หลุดลอก ไม่แตกร้าว',
                        'ดีไซน์ได้เต็มที่ ใส่ภาพ ลายไล่สี',
                        'น้ำหนักเบา ไม่มีสีที่หนักอึดอัด'
                      ].map((option, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-black mr-3 text-lg">•</span>
                          <span className="text-gray-700">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right - Sport Types */}
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl font-bold mb-6">ประเภทกีฬาที่รับผลิต</h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                    <div className="space-y-4">
                      {sportTypes.map((sport, index) => (
                        <div key={index} className="flex items-start pb-4 border-b last:border-b-0 last:pb-0">
                          <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-lg mb-1">{sport.name}</p>
                            <p className="text-sm text-gray-600">{sport.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-black">
                    <h3 className="font-bold text-lg mb-3">พร้อมเริ่มโปรเจค?</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      ติดต่อเราเพื่อรับคำปรึกษาและใบเสนอราคาฟรี
                    </p>
                    <Link
                      href="/contact"
                      className="block w-full bg-black text-white text-center py-3 rounded-full hover:bg-gray-800 transition-all font-medium hover:scale-105"
                    >
                      ติดต่อสอบถาม
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Pricing Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal direction="left">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">ราคาและการสั่งซื้อ</h2>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-black text-white px-6 py-2 rounded-full mb-4">
                      <span className="text-sm">สั่งขั้นต่ำ</span>
                      <span className="text-2xl font-bold ml-2">30 ตัว</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-600 mb-4 text-center">ราคาขึ้นอยู่กับ:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'ประเภทผ้าที่เลือก',
                        'จำนวนสั่งผลิต',
                        'ความซับซ้อนของดีไซน์',
                        'จำนวนชิ้นในชุด (เสื้อ+กางเกง)'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-black mr-2">•</span>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal direction="left">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">พร้อมสั่งผลิตชุดกีฬาแล้วหรือยัง?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  ส่งดีไซน์มาให้เราช่วยคุณสร้างชุดกีฬาที่ทีมจะภูมิใจ
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link
                    href="/contact"
                    className="inline-block bg-black text-white px-10 py-3.5 rounded-full hover:bg-gray-800 transition-all font-medium text-sm hover:scale-105"
                  >
                    ขอใบเสนอราคา
                  </Link>
                  <Link
                    href="/"
                    className="inline-block bg-white border-2 border-black text-black px-10 py-3.5 rounded-full hover:bg-gray-50 transition-all font-medium text-sm hover:scale-105"
                  >
                    ดูสินค้าอื่น
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
