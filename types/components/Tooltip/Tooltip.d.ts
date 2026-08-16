import React from "react";
import type { VariantProps } from "class-variance-authority";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
declare const tooltipVariants: (props?: ({
    variant?: "light" | "dark" | null | undefined;
    side?: "bottom" | "left" | "right" | "top" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface TooltipProps extends VariantProps<typeof tooltipVariants> {
    children: React.ReactElement<any, any>;
    content: React.ReactNode;
    align?: "start" | "center" | "end";
    delay?: number;
    disabled?: boolean;
    animation?: keyof typeof entranceAnimations;
    className?: string;
}
declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
export { Tooltip, tooltipVariants };
//# sourceMappingURL=Tooltip.d.ts.map