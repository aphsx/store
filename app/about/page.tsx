import Link from 'next/link';
import { Award, Printer, Scissors, MapPin, Mail, Phone } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              RIDGEBACK GARMENT
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-700">
              #โรงงานหมาดำ
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ผู้ผลิตและจัดจำหน่ายเสื้อผ้าและสิ่งทอคุณภาพสูง ด้วยประสบการณ์กว่า 18 ปี
              ในอุตสาหกรรมเครื่องนุ่งห่ม พร้อมระบบดิจิทัลที่ทันสมัย รวดเร็ว และมีประสิทธิภาพ
            </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">บริการของเรา</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ridgeback Garment เชี่ยวชาญด้านการผลิตและจัดจำหน่ายเสื้อผ้าและสิ่งทอคุณภาพสูง
                  ด้วยประสบการณ์กว่า 18 ปีในอุตสาหกรรมเครื่องนุ่งห่ม
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  เรามีบริการสกรีนและปัก ด้วยระบบดิจิทัลที่ครบวงจร ทำงานอย่างมีประสิทธิภาพ
                  รวดเร็ว และราคาสมเหตุสมผล พร้อมให้บริการออกแบบและผลิตครบวงจร
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    เสื้อโปโล, เสื้อยืด, แจ็คเก็ต
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    ชุดกีฬาพร้อมพิมพ์ลาย
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    กระเป้าผ้า, ผ้ากันเปื้อน, หมวก, ร่ม
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    บริการจัดหาสินค้าพรีเมี่ยมคุณภาพสูง
                  </p>
                </div>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center">
                <div className="text-7xl font-black text-white opacity-20">RIDGEBACK</div>
              </div>
            </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              ความเชี่ยวชาญของเรา
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Digital Printing */}
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Printer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">ระบบดิจิทัลครบวงจร</h3>
                <p className="text-gray-600 text-sm">
                  บริการสกรีนและปักด้วยระบบดิจิทัลที่ทันสมัย มีประสิทธิภาพและความรวดเร็วสูง
                </p>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">ประสบการณ์ 18 ปี</h3>
                <p className="text-gray-600 text-sm">
                  มากกว่า 18 ปีในอุตสาหกรรมการผลิตเครื่องนุ่งห่ม พร้อมความเชี่ยวชาญที่สั่งสมมา
                </p>
              </div>

              {/* Technology */}
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">เทคโนโลยีล้ำสมัย</h3>
                <p className="text-gray-600 text-sm">
                  เทคนิคการพิมพ์แบบ Sublimation และเครื่องตัดเลเซอร์ผ้า ด้วยเทคโนโลยีที่ทันสมัย
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                เกี่ยวกับเรา
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Ridgeback Garment หรือ #โรงงานหมาดำ ก่อตั้งขึ้นด้วยวิสัยทัศน์ที่ชัดเจนในการเป็น
                  ผู้นำด้านการผลิตและจัดจำหน่ายเสื้อผ้าและสิ่งทอคุณภาพสูง ด้วยประสบการณ์กว่า 18 ปี
                  ในอุตสาหกรรมเครื่องนุ่งห่ม
                </p>

                <p>
                  เราเชี่ยวชาญในการผลิตสินค้าหลากหลายประเภท ตั้งแต่เสื้อโปโล เสื้อยืด แจ็คเก็ต
                  ชุดกีฬาพร้อมพิมพ์ลาย ไปจนถึงกระเป้าผ้า ผ้ากันเปื้อน หมวก และร่ม
                  พร้อมทั้งให้บริการจัดหาสินค้าพรีเมี่ยมคุณภาพสูง
                </p>

                <p>
                  จุดเด่นของเราคือการใช้ระบบดิจิทัลที่ครบวงจร ทั้งบริการสกรีนและปัก
                  ด้วยเทคโนโลยีที่ทันสมัยอย่างการพิมพ์แบบ Sublimation และเครื่องตัดเลเซอร์ผ้า
                  ทำให้เราสามารถทำงานได้อย่างมีประสิทธิภาพ รวดเร็ว และราคาสมเหตุสมผล
                </p>

                <p>
                  เรามุ่งมั่นที่จะให้บริการออกแบบและผลิตครบวงจร เพื่อตอบสนองความต้องการของลูกค้า
                  ทุกระดับด้วยคุณภาพและความใส่ใจในทุกรายละเอียด
                </p>

                <div className="pt-6 border-t mt-8">
                  <p className="font-semibold text-black mb-2">ติดต่อเรา</p>
                  <p className="text-sm">Email: P.KMONGKOL@RIDGEBACKGARMENT.COM</p>
                  <div className="flex gap-4 mt-3 text-sm">
                    <a href="https://www.facebook.com/Ridgebackbrand" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline">
                      Facebook: Ridgebackbrand
                    </a>
                    <span>|</span>
                    <a href="https://www.facebook.com/DTFPLUS" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline">
                      Facebook: DTFPLUS
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              ที่ตั้งของเรา
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-6">ข้อมูลติดต่อ</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">ที่อยู่</p>
                        <p className="text-gray-600 text-sm">
                          กรุงเทพมหานคร ประเทศไทย<br />
                          (กรุณาติดต่อเพื่อขอข้อมูลที่อยู่โดยละเอียด)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">อีเมล</p>
                        <a href="mailto:P.KMONGKOL@RIDGEBACKGARMENT.COM"
                           className="text-blue-600 hover:underline text-sm">
                          P.KMONGKOL@RIDGEBACKGARMENT.COM
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">โทรศัพท์</p>
                        <p className="text-gray-600 text-sm">
                          กรุณาติดต่อทางอีเมลเพื่อสอบถามข้อมูล
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="font-semibold mb-3">ติดตามเราได้ที่</p>
                    <div className="space-y-2 text-sm">
                      <a href="https://www.facebook.com/Ridgebackbrand"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center gap-2 text-blue-600 hover:underline">
                        Facebook: Ridgebackbrand
                      </a>
                      <a href="https://www.facebook.com/DTFPLUS"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center gap-2 text-blue-600 hover:underline">
                        Facebook: DTFPLUS
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">เวลาทำการ</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>จันทร์ - ศุกร์</span>
                      <span className="font-semibold">09:00 - 18:00 น.</span>
                    </div>
                    <div className="flex justify-between">
                      <span>เสาร์</span>
                      <span className="font-semibold">09:00 - 16:00 น.</span>
                    </div>
                    <div className="flex justify-between">
                      <span>อาทิตย์</span>
                      <span className="font-semibold">ปิดทำการ</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248057.77348311606!2d100.49236208715817!3d13.736717450735673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              พร้อมที่จะเลือกสินค้าคุณภาพแล้วหรือยัง?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              เลือกชมคอลเลคชั่นสินค้าของเรา และค้นพบเสื้อผ้าที่ใช่สำหรับคุณ
            </p>
            <Link
              href="/shop"
              className="inline-block bg-white text-black px-12 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              เลือกซื้อสินค้า
            </Link>
        </div>
      </section>
    </div>
  );
}
