import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";

export const Portfolio = () => {
  return (
    <div className="max-w-[1440px] m-auto bg-teal-400 p-30">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
};
