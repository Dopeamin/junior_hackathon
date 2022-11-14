import Image from "next/image";
import { BellIcon } from "../_shared/icons/bell.icon";
import { MessageIcon } from "../_shared/icons/message.icon";

export const UserBar = () => {
  return (
    <div className="fixed right-0 top-0 z-2 w-80 h-screen p-10">
      <div className="relative w-full h-full rounded-2xl p-4 flex flex-col gap-10 overflow-hidden">
        <div className="absolute backdrop-blur-xl top-0 left-0 h-full w-full bg-gray-900 opacity-80"></div>
        <div className="relative flex flex-row justify-end w-full gap-4 items-center">
          <MessageIcon />
          <BellIcon />
          <div className="relative rounded-full w-9 h-9 overflow-hidden">
            <Image
              src="/johndoe.jpeg"
              layout="fill"
              objectFit="cover"
              alt={"avatar"}
            />
          </div>
        </div>
        <div className="relative flex flex-col gap-4">
          <h1 className="text-white font-bold text-base">Recent Updates</h1>
          <div className="w-full rounded-full bg-gray-500 p-2 h-6"></div>

          <div className="w-full rounded-full bg-gray-500 p-2 h-6"></div>

          <div className="w-full rounded-full bg-gray-500 p-2 h-6"></div>

          <div className="w-full rounded-full bg-gray-500 p-2 h-6"></div>

          <div className="w-full rounded-full bg-gray-500 p-2 h-6"></div>
        </div>
      </div>
    </div>
  );
};

export const UserBarMinimized = () => {
  return (
    <div className="fixed right-0 top-0 z-2 w-fit h-fit p-10">
      <div className="relative w-full h-fit rounded-2xl px-4 py-2 flex flex-col gap-10 overflow-hidden">
        <div className="absolute backdrop-blur-xl top-0 left-0 h-full w-full bg-gray-900 opacity-80"></div>
        <div className="relative flex flex-row justify-end w-full gap-4 items-center">
          <MessageIcon />
          <BellIcon />
          <div className="relative rounded-full w-9 h-9 overflow-hidden">
            <Image
              src="/johndoe.jpeg"
              layout="fill"
              objectFit="cover"
              alt={"avatar"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
