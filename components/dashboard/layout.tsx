import clsx from "clsx";
import { useState } from "react";
import { SideBar } from "./sidebar";

export const DashboardLayout = ({ children }: any) => {
  const [collapsed, collapse] = useState(true);

  return (
    <div className="relative min-h-[100vh] w-full">
      <div className="fixed bg-gray-100 z-1 top-0 left-0 w-full h-[100vh]"></div>
      <div className="fixed top-0 left-0 z-10">
        <SideBar
          collapse={() => collapse(!collapsed)}
          collapsed={collapsed}
        ></SideBar>
      </div>
      <div className="z-2 fixed -top-10 -left-[50%] w-full h-[100vh] gradient-radial-2"></div>
      <div
        className={clsx("relative w-full transition-all duration-500 ease-out", {
          " pl-40": collapsed,
          " pl-72": !collapsed,
        })}
      >
        {children}
      </div>
    </div>
  );
};
