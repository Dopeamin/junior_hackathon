import { About } from "./about";
import { Feature } from "./feature";
import { Hero } from "./hero";

export const LandingPage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <Feature />
      <About />
    </div>
  );
};
