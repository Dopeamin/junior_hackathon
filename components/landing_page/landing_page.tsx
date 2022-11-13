import handleViewport from "react-in-viewport";
import { Footer } from "../_shared/footer";
import { Header } from "../_shared/header";
import { About } from "./about";
import { Feature } from "./feature";
import { Hero } from "./hero";
import { Pricing } from "./pricing";
import { Try } from "./try";

export const LandingPage = () => {
  const ViewPortBlock = handleViewport(Feature);
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <ViewPortBlock onEnterViewport={() => console.log('enter')}/>
      <About />
      <Try />
      <Pricing />
      <Footer />
    </div>
  );
};
