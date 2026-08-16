import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  Children,
  isValidElement,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import gsap from "gsap";

const carouselVariants = cva(
  "relative w-full overflow-hidden rounded-md border border-gray-200",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-800",
        dark: "bg-slate-900 text-white border-slate-700",
        glass: "backdrop-blur-md bg-white/10 text-white border-white/20",
      },
      size: {
        sm: "h-48",
        default: "h-72",
        lg: "h-96",
        xl: "h-[32rem]",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "default",
    },
  }
);

interface CarouselProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof carouselVariants> {
  children: React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  animation?: keyof typeof entranceAnimations;
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      className,
      variant,
      size,
      children,
      autoPlay = false,
      interval = 3000,
      loop = true,
      showArrows = true,
      showDots = true,
      animation = "fadeIn",
      ...props
    },
    ref
  ) => {
    const slides = Children.toArray(children).filter(isValidElement);
    const [index, setIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
      if (!carouselRef.current || animation === "none") return;
      entranceAnimations[animation]?.(carouselRef.current);
    }, [animation]);

    useEffect(() => {
      if (!trackRef.current) return;
      gsap.to(trackRef.current, {
        xPercent: -100 * index,
        duration: 0.5,
        ease: "power2.out",
      });
    }, [index]);

    const goTo = (i: number) => {
      const total = slides.length;
      if (loop) setIndex(((i % total) + total) % total);
      else setIndex(Math.min(Math.max(i, 0), total - 1));
    };

    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    useEffect(() => {
      if (!autoPlay) return;
      autoplayRef.current = setInterval(next, interval);
      return () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
      };
    }, [autoPlay, interval, index]);

    return (
      <div
        ref={(node) => {
          carouselRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref)
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              node;
        }}
        className={cn(carouselVariants({ variant, size }), className)}
        onMouseEnter={() => autoplayRef.current && clearInterval(autoplayRef.current)}
        {...props}
      >
        <div className="relative w-full h-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-full w-full"
            style={{ width: `${slides.length * 100}%` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full h-full flex items-center justify-center"
                style={{ width: `${100 / slides.length}%` }}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>

        {showArrows && (
          <>
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
            >
              ›
            </button>
          </>
        )}

        {showDots && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  i === index ? "bg-white w-4" : "bg-white/50"
                )}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";
export { Carousel, carouselVariants };