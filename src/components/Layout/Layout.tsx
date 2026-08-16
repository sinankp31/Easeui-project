import React, { forwardRef, useEffect, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";

const layoutVariants = cva("w-full min-h-screen flex transition-colors", {
  variants: {
    variant: {
      light: "bg-gray-50 text-gray-900",
      dark: "bg-slate-950 text-white",
      primary: "bg-indigo-50 text-gray-900",
    },
    sidebarPosition: {
      left: "flex-row",
      right: "flex-row-reverse",
    },
  },
  defaultVariants: {
    variant: "light",
    sidebarPosition: "left",
  },
});

interface LayoutProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof layoutVariants> {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  sidebarWidth?: string;
  animation?: keyof typeof entranceAnimations;
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  (
    {
      className,
      variant,
      sidebarPosition,
      header,
      sidebar,
      footer,
      children,
      sidebarWidth = "16rem",
      animation = "fadeIn",
      ...props
    },
    ref
  ) => {
    const layoutRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!layoutRef.current || animation === "none") return;
      entranceAnimations[animation]?.(layoutRef.current);
    }, [animation]);

    return (
      <div
        ref={(node) => {
          layoutRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref)
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              node;
        }}
        className={cn(layoutVariants({ variant, sidebarPosition }), className)}
        {...props}
      >
        {sidebar && (
          <aside
            style={{ width: sidebarWidth }}
            className="flex-shrink-0 border-r border-gray-200 p-4"
          >
            {sidebar}
          </aside>
        )}

        <div className="flex flex-col flex-1 min-w-0">
          {header && (
            <header className="border-b border-gray-200 px-6 py-4">
              {header}
            </header>
          )}

          <main className="flex-1 p-6">{children}</main>

          {footer && (
            <footer className="border-t border-gray-200 px-6 py-4">
              {footer}
            </footer>
          )}
        </div>
      </div>
    );
  }
);

Layout.displayName = "Layout";
export { Layout, layoutVariants };