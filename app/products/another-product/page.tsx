import Link from 'next/link';
import { ArrowLeft, Phone, Mail, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AnotherProductPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'โทรศัพท์',
      description: 'โทรสอบถามได้ทุกวันจันทร์-เสาร์',
      action: 'โทรเลย'
    },
    {
      icon: MessageCircle,
      title: 'Line',
      description: 'แอดไลน์เพื่อปรึกษาและส่งรูปตัวอย่าง',
      action: 'แอดไลน์'
    },
    {
      icon: Mail,
      title: 'อีเมล',
      description: 'ส่งรายละเอียดและรูปภาพมาทางอีเมล',
      action: 'ส่งอีเมล'
    }
  ];

  const otherProductsColumn1 = [
    'หมวก (Caps)',
    'ร่ม (Umbrellas)',
    'กระเป๋าผ้า (Tote Bags)',
    'ผ้าพันคอ (Scarves)',
    'ถุงมือ (Gloves)',
    'แจ็คเก็ต (Jackets)'
  ];

  const otherProductsColumn2 = [
    'เอี๊ยม (Aprons)',
    'ผ้าเช็ดหน้า (Towels)',
    'กระเป๋าเป้ (Backpacks)',
    'ถุงผ้า (Cotton Bags)',
    'พวงกุญแจผ้า (Keychains)',
    'และอื่นๆ อีกมากมาย'
  ];

  const steps = [
    {
      number: '1',
      title: 'บอกความต้องการ',
      description: 'ติดต่อเรา บอกสินค้าที่ต้องการผลิต จำนวน และรายละเอียด'
    },
    {
      number: '2',
      title: 'ส่งรูปหรือให้เราออกแบบ',
      description: 'มีดีไซน์ส่งมาได้เลย หรือให้ทีมเราช่วยออกแบบ'
    },
    {
      number: '3',
      title: 'รับใบเสนอราคา',
      description: 'เราจะประเมินราคาและส่ง mockup ให้ตรวจสอบ'
    },
    {
      number: '4',
      title: 'ยืนยันและเริ่มผลิต',
      description: 'เมื่อตกลงแล้ว เราจะเริ่มผลิตและแจ้งความคืบหน้า'
    },
    {
      number: '5',
      title: 'รับสินค้า',
      description: 'จัดส่งตรงถึงมือคุณ หรือมารับที่โรงงานได้'
    }
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
                  ติดต่อสอบถาม
                </div>

                <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                  สินค้าอื่นๆ
                </h1>

                <p className="text-gray-600 text-base max-w-md leading-relaxed">
                  มีสินค้าอื่นๆ ที่รับผลิตอีกมากมาย
                  ไม่ว่าจะเป็นของใช้ส่วนตัว ของที่ระลึก หรือสินค้าโปรโมชั่น
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-black text-white px-10 py-3.5 rounded-full hover:bg-gray-800 transition-all font-medium text-sm hover:scale-105 text-center"
                  >
                    ติดต่อเราเลย
                  </Link>
                  <Link
                    href="/"
                    className="inline-block bg-white border-2 border-black text-black px-10 py-3.5 rounded-full hover:bg-gray-50 transition-all font-medium text-sm hover:scale-105 text-center"
                  >
                    กลับหน้าหลัก
                  </Link>
                </div>
              </div>

              {/* Right Image Placeholder */}
              <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center">
                <div className="relative w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg flex items-center justify-center overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTZjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMlMwIDIyLjYyNyAwIDE2em0zNiAzNmMwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyem0tMzYgMGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyUzAgNTguNjI3IDAgNTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
                  </div>
                  <div className="relative text-center p-8">
                    <div className="text-4xl lg:text-6xl font-black text-white mb-2">MORE</div>
                    <div className="text-sm text-orange-100">& Many More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Black divider bar */}
        <div className="w-full h-16 bg-black"></div>

        {/* Products List Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal direction="left">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3">สินค้าที่เรารับผลิต</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  นอกจากเสื้อผ้าแล้ว เรายังรับผลิตสินค้าอื่นๆ อีกมากมาย
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {otherProductsColumn1.map((product, index) => (
                      <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">{product}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {otherProductsColumn2.map((product, index) => (
                      <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-white rounded-xl border-2 border-black">
                <p className="text-center text-gray-700">
                  <strong>หมายเหตุ:</strong> หากคุณมีความต้องการผลิตสินค้าประเภทอื่นที่ไม่ได้ระบุไว้
                  สามารถติดต่อสอบถามได้เลย เรายินดีรับฟังและหาทางช่วยคุณ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ScrollReveal direction="right" delay={0}>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center h-full">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="font-bold text-lg mb-2">ออกแบบตามต้องการ</h3>
                  <p className="text-gray-600 text-sm">
                    ทีมดีไซเนอร์พร้อมช่วยออกแบบให้ตรงใจ
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.1}>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center h-full">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-bold text-lg mb-2">ผลิตเร็ว คุณภาพดี</h3>
                  <p className="text-gray-600 text-sm">
                    ใช้เวลาผลิตรวดเร็ว ไม่ลดคุณภาพ
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center h-full">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="font-bold text-lg mb-2">ราคาย่อมเยา</h3>
                  <p className="text-gray-600 text-sm">
                    ราคาที่เป็นธรรม สั่งมากยิ่งถูก
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal direction="left">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3">ช่องทางการติดต่อ</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  พร้อมให้คำปรึกษาและตอบทุกคำถาม
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {contactMethods.map((method, index) => (
                <ScrollReveal
                  key={index}
                  direction="left"
                  delay={index * 0.1}
                  className="h-full"
                >
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
                    <div className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <method.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 flex-1">
                      {method.description}
                    </p>
                    <Link
                      href="/contact"
                      className="block w-full bg-black text-white text-center py-2.5 rounded-full hover:bg-gray-800 transition-all font-medium text-sm hover:scale-105"
                    >
                      {method.action}
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal direction="left">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3">ขั้นตอนการสั่งผลิต</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  ง่ายและสะดวก เพียง 5 ขั้นตอน
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal direction="left">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">พร้อมเริ่มต้นแล้วหรือยัง?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  ไม่ว่าคุณจะต้องการผลิตสินค้าประเภทไหน เรายินดีรับฟังและให้คำปรึกษา
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link
                    href="/contact"
                    className="inline-block bg-black text-white px-10 py-3.5 rounded-full hover:bg-gray-800 transition-all font-medium text-sm hover:scale-105"
                  >
                    ติดต่อเราเลย
                  </Link>
                  <Link
                    href="/"
                    className="inline-block bg-white border-2 border-black text-black px-10 py-3.5 rounded-full hover:bg-gray-50 transition-all font-medium text-sm hover:scale-105"
                  >
                    กลับหน้าหลัก
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
