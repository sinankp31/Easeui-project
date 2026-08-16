import { Layout } from "@/components/Layout/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const basicUsageCode = `
import { Layout } from "@/components/Layout/Layout"

<Layout
  variant="light"
  sidebarPosition="left"
  header={<h2 className="font-semibold">Dashboard</h2>}
  sidebar={<nav className="flex flex-col gap-2">Menu items</nav>}
  footer={<p className="text-sm text-gray-500">© 2026 Company</p>}
>
  <p>Main page content goes here.</p>
</Layout>`;

  const propsData = [
    { prop: "variant", type: '"light" | "dark" | "primary"', default: '"light"', description: "The visual style variant of the layout background" },
    { prop: "sidebarPosition", type: '"left" | "right"', default: '"left"', description: "Which side the sidebar renders on" },
    { prop: "header", type: "React.ReactNode", default: "—", description: "Content rendered in the top header bar" },
    { prop: "sidebar", type: "React.ReactNode", default: "—", description: "Content rendered in the side navigation panel" },
    { prop: "footer", type: "React.ReactNode", default: "—", description: "Content rendered in the bottom footer bar" },
    { prop: "sidebarWidth", type: "string", default: '"16rem"', description: "Width of the sidebar panel" },
    { prop: "animation", type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"', default: '"fadeIn"', description: "Animation when mounting" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>
          Layout
        </p>
        <p className="text-lg text-gray-600">
          A page shell with optional header, sidebar, and footer slots.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={basicUsageCode}>
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <Layout
              variant="light"
              sidebarPosition="left"
              header={<h2 className="font-semibold">Dashboard</h2>}
              sidebar={<nav className="flex flex-col gap-2 text-sm">Menu items</nav>}
              footer={<p className="text-sm text-gray-500">© 2026 Company</p>}
              className="min-h-[24rem]"
            >
              <p>Main page content goes here.</p>
            </Layout>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default LayoutPage;