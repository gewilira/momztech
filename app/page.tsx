import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CarePlans from "@/components/CarePlans";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ color: "#F4EBE0" }}>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <CarePlans />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
