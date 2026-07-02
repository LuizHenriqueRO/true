import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Philosophy } from "@/components/Philosophy";
import { Products } from "@/components/Products";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Philosophy />
        <Products />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
