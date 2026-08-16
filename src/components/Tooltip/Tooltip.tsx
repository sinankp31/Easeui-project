"use client";

import React, {
  useState,
  useRef,
  useEffect,
  cloneElement,
  isValidElement,
} from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";

const tooltipVariants = cva(
  "absolute z-50 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium shadow-md pointer-events-none",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white",
        light: "bg-white text-slate-900 border border-gray-200",
      },
      side: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
    },
    defaultVariants: {
      variant: "dark",
      side: "top",
    },
  }
);

const arrowVariants = cva("absolute w-2 h-2 rotate-45", {
  variants: {
    variant: {
      dark: "bg-slate-900",
      light: "bg-white border-b border-r border-gray-200",
    },
    side: {
      top: "top-full left-1/2 -translate-x-1/2 -mt-1",
      bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1",
      left: "left-full top-1/2 -translate-y-1/2 -ml-1",
      right: "right-full top-1/2 -translate-y-1/2 -mr-1",
    },
  },
  defaultVariants: {
    variant: "dark",
    side: "top",
  },
});

interface TooltipProps extends VariantProps<typeof tooltipVariants> {
  children: React.ReactElement<any, any>;
  content: React.ReactNode;
  align?: "start" | "center" | "end";
  delay?: number;
  disabled?: boolean;
  animation?: keyof typeof entranceAnimations;
  className?: string;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      variant = "dark",
      side = "top",
      align = "center",
      delay = 200,
      disabled = false,
      animation = "fadeIn",
      className,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const clearTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const handleShow = () => {
      if (disabled) return;
      clearTimer();
      timeoutRef.current = setTimeout(() => setOpen(true), delay);
    };

    const handleHide = () => {
      clearTimer();
      setOpen(false);
    };

    useEffect(() => {
      const el = tooltipRef.current;
      if (!open || !el || animation === "none") return;
      entranceAnimations[animation]?.(el);
    }, [open, animation]);

    useEffect(() => clearTimer, []);

    if (!isValidElement(children)) return children;

    const childProps = children.props as any;

    const trigger = cloneElement(children, {
      onMouseEnter: (e: React.MouseEvent<any>) => {
        childProps.onMouseEnter?.(e);
        handleShow();
      },
      onMouseLeave: (e: React.MouseEvent<any>) => {
        childProps.onMouseLeave?.(e);
        handleHide();
      },
      onFocus: (e: React.FocusEvent<any>) => {
        childProps.onFocus?.(e);
        handleShow();
      },
      onBlur: (e: React.FocusEvent<any>) => {
        childProps.onBlur?.(e);
        handleHide();
      },
    } as any);

    const alignClass =
      align === "start"
        ? "items-start"
        : align === "end"
        ? "items-end"
        : "items-center";

    return (
      <div
        ref={(node) => {
          wrapperRef.current = node;
          if (typeof ref === "function") ref(node as HTMLDivElement);
          else if (ref)
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              node;
        }}
        className={cn("relative inline-flex", alignClass)}
      >
        {trigger}
        {open && !disabled && (
          <div
            ref={tooltipRef}
            role="tooltip"
            className={cn(tooltipVariants({ variant, side, className }))}
          >
            {content}
            <span className={cn(arrowVariants({ variant, side }))} />
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";
export { Tooltip, tooltipVariants };