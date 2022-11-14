import { BasicTable, DataTable } from "../_shared/table";
import { Card } from "./card";

export const Applications = () => {
  return (
    <div className="relative py-12 w-full flex flex-col">
      <h1 className="text-2xl font-bold text-gray-900 tracking-widest mb-2">
        Applications Management
      </h1>
      <p className="text-lg font-light text-blue-900 mb-6">List of Applicantions</p>
      <div className="flex flex-col pr-10">
        <div className="flex flex-col bg-white rounded-xl shadow-lg ">
          <DataTable />
        </div>
      </div>
    </div>
  );
};