import { DashboardLayout } from "../../components/dashboard/layout";
import { Overview } from "../../components/dashboard/overview";

const _slugs = ["overview", "documents"];

const mappedComponents = [
  { slug: "overview", component: <Overview /> },
  { slug: "documents", component: <div></div> },
];

export async function getStaticPaths() {
  return {
    paths: [
      _slugs.map((slug) => {
        return { params: { slug: slug } };
      }),
    ],
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
