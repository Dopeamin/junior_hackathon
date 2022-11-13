import { Features } from "./feature";
import { Hero } from "./hero";

export const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
    </div>
  );
};
