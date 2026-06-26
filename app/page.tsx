import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CarePlans from "@/components/CarePlans";
import Responsible from "@/components/Responsible";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Mountains from "@/components/Mountains";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ color: "#14202B" }}>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <CarePlans />
      <Responsible />
      <Philosophy />
      <Contact />
      <Mountains />
      <Footer />
    </main>
  );
}
