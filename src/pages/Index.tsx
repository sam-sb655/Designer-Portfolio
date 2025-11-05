import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-retro crt-effect">
      <Hero />
      <About />
      <Projects />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
