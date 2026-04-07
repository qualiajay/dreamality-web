import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Experience from "@/components/Experience";
import Emotional from "@/components/Emotional";
import Showcase from "@/components/Showcase";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Experience />
        <Emotional />
        <Showcase />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
