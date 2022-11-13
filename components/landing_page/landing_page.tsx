import { Feature } from "./feature";
import { Hero } from "./hero";

export const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Feature />
    </div>
  );
};
