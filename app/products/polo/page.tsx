'use client';

import Link from 'next/link';
import { Check, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function PoloShirtPage() {
  const [selectedFabric, setSelectedFabric] = useState(0);

  const fabrics = [
    { name: 'CVC', ratio: '60/40', price: 180, color: 'from-blue-400 to-blue-500' },
    { name: 'TC', ratio: '65/35', price: 160, color: 'from-purple-400 to-purple-500' },
    { name: 'Pique', ratio: '100% Cotton', price: 220, color: 'from-green-400 to-green-500' },
    { name: 'Lacoste', ratio: '100% Cotton', price: 280, color: 'from-orange-400 to-orange-500' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
            <Link href="/" className="hover:text-white">หน้าหลัก</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">เสื้อโปโล</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-6">
                ✨ สั่งผลิตตั้งแต่ 50 ตัว
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                เสื้อโปโลสั่งผลิต<br />
                ตามดีไซน์
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                ออกแบบได้ทุกรายละเอียด ตัดต่อ กุ้น ปัก สกรีน<br />
                ผ้าคุณภาพหลากหลายให้เลือก ราคาเริ่มต้น ฿180/ตัว
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all"
                >
                  ขอใบเสนอราคาฟรี
                </Link>
                <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                  ดูตัวอย่างผลงาน
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white/50">
                    <div className="text-8xl font-black mb-4">POLO</div>
                    <div className="text-lg">Product Showcase</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">คุณภาพรับประกัน</div>
                    <div className="text-sm text-gray-600">200+ ลูกค้าพึงพอใจ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Selection */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">เลือกประเภทผ้า</h2>
            <p className="text-gray-600 text-lg">แต่ละประเภทมีคุณสมบัติและราคาที่แตกต่างกัน</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {fabrics.map((fabric, index) => (
              <button
                key={index}
                onClick={() => setSelectedFabric(index)}
                className={`relative overflow-hidden rounded-2xl p-6 transition-all ${
                  selectedFabric === index
                    ? 'ring-4 ring-purple-600 shadow-xl scale-105'
                    : 'bg-white hover:shadow-lg'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${fabric.color} opacity-10`}></div>
                <div className="relative">
                  <div className="text-2xl font-bold mb-2">{fabric.name}</div>
                  <div className="text-sm text-gray-600 mb-4">{fabric.ratio}</div>
                  <div className="text-3xl font-bold text-purple-600">฿{fabric.price}</div>
                  <div className="text-xs text-gray-500">ต่อตัว (50+ ตัว)</div>
                </div>
                {selectedFabric === index && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Fabric Details */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">รายละเอียด {fabrics[selectedFabric].name}</h3>
                <div className="space-y-4">
                  {[
                    'ผสมผสานคุณภาพระหว่างฝ้ายและโพลีเอสเตอร์',
                    'นุ่มสบาย ระบายอากาศดี',
                    'ไม่ยับง่าย ดูแลรักษาง่าย',
                    'คงทนทาน ซักได้ไม่หลุดลอก',
                    'เหมาะสำหรับการใช้งานประจำวัน'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">เหมาะสำหรับ</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '👔', title: 'เครื่องแบบพนักงาน' },
                    { icon: '🎓', title: 'เสื้อนักเรียน/นักศึกษา' },
                    { icon: '🏢', title: 'บริษัท/องค์กร' },
                    { icon: '🎯', title: 'กิจกรรม/อีเว้นท์' }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="text-sm font-medium text-gray-700">{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">ปรับแต่งได้ตามต้องการ</h2>
            <p className="text-gray-600 text-lg">เลือกรูปแบบและสไตล์ที่คุณชอบ</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'รูปแบบการตัดเย็บ',
                icon: '✂️',
                items: ['ตัดต่อคอ สี', 'ตัดต่อแขน', 'กุ้นคอและแขน', 'เพิ่มกระเป๋าด้านข้าง', 'ปรับแต่งแบบพิเศษ']
              },
              {
                title: 'การปักและสกรีน',
                icon: '🎨',
                items: ['ปักโลโก้อก', 'ปักแขนเสื้อ', 'ซิลค์สกรีน', 'ดิจิตอลพิมพ์', 'DTF Transfer']
              },
              {
                title: 'ตัวเลือกเพิ่มเติม',
                icon: '⚙️',
                items: ['แขนสั้น/ยาว/จั้ม', 'คอปกแข็ง/นุ่ม', 'กระดุม 2-5 เม็ด', 'ไซส์ S-6XL', 'สีเสื้อหลากหลาย']
              }
            ].map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-bold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <ChevronRight className="w-4 h-4 text-purple-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ขั้นตอนการสั่งผลิต</h2>
            <p className="text-purple-100 text-lg">ง่ายและรวดเร็ว เพียง 4 ขั้นตอน</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'ส่งดีไซน์', desc: 'ส่งไฟล์หรือไอเดีย ให้เราออกแบบ' },
              { step: '02', title: 'ใบเสนอราคา', desc: 'รับ mockup และใบเสนอราคาฟรี' },
              { step: '03', title: 'ผลิต', desc: 'เริ่มผลิตภายใน 1-2 วัน' },
              { step: '04', title: 'จัดส่ง', desc: 'ได้รับสินค้าภายใน 7-14 วัน' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="text-6xl font-bold opacity-20 mb-4">{item.step}</div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-purple-100 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-white/30">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">พร้อมสั่งผลิตเสื้อโปโลแล้วหรือยัง?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                ติดต่อเราวันนี้เพื่อรับคำปรึกษาและใบเสนอราคาฟรี ไม่มีค่าใช้จ่าย
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>โทรปรึกษาเลย</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>แชทกับเรา</span>
                </Link>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { number: '200+', label: 'ลูกค้าพึงพอใจ' },
                    { number: '18+', label: 'ปีประสบการณ์' },
                    { number: '100%', label: 'รับประกันคุณภาพ' }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-4xl font-bold mb-2">{stat.number}</div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
