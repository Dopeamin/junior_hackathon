import { Card } from "../../components/dashboard/card";
import { DashboardLayout } from "../../components/dashboard/layout";
import { UserBar } from "../../components/dashboard/userbar";
import { DocumentIcon } from "../../components/_shared/icons/document.icon";
import { DotsIcon } from "../../components/_shared/icons/dots.icon";
import { UserGroupIcon } from "../../components/_shared/icons/user-group.icon";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "overview" } },
      { params: { slug: "documents" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  return {
    props: { slug: context.params.slug },
  };
}

export default function Dashboard({ slug }: { slug: string }) {
  return (
    <DashboardLayout>
      <div className="relative py-12 pr-80 w-full flex flex-col gap-6">
        <h1 className="text-2xl font-black text-blue-900 tracking-wider mb-6">
          Good Morning, Mr John Doe
        </h1>
        <div className="flex flex-row gap-6">
          <Card bgColor="white">
            <div className="flex relative flex-col gap-2 w-36">
              <DocumentIcon className="h-14 w-14" />
              <h1 className="text-blue-700 text-2xl font-bold tracking-widest">
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
              <h1 className="text-blue-700 text-2xl font-bold tracking-widest">
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
              <h1 className="text-blue-700 text-2xl font-bold tracking-widest">
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
              <h1 className="text-blue-700 text-2xl font-bold tracking-widest">
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
          <div className="flex flex-col">
            <Card bgColor="white">
              <div className="flex relative flex-col gap-2 w-80">
                <DocumentIcon className="h-14 w-14" />
                <h1 className="text-blue-700 text-2xl font-bold tracking-widest">
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
          </div>
        </div>
      </div>
      <UserBar />
    </DashboardLayout>
  );
}
