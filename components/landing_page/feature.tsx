import { Badge } from "../_shared/badge";
import { Card } from "../_shared/card";
import { ChartIcon } from "../_shared/icons/chart.icon";
import { ReportIcon } from "../_shared/icons/report.icon";
import { SliderIcon } from "../_shared/icons/slider.icon";
import { Wrapper } from "../_shared/wrapper";

export const Feature = () => {
  return (
    <Wrapper>
      <div className="flex flex-col w-full justify-center items-center gap-10">
        <Badge text="Features" />
        <h2 className="max-w-[700px] my-4 text-center text-xl font-light tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          quaerat totam ducimus velit omnis? Esse fugiat{" "}
        </h2>
        <div className="flex flex-col lg:flex-row w-full justify-evenly">
          <Card bgColor="#C3E1FE">
            <div className="flex flex-col w-full md:w-[220px] gap-4">
              <ReportIcon />
              <h3 className="text-blue-900">Reports</h3>
              <p className="text-xs font-light text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                nihil reiciendis aliquid{" "}
              </p>
            </div>
          </Card>

          <div className="-translate-y-4">
            <Card bgColor="#FFF6D4">
              <div className="flex flex-col w-full md:w-[220px] gap-4">
                <ChartIcon />
                <h3 className="text-yellow-600">Analytics</h3>
                <p className="text-xs font-light text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  nihil reiciendis aliquid{" "}
                </p>
              </div>
            </Card>
          </div>

          <div className="">
            <Card bgColor="#C3C9FE">
              <div className="flex flex-col w-full md:w-[220px] gap-4">
                <SliderIcon />
                <h3 className="text-violet-900">Costumizable</h3>
                <p className="text-xs font-light text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  nihil reiciendis aliquid{" "}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
