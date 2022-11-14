import Link from "next/link";
import { ArrowRightIcon } from "../_shared/icons/arrow-right.icon";
import { UserBarMinimized } from "./userbar";

export const AddMember = () => {
  return (
    <div className="flex flex-col w-full py-12">
      <div className="flex flex-row gap-4 items-center">
        <Link href="/dashboard/members">
          <div className="rotate-180 mb-1">
            <ArrowRightIcon />
          </div>
        </Link>
        <div className="flex flex-row justify-between w-full items-end">
          <h1 className="text-2xl font-bold text-blue-800 tracking-widest mb-2">
            Add Member
          </h1>
          <UserBarMinimized />
        </div>
      </div>

      <p className="text-base text-gray-800 ml-8">Please fill in the member details</p>
      <div className="flex flex-1 w-full pr-10 mt-10">
        <div className="w-full bg-gray-50 rounded-2xl p-10"></div>
      </div>
    </div>
  );
};
