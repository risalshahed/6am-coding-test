import Banners from "@/components/Banners";
import Footer from "@/components/global/Footer/Footer";
import Header from "@/components/global/Header/Header";
import Products from "@/components/Products/Products";
import Recommendations from "@/components/Products/Recommendations";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className='relative'>
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <Banners />
        <Recommendations />
        <Products />
        <Services />
      </main>
      <Footer />
    </div>
  );
}