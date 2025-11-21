import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const styles = [
  { name: 'Casual', href: '/shop?style=casual' },
  { name: 'Formal', href: '/shop?style=formal' },
  { name: 'Party', href: '/shop?style=party' },
  { name: 'Gym', href: '/shop?style=gym' },
];

export default function BrowseByStyle() {
  return (
    <section className="py-20 bg-gray-100">
      <ScrollReveal>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {styles.map((style) => (
            <Link
              key={style.name}
              href={style.href}
              className="group relative overflow-hidden rounded-2xl bg-white hover:shadow-lg transition-all duration-300 h-56"
            >
              <div className="relative h-full bg-linear-to-br from-gray-50 to-gray-100">
                {/* Placeholder image area */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="text-9xl font-black text-gray-300">
                    {style.name.charAt(0)}
                  </div>
                </div>

                {/* Style name */}
                <div className="absolute top-6 left-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    {style.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
