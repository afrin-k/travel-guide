import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Offers from "@/components/Offers";
import Hotels from "@/components/Hotels";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <Contact />
    <Offers />
    <Hotels />
    <Footer />
    </>
);
}