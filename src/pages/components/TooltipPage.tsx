// import CodeBlock from "@/components/Personal/CodeBlock";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const basicUsageCode = `
import { Tooltip } from "@/components/Tooltip/Tooltip"

<Tooltip content="Top tooltip" side="top">
  <Button variant="primary" size="sm">Top</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" side="bottom" variant="dark">
  <Button variant="secondary" size="lg">Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" side="left" delay={300}>
  <Button variant="outline" size="xl">Left</Button>
</Tooltip>

<Tooltip content="Right tooltip" side="right" variant="light">
  <Button variant="dark" size="sm">Right</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "React.ReactNode",
      default: "—",
      description: "The content displayed inside the tooltip",
    },
    {
      prop: "side",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Preferred side of the trigger to render the tooltip",
    },
    {
      prop: "align",
      type: '"start" | "center" | "end"',
      default: '"center"',
      description: "Alignment of the tooltip relative to the trigger",
    },
    {
      prop: "variant",
      type: '"dark" | "light"',
      default: '"dark"',
      description: "The visual style variant of the tooltip",
    },
    {
      prop: "delay",
      type: "number",
      default: "200",
      description: "Delay in milliseconds before the tooltip appears",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Prevents the tooltip from showing when true",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </p>
        <p className="text-lg text-gray-600">
          A popup that displays information related to an element when it
          receives keyboard focus or the mouse hovers over it.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={basicUsageCode}>
          <div className="flex gap-6 flex-wrap items-center justify-center py-10">
            <Tooltip content="Top tooltip" side="top">
              <Button variant="primary" size="sm">
                Top
              </Button>
            </Tooltip>

            <Tooltip content="Bottom tooltip" side="bottom" variant="dark">
              <Button variant="secondary" size="lg">
                Bottom
              </Button>
            </Tooltip>

            <Tooltip content="Left tooltip" side="left" delay={300}>
              <Button variant="outline" size="xl">
                Left
              </Button>
            </Tooltip>

            <Tooltip content="Right tooltip" side="right" variant="light">
              <Button variant="dark" size="sm">
                Right
              </Button>
            </Tooltip>
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

export default TooltipPage;