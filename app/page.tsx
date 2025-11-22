import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProductCategories from '@/components/home/ProductCategories';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProductCategories />
      <Newsletter />
    </main>
  );
}
