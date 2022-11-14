import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon } from "../_shared/icons/arrow-right.icon";
import { DocumentIcon } from "../_shared/icons/document.icon";
import { OverviewIcon } from "../_shared/icons/overview.icon";
import { SettingsIcon } from "../_shared/icons/settings.icon";
import { UserGroupIcon } from "../_shared/icons/user-group.icon";
import { Element } from "./element";

export const SideBar = ({
  collapsed,
  collapse,
}: {
  collapsed: boolean;
  collapse: () => void;
}) => {
  const menuItems = [
    {
      icon: <OverviewIcon />,
      text: "Overview",
      route: "/dashboard/overview",
    },
    {
      icon: <UserGroupIcon />,
      text: "Manage",
      route: "/dashboard/members",
    },
    {
      icon: <DocumentIcon />,
      text: "Documents",
      route: "/dashboard/applications",
    },
  ];

  const menu = menuItems.map((item) => (
    <Element icon={item.icon} text={item.text} route={item.route} />
  ));

  return (
    <div
      className={clsx("h-[100vh] p-10 transition-all duration-500 ease-out", {
        "w-72": !collapsed,
        "w-36": collapsed,
      })}
    >
      <div className="bg-gray-50 rounded-2xl shadow-lg w-full h-full overflow-hidden flex flex-col justify-between">
        <div className="mt-4">
          <div className="flex flex-col w-full mt-20">{menu}</div>
        </div>
        <div className={clsx("w-full p-3")}>
          <div
            className={clsx(
              "flex flex-row rounded-2xl px-3 py-2 bg-gray-100 gap-4 shadow-lg w-full transition-all hover:-translate-y-1 cursor-pointer items-center",
              { "!p-1 justify-center items-center": collapsed }
            )}
          >
            <SettingsIcon />
            {!collapsed && <p className="text-xs">Settings</p>}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "absolute top-24 right-6 h-6 w-6 rounded-full bg-blue-100 transition-all duration-500 ease-in-out hover:shadow hover:-translate-y-1 cursor-pointer flex justify-center items-center",
          { "rotate-180": !collapsed }
        )}
        onClick={() => {
          collapse();
        }}
      >
        <ArrowRightIcon />
      </div>
    </div>
  );
};
