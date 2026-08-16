import React from "react";
import { type VariantProps } from "class-variance-authority";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
declare const carouselVariants: (props?: ({
    variant?: "light" | "dark" | "glass" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface CarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">, VariantProps<typeof carouselVariants> {
    children: React.ReactNode;
    autoPlay?: boolean;
    interval?: number;
    loop?: boolean;
    showArrows?: boolean;
    showDots?: boolean;
    animation?: keyof typeof entranceAnimations;
}
declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>>;
export { Carousel, carouselVariants };
//# sourceMappingURL=Carousel.d.ts.map