import HeroSection from '@/components/home/HeroSection';
import NewArrivals from '@/components/home/NewArrivals';
import TopSelling from '@/components/home/TopSelling';
import BrowseByStyle from '@/components/home/BrowseByStyle';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <Newsletter />
    </main>
  );
}
