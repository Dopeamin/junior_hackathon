import { About } from "./about";
import { Feature } from "./feature";
import { Hero } from "./hero";
import { Pricing } from "./pricing";
import { Try } from "./try";

export const LandingPage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <Feature />
      <About />
      <Try />
      <Pricing />
    </div>
  );
};
