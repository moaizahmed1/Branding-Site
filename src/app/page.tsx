import { About } from "@/components/sections/About";
import { Analysis } from "@/components/sections/Analysis";
import { Contact } from "@/components/sections/Contact";
import { Events } from "@/components/sections/Events";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Insights } from "@/components/sections/Insights";
import { Packages } from "@/components/sections/Packages";
import { Process } from "@/components/sections/Process";
import { Quote } from "@/components/sections/Quote";
import { Representation } from "@/components/sections/Representation";
import { Why } from "@/components/sections/Why";

export default function Home() {
  return (
    <main>
      <Hero />
      <Quote />
      <About />
      <Why />
      <Process />
      <Packages />
      <Analysis />
      <Representation />
      <Events />
      <Insights />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
