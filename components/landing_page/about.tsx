import Image from "next/image";
import { Badge } from "../_shared/badge";
import { Wrapper } from "../_shared/wrapper";
import { Card } from "./card";

export const About = () => {
  return (
    <Wrapper>
      <div className="relative flex flex-row w-full my-40">
        <div className="flex-1 flex flex-col w-full max-w-[600px]">
          <Badge text="Why choose us" />
          <h2 className="max-w-[700px] my-8 text-left text-2xl font-light tracking-wider m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            quaerat totam ducimus velit omnis? Esse fugiat{" "}
          </h2>
          <p className="text-xs font-light text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            veritatis commodi vitae nostrum ad aut aliquam, eligendi a dolore
            deleniti non ab aspernatur odit repellat quo architecto error
            voluptatibus officiis.
          </p>
        </div>
      </div>

      <div className="hidden absolute md:flex top-0 -right-32 w-[600px] h-full">
        <Image
          src="/screenshot2.png"
          alt="screenshot"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
        ></Image>

        <div className="z-2 absolute top-28 md:top-20 -left-10 floating">
          <Card>
            <p className="text-9xl">🧑🏻‍💻</p>
          </Card>
        </div>
      </div>
    </Wrapper>
  );
};
