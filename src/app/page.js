import Banners from "@/components/Banners";
import Footer from "@/components/global/Footer/Footer";
import Header from "@/components/global/Header/Header";
import Products from "@/components/Products/Products";
import Recommendations from "@/components/Products/Recommendations";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-24">
        <Banners />
        <Recommendations />
        <Products />
      </main>
      <Footer />
    </div>
  );
}