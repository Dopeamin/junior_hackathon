import Image from "next/image";
import Router from "next/router";
import { useState, useEffect } from "react";
import { Button } from "../_shared/button";
import { Wrapper } from "../_shared/wrapper";
import { Card } from "./card";

export const Hero = () => {
  return (
    <>
      <div className="z-1 relative w-full bg-blue-200 min-h-[600px] flex-col justify-center items-center pt-40">
        <Wrapper>
          <div className="flex flex-col gap-4 justify-center items-center max-w-[800px]">
            <h1 className="text-4xl text-center font-bold  tracking-widest">
              Manage Your HR Departement Using Our Cutting Edge Technology
            </h1>
            <p className="text-center my-5 text-xs text-gray-800">
              Manage your job offers , review your applications, invite your
              team and keep track of your statistics and ensure a diverse
              recrutement process
            </p>
            <Button
              onClick={() => {
                Router.push("signup");
              }}
            >
              <p className="text-white text-xs font-light bouncing">
                Get Started 👋
              </p>
            </Button>
          </div>
        </Wrapper>
      </div>
      <div className="relative w-full max-w-[900px] mx-auto relative h-[600px] -translate-y-[150px]">
        <Image
          src={"/screenshot.png"}
          alt={"screenshot"}
          layout="fill"
          objectFit="contain"
          className="relaive z-1"
        />
        <div className="z-2 absolute bottom-10 left-40 floating">
          <Card>
            <p className="text-6xl">✌️</p>
          </Card>
        </div>

        <div className="z-2 absolute top-32 md:top-10 right-5 md:right-40 floating">
          <Card>
            <p className="text-6xl">👋</p>
          </Card>
        </div>

        <div className="z-2 absolute top-28 md:top-20 left-20 floating">
          <Card>
            <p className="text-9xl">👇</p>
          </Card>
        </div>
      </div>
    </>
  );
};
