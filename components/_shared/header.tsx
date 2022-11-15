import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Wrapper } from "./wrapper";

export const Header = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    setPosition({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  return (
    <div className="z-10 fixed w-full overflow-hidden">
      <div
        className={clsx(
          "absolute w-full top-0 w-full left-0 transition-all duration-500 ease-in-out bg-white shadow-lg",
          {
            "min-h-0": position.y < 50,
            "min-h-[200px]": position.y >= 50,
          }
        )}
      ></div>
      <Wrapper>
        <div className="flex flex-row justify-between text-gray-900 items-center w-full">
          <Link href="/">
            <div className="relative w-40 h-8">
              <Image
                src="/logo-without-moto.svg"
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </div>
          </Link>
          <div className="flex flex-row justify-evenly flex-1 font-light items-center">
            <a className="text-xs">FEATURES</a>

            <a className="text-xs">PRODUCT</a>

            <a className="text-xs">PRICING</a>

            <a className="text-xs">CONTACT</a>
            <div className="flex flex-row gap-4 items-center">
              <Link href={"/signup"}>
                <p className="px-4 py-2 text-sm font-bold cursor-pointer">
                  Sign up
                </p>
              </Link>

              <Link href={"/login"}>
                <p className="bg-white shadow-lg rounded-full px-6 py-3 text-sm font-bold cursor-pointer">
                  Log in
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
