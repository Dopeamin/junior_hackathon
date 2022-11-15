import { Applications } from "../../components/dashboard/applications";
import { DashboardLayout } from "../../components/dashboard/layout";
import { Members } from "../../components/dashboard/members";
import { Offers } from "../../components/dashboard/offers";
import { Overview } from "../../components/dashboard/overview";

const mappedComponents = [
  { slug: "overview", component: <Overview /> },
  { slug: "applications", component: <Offers /> },
  { slug: "members", component: <Members /> },
];

export async function getStaticPaths() {
  return {
    paths: mappedComponents.map((component) => {
      return { params: { slug: component.slug } };
    }),

    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  return {
    props: { slug: context.params.slug },
  };
}

const switchComponent = (slug: string) => {
  return mappedComponents.find((component) => component.slug === slug)
    ?.component;
};

export default function Dashboard({ slug }: { slug: string }) {
  return <DashboardLayout>{switchComponent(slug)}</DashboardLayout>;
}
