import Link from 'next/link';
import { ArrowLeft, Check, Palette, Ruler, Zap, Star } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TShirtPage() {
  const features = [
    {
      icon: Palette,
      title: 'สกรีนได้หลากหลาย',
      description: 'ซิลค์สกรีน, ดิจิตอล, DTF พิมพ์ภาพสีสดใส'
    },
    {
      icon: Ruler,
      title: 'ไซส์ครบทุกไซส์',
      description: 'ตั้งแต่ XS - 6XL และปรับไซส์พิเศษได้'
    },
    {
      icon: Zap,
      title: 'ผลิตไว',
      description: 'ใช้เวลาผลิต 7-14 วัน ขึ้นอยู่กับจำนวน'
    },
    {
      icon: Star,
      title: 'ผ้าคุณภาพ',
      description: 'Cotton 100%, CVC, Polyester นุ่มสบาย'
    }
  ];

  const fabricTypes = [
    { name: 'Cotton 100%', desc: 'นุ่มสบาย ซับเหงื่อดี เหมาะกับอากาศร้อน' },
    { name: 'CVC (Cotton-Polyester)', desc: 'นุ่มเหมือนฝ้าย คงทนกว่า ไม่ยับง่าย' },
    { name: 'Polyester', desc: 'เบา ไม่ยับ แห้งไว เหมาะสำหรับกิจกรรม' },
    { name: 'TC (Polyester-Cotton)', desc: 'คงทนสูง สีไม่ตก ซักง่าย' }
  ];

  const printingMethods = [
    { name: 'ซิลค์สกรีน', desc: 'เหมาะสำหรับสกรีนจำนวนมาก สีทึบชัดเจน' },
    { name: 'ดิจิตอลพิมพ์', desc: 'พิมพ์ภาพสีสันสดใส รายละเอียดสูง' },
    { name: 'DTF', desc: 'คุณภาพสูง ทนทาน สีสดชัด' },
    { name: 'ปักโลโก้', desc: 'ดูหรูหรา คงทนนาน' }
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
                  สั่งขั้นต่ำ 50 ตัว
                </div>

                <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                  เสื้อยืด
                </h1>

                <p className="text-gray-600 text-base max-w-md leading-relaxed">
                  รับผลิตเสื้อยืดคอกลม พร้อมสกรีนตามดีไซน์
                  ซิลค์สกรีน ดิจิตอล DTF คุณภาพพรีเมียม
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
                <div className="relative w-full h-full bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg flex items-center justify-center overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTZjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDIyLjYyNyAwIDE2em0zNiAzNmMwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyem0tMzYgMGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyUzAgNTguNjI3IDAgNTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
                  </div>
                  <div className="relative text-center p-8">
                    <div className="text-4xl lg:text-6xl font-black text-white mb-2">T-SHIRT</div>
                    <div className="text-sm text-red-100">Premium Quality</div>
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
                <h2 className="text-3xl lg:text-4xl font-bold mb-3">จุดเด่นของเสื้อยืด</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  สกรีนได้หลากหลายรูปแบบ คุณภาพพรีเมียม
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
              {/* Left - Fabric Types */}
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
                    <h3 className="font-bold text-lg mb-4">ตัวเลือกเพิ่มเติม</h3>
                    <div className="space-y-3">
                      {[
                        'คอวี / คอกลม / คอปก',
                        'แขนยาว / แขนสั้น / แขนกุด',
                        'สกรีนหน้า-หลัง',
                        'เลือกสีเสื้อได้หลากหลาย'
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

              {/* Right - Printing Methods */}
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl font-bold mb-6">วิธีการพิมพ์/สกรีน</h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                    <div className="space-y-4">
                      {printingMethods.map((method, index) => (
                        <div key={index} className="flex items-start pb-4 border-b last:border-b-0 last:pb-0">
                          <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-lg mb-1">{method.name}</p>
                            <p className="text-sm text-gray-600">{method.desc}</p>
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
                      <span className="text-2xl font-bold ml-2">50 ตัว</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-600 mb-4 text-center">ราคาขึ้นอยู่กับ:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'ประเภทผ้าที่เลือก',
                        'จำนวนสั่งผลิต',
                        'วิธีการสกรีน/พิมพ์',
                        'ขนาดและจำนวนสีของงานสกรีน'
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
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">พร้อมสั่งผลิตเสื้อยืดแล้วหรือยัง?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  ส่งดีไซน์มาให้เราช่วยคุณสร้างเสื้อยืดที่โดดเด่น ติดตาไม่รู้ลืม
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
