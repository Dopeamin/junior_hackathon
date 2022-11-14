import { UserAddIcon } from "../_shared/icons/user-add.icon";
import { BasicTable, DataTable } from "../_shared/table";
import { Card } from "./card";

export const Members = () => {
  return (
    <div className="relative py-12 w-full flex flex-col">
      <h1 className="text-2xl font-bold text-gray-900 tracking-widest mb-2">
        Team Management
      </h1>
      <p className="text-lg font-light text-blue-900 ">List of Team Members</p>
      <div className="flex flex-row my-6 transition-all hover:-translate-y-1 cursor-pointer">
        <Card bgColor="white">
            <UserAddIcon /> 
        </Card>
      </div>
      <div className="flex flex-col pr-10">
        <div className="flex flex-col bg-white rounded-xl shadow-lg ">
          <DataTable />
        </div>
      </div>
    </div>
  );
};
