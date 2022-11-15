import clsx from "clsx";
import config from "next/config";
import { RefObject, useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Badge } from "../_shared/badge";
import { Card } from "../_shared/card";
import { ChartIcon } from "../_shared/icons/chart.icon";
import { ReportIcon } from "../_shared/icons/report.icon";
import { SliderIcon } from "../_shared/icons/slider.icon";
import { Wrapper } from "../_shared/wrapper";

export const Feature = () => {
  const myRef = useRef(null);
  const { inViewport, enterCount, leaveCount } = useInViewport(myRef);
  return (
    <div ref={myRef}>
      <Wrapper>
        <div
          className={clsx(
            "flex flex-col w-full justify-center items-center gap-10 gradient-radial py-16 transition-all ease-out duration-1000 delay-100 translate-y-full",
            {
              "!translate-y-0 opacity-1": inViewport || enterCount,
              "opacity-0": !inViewport && !enterCount,
            }
          )}
        >
          <Badge text="Features" />
          <h2 className="max-w-[700px] my-4 text-center text-xl font-light tracking-wider">
            We offer a variety of tools and features that help ensure the good
            management of your HR Department
          </h2>

          <div className="flex flex-col lg:flex-row w-full justify-between gap-10">
            <Card bgColor="#C3E1FE">
              <div className="flex flex-col w-full md:w-[250px] gap-4">
                <ReportIcon />
                <h3 className="text-blue-900">Reports</h3>
                <p className="text-xs font-light text-gray-700">
                  Automatically summarize your candidates data and compatibility
                  to your job offer
                </p>
              </div>
            </Card>

            <div className="md:-translate-y-4">
              <Card bgColor="#FFF6D4">
                <div className="flex flex-col w-full md:w-[250px] gap-4">
                  <ChartIcon />
                  <h3 className="text-yellow-600">Analytics</h3>
                  <p className="text-xs font-light text-gray-700">
                    We analyse your latest decisions and choices to find the
                    best way to improve your recrutement process
                  </p>
                </div>
              </Card>
            </div>

            <div className="">
              <Card bgColor="#C3C9FE">
                <div className="flex flex-col w-full md:w-[250px] gap-4">
                  <SliderIcon />
                  <h3 className="text-violet-900">Costumizable</h3>
                  <p className="text-xs font-light text-gray-700">
                    Costumize your recrutement strategy to your needs and goals
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
