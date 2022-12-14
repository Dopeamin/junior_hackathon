import { BasicTable, DataTable } from "../_shared/table";
import { Card } from "./card";
import { UserBarMinimized } from "./userbar";
import Router from "next/router";

export const Applications = () => {
  return (
    <div className="relative py-12 w-full flex flex-col">
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-2xl font-bold text-gray-900 tracking-widest mb-2">
          Applications Management
        </h1>
        <UserBarMinimized />
      </div>
      <p className="text-lg font-light text-blue-900 mb-6">
        List of Applications into this offer
      </p>
      <div className="flex flex-col pr-10">
        <div className="flex flex-col bg-white rounded-xl shadow-lg ">
          <DataTable
            onSelect={() => {
              Router.push("/dashboard/applications/candidate/1");
            }}
          />
        </div>
      </div>
    </div>
  );
};
