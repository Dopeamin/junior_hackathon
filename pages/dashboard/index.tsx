import { useState } from "react";
import { SideBar } from "../../components/dashboard/sidebar";

export default function Dashboard() {
  const [collapsed, collapse] = useState(false);

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
      <div className="relative ml-40"></div>
    </div>
  );
}
