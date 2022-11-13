import clsx from "clsx";
import { useEffect, useState } from "react";
import { Wrapper } from "./wrapper";

export const Header = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position);
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
            "min-h-0": position.y < 100,
            "min-h-[200px]": position.y >= 100,
          }
        )}
      ></div>
      <Wrapper>
        <div className="flex flex-row justify-between text-gray-900 items-center w-full">
          <h1 className="w-1/4 text-base md:text-lg font-bold">
            APPLICATION NAME
          </h1>
          <div className="flex flex-row justify-evenly flex-1 font-thin items-center">
            <a className="text-xs">FEATURES</a>

            <a className="text-xs">PRODUCT</a>

            <a className="text-xs">PRICING</a>

            <a className="text-xs">CONTACT</a>
            <div className="flex flex-row gap-4 items-center">
              <a className="px-4 py-2 text-sm font-bold cursor-pointer">
                Sign up
              </a>

              <a className="bg-white shadow-lg rounded-full px-6 py-3 text-sm font-bold cursor-pointer">
                Log in
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
