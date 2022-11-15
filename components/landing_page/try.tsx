import clsx from "clsx";
import Image from "next/image";
import Router from "next/router";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Badge } from "../_shared/badge";
import { Button } from "../_shared/button";
import { Wrapper } from "../_shared/wrapper";
import { Card } from "./card";

export const Try = () => {
  const myRef = useRef(null);
  const { inViewport, enterCount, leaveCount } = useInViewport(myRef);
  return (
    <Wrapper>
      <div
        className={clsx(
          "relative flex flex-col md:flex-row w-full md:my-20 justify-between gap-4 items-center transition-all duration-1000 delay-100 ease-out",
          {
            "!translate-y-0 opacity-1": inViewport || enterCount,
            "opacity-0 translate-y-full": !inViewport && !enterCount,
          }
        )}
        ref={myRef}
      >
        <div className="relative flex-1 flex flex-col flex-start min-h-[400px] w-full">
          <Image
            src="/screenshot.png"
            alt="screen"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />

          <div className="z-2 absolute bottom-10 md:-bottom-10 right-10 floating">
            <Card>
              <p className="text-9xl">📑</p>
            </Card>
          </div>
        </div>
        <div className="flex-1 flex flex-col w-full max-w-[600px]">
          <Badge text="Try it now" />
          <h2 className="max-w-[700px] my-8 text-left text-2xl font-light tracking-wider m-0">
            We have a free trial version that you can try for a limited period
            of 30 days, with all the functionalities unlocked
          </h2>
          <div className="flex flex-row items-center gap-4">
            <Button
              onClick={() => {
                Router.push("signup");
              }}
            >
              <p className="text-white text-xs font-light">Try it free</p>
            </Button>
            <div className="cursor-pointer px-6 py-4 hover:bg-gray-900 transition-all hover:text-white rounded">
              <p className="text-xs font-light">Contact us ☎️</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
