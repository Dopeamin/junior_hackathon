import { Line } from "recharts";
import { DocumentIcon } from "../_shared/icons/document.icon";
import { DotsIcon } from "../_shared/icons/dots.icon";
import { UserGroupIcon } from "../_shared/icons/user-group.icon";
import { Tag } from "../_shared/tag";
import { Card } from "./card";
import { UserBar } from "./userbar";

export const Overview = () => {
  return (
    <>
      <div className="relative py-12 pr-80 w-full flex flex-col gap-6">
        <h1 className="text-2xl font-black text-gray-900 tracking-wider mb-6">
          Good Morning, Mr John Doe
        </h1>
        <div className="flex flex-row gap-6">
          <Card bgColor="white">
            <div className="flex relative flex-col gap-2 w-36">
              <DocumentIcon className="h-14 w-14" />
              <h1 className="text-gray-500 text-2xl font-bold tracking-widest">
                1021
              </h1>
              <p className="text-gray-800 text-sm font-bold">
                Documents stored
              </p>
              <div className="absolute top-0 -right-2 cursor-pointer">
                <DotsIcon />
              </div>
            </div>
          </Card>
          <Card bgColor="white">
            <div className="flex relative flex-col gap-2 w-36">
              <UserGroupIcon className="h-14 w-14" />
              <h1 className="text-gray-500 text-2xl font-bold tracking-widest">
                121
              </h1>
              <p className="text-gray-800 text-sm font-bold">
                Recruted Employees
              </p>
              <div className="absolute top-0 -right-2 cursor-pointer">
                <DotsIcon />
              </div>
            </div>
          </Card>
          <Card bgColor="white">
            <div className={"flex relative flex-col gap-2 w-36"}>
              <UserGroupIcon className="h-14 w-14" />
              <h1 className="text-gray-500 text-2xl font-bold tracking-widest">
                121
              </h1>
              <p className="text-gray-800 text-sm font-bold">
                Recruted Employees
              </p>
              <div className="absolute top-0 -right-2 cursor-pointer">
                <DotsIcon />
              </div>
            </div>
          </Card>
          <Card bgColor="white">
            <div className="flex relative flex-col gap-2 w-36">
              <UserGroupIcon className="h-14 w-14" />
              <h1 className="text-gray-500 text-2xl font-bold tracking-widest">
                121
              </h1>
              <p className="text-gray-800 text-sm font-bold">
                Recruted Employees
              </p>
              <div className="absolute top-0 -right-2 cursor-pointer">
                <DotsIcon />
              </div>
            </div>
          </Card>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-6">
            <Card bgColor="white">
              <div className="flex relative flex-col gap-2 w-60">
                <p className="text-gray-800 text-xl font-bold">New Employees</p>
                <div className="flex flex-row items-end gap-5">
                  <h1 className="text-gray-500 text-4xl font-bold tracking-widest">
                    1021
                  </h1>
                  <Tag color="red" text="-10%" />
                </div>
              </div>
            </Card>
            <Card bgColor="white">
              <div className="flex relative flex-col gap-2 w-60">
                <p className="text-gray-800 text-xl font-bold">New Employees</p>
                <div className="flex flex-row items-end gap-5">
                  <h1 className="text-gray-500 text-4xl font-bold tracking-widest">
                    1021
                  </h1>
                  <Tag color="green" text="+10%" />
                </div>
              </div>
            </Card>
          </div>

          <Card bgColor="white">
            <div className="flex flex-col w-96 flex-1 h-full">
              <p className="text-gray-800 text-xl font-bold">
                Evolution of recrutement
              </p>
              <div className="relative flex w-full h-full pt-10">
                <div className="flex-1">
                  <Line />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <UserBar />
    </>
  );
};
