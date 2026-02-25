import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>M Zain Abbas | Software Engineer & Web Developer</title>
        <meta name="description" content="Portfolio of M Zain Abbas - Software Engineer and Web Developer with profound experience in the MERN stack, Next.js, Tailwind CSS, WordPress, and Wix." />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
