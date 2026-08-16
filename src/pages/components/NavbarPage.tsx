// import CodeBlock from "@/components/Personal/CodeBlock";
import { Navbar } from "@/components/navbar/Navbar";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const basicUsageCode = `
import { Navbar } from "@/components/Navbar/Navbar"

<Navbar
  variant="light"
  size="default"
  animation="fadeIn"
  links={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Customer", href: "/customer" },
  ]}
  actions={<Button hoverAnimation="none">Profile</Button>}
/>

<Navbar variant="dark" size="lg" animation="slideUp" />

<Navbar variant="glass" size="sm" animation="fadeIn" />`;

  const propsData = [
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "glass"',
      default: '"light"',
      description: "The visual style variant of the navbar",
    },
    {
      prop: "size",
      type: '"default" | "sm" | "lg" | "xl"',
      default: '"default"',
      description: "The height of the navbar",
    },
    {
      prop: "logo",
      type: "React.ReactNode",
      default: "<h1>Logo</h1>",
      description: "Content rendered in the logo/brand slot",
    },
    {
      prop: "links",
      type: "{ label: string; href: string }[]",
      default: "[]",
      description: "Navigation links rendered in the center of the navbar",
    },
    {
      prop: "actions",
      type: "React.ReactNode",
      default: "—",
      description: "Content rendered in the right-side actions slot (e.g. a button)",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Animation when mounting",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "none"',
      default: '"none"',
      description: "Animation when hovering on the navbar",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Navbar
        </p>
        <p className="text-lg text-gray-600">
          A responsive navigation bar with a logo, links, and action slots.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={basicUsageCode}>
          <div className="flex flex-col gap-6 w-full">
            <Navbar
              variant="light"
              size="default"
              animation="fadeIn"
              links={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Customer", href: "/customer" },
              ]}
              actions={<Button hoverAnimation="none">Profile</Button>}
            />

            <Navbar variant="dark" size="lg" animation="slideUp" />

            <Navbar variant="glass" size="sm" animation="fadeIn" />
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

export default NavbarPage;
