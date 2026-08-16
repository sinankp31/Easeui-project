import React from "react";
import { type VariantProps } from "class-variance-authority";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
declare const layoutVariants: (props?: ({
    variant?: "light" | "dark" | "primary" | null | undefined;
    sidebarPosition?: "left" | "right" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface LayoutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">, VariantProps<typeof layoutVariants> {
    header?: React.ReactNode;
    sidebar?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
    sidebarWidth?: string;
    animation?: keyof typeof entranceAnimations;
}
declare const Layout: React.ForwardRefExoticComponent<LayoutProps & React.RefAttributes<HTMLDivElement>>;
export { Layout, layoutVariants };
//# sourceMappingURL=Layout.d.ts.map