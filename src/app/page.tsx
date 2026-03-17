import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Lookbook from "@/components/Lookbook";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import GlobalReach from "@/components/GlobalReach";
import News from "@/components/News";
import DealerCTA from "@/components/DealerCTA";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Categories />
        <FeaturedProducts />
        <PromoBanner />
        <WhyChooseUs />
        <Lookbook />
        <Certifications />
        <Testimonials />
        <GlobalReach />
        <News />
        <DealerCTA />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
