import { Printer, Sparkles, Palette, Scissors } from 'lucide-react';
import { services } from '@/lib/data/services';
import ScrollReveal from '@/components/ui/ScrollReveal';

const iconMap: Record<string, any> = {
  Printer,
  Sparkles,
  Palette,
  Scissors
};

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal direction="left">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">บริการของเรา</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ครบครันด้วยเทคโนโลยีการผลิตและตกแต่งสินค้าที่ทันสมัย พร้อมทีมงานมืออาชีพที่มีประสบการณ์
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal
                key={service.id}
                direction="left"
                delay={index * 0.1}
              >
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{service.nameEn}</p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-start text-sm text-gray-700">
                        <span className="text-black mr-2">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {service.minQuantity && (
                    <div className="text-xs text-gray-500 pt-3 border-t border-gray-200">
                      สั่งขั้นต่ำ: {service.minQuantity} ชิ้น
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="left" delay={0.4}>
          <div className="text-center mt-10">
            <a
              href="/about"
              className="inline-block bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800 transition-all font-medium text-sm hover:scale-105"
            >
              เรียนรู้เพิ่มเติม
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
