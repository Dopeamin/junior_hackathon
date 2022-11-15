import { Badge } from "../_shared/badge";
import { Button } from "../_shared/button";
import { Card } from "../_shared/card";
import { ChartIcon } from "../_shared/icons/chart.icon";
import { ReportIcon } from "../_shared/icons/report.icon";
import { SliderIcon } from "../_shared/icons/slider.icon";
import { Wrapper } from "../_shared/wrapper";
import { PricingCard } from "./pricing_card";

export const Pricing = () => {
  return (
    <div className="gradient pb-10">
      <Wrapper>
        <div className="flex flex-col w-full justify-center items-center gap-10">
          <Badge text="Pricing" />
          <h2 className="max-w-[700px] my-4 text-center text-xl font-light tracking-wider">
            We have several plans, choose the one that fits your needs the best
          </h2>
          <div className="flex flex-col lg:flex-row w-full lg:items-end justify-between gap-10">
            <PricingCard big={false}>
              <div className="flex flex-col w-full items-center md:w-[250px] gap-4">
                <h3 className="text-2xl text-gray-900">Pro</h3>
                <p className="text-xs font-light text-gray-900 text-center">
                  Up to 3 HR members in your team & 10 job offers a month
                </p>
                <h3 className="text-6xl my-4 text-gray-900 tracking-widest">
                  80<span className="text-2xl">DT</span>
                </h3>
                <p className="text-xs font-light text-gray-900">Per Month</p>
                <Button
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                >
                  <p className="text-white text-xs font-light">Try it</p>
                </Button>
              </div>
            </PricingCard>
            <PricingCard big={true}>
              <div className="flex flex-col w-full h-full justify-between items-center md:w-[250px] gap-4">
                <h3 className="text-2xl text-gray-900">Business</h3>
                <p className="text-xs font-light text-gray-900">
                  Up to 10 HR Member & unlimited job offers
                </p>
                <h3 className="text-6xl my-4 text-gray-900 tracking-widest">
                  120<span className="text-2xl">DT</span>
                </h3>
                <p className="text-xs font-light text-gray-900">Per Month</p>
                <Button
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                >
                  <p className="text-white text-xs font-light">Start Now</p>
                </Button>
              </div>
            </PricingCard>
            <PricingCard big={false}>
              <div className="flex flex-col w-full items-center md:w-[250px] gap-4">
                <h3 className="text-2xl text-gray-900">Buisiness Plus</h3>
                <p className="text-xs font-light text-gray-900">
                  Unlimited Members and unlimited Job Offers
                </p>
                <h3 className="text-6xl my-4 text-gray-900 tracking-widest">
                  160<span className="text-2xl">DT</span>
                </h3>
                <p className="text-xs font-light text-gray-900">Per Month</p>

                <Button
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                >
                  <p className="text-white text-xs font-light">Try it</p>
                </Button>
              </div>
            </PricingCard>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
