// Navbar.tsx
import React, { forwardRef, useEffect, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
import gsap from "gsap";
import { Button } from "../Button";

const navbarVariants = cva(
  `w-full flex items-center justify-between px-6 py-4 rounded-md border border-gray-200 transition-all`,
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white",
        light: "bg-white text-gray-800 shadow",
        primary: "bg-indigo-600 text-white",
        glass:
          "backdrop-blur-md bg-white/10 text-white border border-white/20",
      },
      size: {
        default: "h-16",
        sm: "h-12",
        lg: "h-20",
        xl: "h-24",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "default",
    },
  }
);

export interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children">,
    VariantProps<typeof navbarVariants> {
  logo?: React.ReactNode;
  links?: NavLink[];
  actions?: React.ReactNode;
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      variant,
      size,
      logo = <h1 className="text-lg font-semibold">Logo</h1>,
      links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Customer", href: "/customer" },
      ],
      actions = <Button hoverAnimation="none">Profile</Button>,
      animation = "fadeIn",
      hoverAnimation = "none",
      ...props
    },
    ref
  ) => {
    const navbarRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (!navbarRef.current || animation === "none") return;
      entranceAnimations[animation]?.(navbarRef.current);
    }, [animation]);

    const handleMouseEnter = () => {
      if (hoverAnimation === "none" || !navbarRef.current) return;
      hoverAnimations[hoverAnimation]?.(navbarRef.current);
    };

    const handleMouseLeave = () => {
      if (!navbarRef.current) return;
      gsap.to(navbarRef.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.1,
      });
    };

    return (
      <nav
        ref={(node) => {
          navbarRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref)
            (ref as React.MutableRefObject<HTMLElement | null>).current =
              node;
        }}
        className={cn(navbarVariants({ variant, size }), className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className="flex items-center">{logo}</div>

        {links.length > 0 && (
          <div className="flex gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">{actions}</div>
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };
