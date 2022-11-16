import Image from "next/image";
import { Badge } from "../_shared/badge";
import { Wrapper } from "../_shared/wrapper";
import { Card } from "./card";

export const About = () => {
  return (
    <Wrapper>
      <div className="relative flex flex-row w-full my-10 md:my-40">
        <div className="flex-1 flex flex-col w-full max-w-[600px]">
          <Badge text="Why choose us" />
          <h2 className="max-w-[700px] my-8 text-left text-2xl font-light tracking-wider m-0">
            Many recruitment processes have proven to be extremely biased,
            making it a roadblock for hiring top talent.
          </h2>
          <p className="text-xs font-light text-gray-700">
            Our Solution is An app powered by AI that DETECTS hiring bias and significantly
            IMPROVES your companyss recruiting process
          </p>
        </div>
      </div>

      <div className="hidden absolute lg:flex top-0 -right-32 w-[600px] h-full">
        <Image
          src="/screenshot2.png"
          alt="screenshot"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
        ></Image>

        <div className="z-2 absolute bottom-28 md:bottom-20 -left-10 floating">
          <Card>
            <p className="text-9xl">🧑🏻‍💻</p>
          </Card>
        </div>
      </div>
    </Wrapper>
  );
};
