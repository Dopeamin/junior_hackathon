import { Footer } from "../_shared/footer";
import { Header } from "../_shared/header";
import { About } from "./about";
import { Feature } from "./feature";
import { Hero } from "./hero";
import { Pricing } from "./pricing";
import { Try } from "./try";

export const LandingPage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <Feature />
      <About />
      <Try />
      <Pricing />
      <Footer />
    </div>
  );
};
