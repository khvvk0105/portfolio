import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";

export const Portfolio = () => {
  return (
    <div className="max-w-[1440px] m-auto p-30">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
    </div>
  );
};
