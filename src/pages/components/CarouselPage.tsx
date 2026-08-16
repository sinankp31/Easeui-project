import { Carousel } from "@/components/Carousel/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {
  const basicUsageCode = `
import { Carousel } from "@/components/Carousel/Carousel"

<Carousel variant="light" size="default" autoPlay interval={3000}>
  <div className="bg-indigo-500 w-full h-full flex items-center justify-center text-white text-2xl">Slide 1</div>
  <div className="bg-emerald-500 w-full h-full flex items-center justify-center text-white text-2xl">Slide 2</div>
  <div className="bg-rose-500 w-full h-full flex items-center justify-center text-white text-2xl">Slide 3</div>
</Carousel>`;

  const propsData = [
    { prop: "variant", type: '"light" | "dark" | "glass"', default: '"light"', description: "The visual style variant of the carousel frame" },
    { prop: "size", type: '"sm" | "default" | "lg" | "xl"', default: '"default"', description: "The height of the carousel" },
    { prop: "autoPlay", type: "boolean", default: "false", description: "Automatically advances slides on an interval" },
    { prop: "interval", type: "number", default: "3000", description: "Milliseconds between auto-advances" },
    { prop: "loop", type: "boolean", default: "true", description: "Wraps around to the first/last slide at the ends" },
    { prop: "showArrows", type: "boolean", default: "true", description: "Shows previous/next navigation arrows" },
    { prop: "showDots", type: "boolean", default: "true", description: "Shows slide indicator dots" },
    { prop: "animation", type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"', default: '"fadeIn"', description: "Animation when mounting" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>
          Carousel
        </p>
        <p className="text-lg text-gray-600">
          A slideshow component for cycling through elements — images, cards, or content.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={basicUsageCode}>
          <Carousel variant="light" size="default" autoPlay interval={3000}>
            <div className="bg-indigo-500 w-full h-full flex items-center justify-center text-white text-2xl">
              Slide 1
            </div>
            <div className="bg-emerald-500 w-full h-full flex items-center justify-center text-white text-2xl">
              Slide 2
            </div>
            <div className="bg-rose-500 w-full h-full flex items-center justify-center text-white text-2xl">
              Slide 3
            </div>
          </Carousel>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;