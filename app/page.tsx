import HeroSection from '@/components/home/HeroSection';
import NewArrivals from '@/components/home/NewArrivals';
import TopSelling from '@/components/home/TopSelling';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewArrivals />
      <TopSelling />
    </main>
  );
}
