import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* ---------------- Default Variants ---------------- */
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",

        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        outline:
          "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",

        ghost:
          "hover:bg-accent hover:text-accent-foreground",

        link:
          "text-primary underline-offset-4 hover:underline",

        /* ---------------- Enterprise / Hero ---------------- */
        heroGold:
          "border-2 border-amber-400 text-amber-400 bg-transparent hover:bg-amber-400/10 hover:shadow-[0_0_30px_rgba(251,191,36,0.35)]",

        heroWhite:
          "border-2 border-white text-white bg-transparent hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]",

        /* ---------------- Corporate (Optional) ---------------- */
        corporate:
          "bg-corporate-blue text-white hover:bg-corporate-blue-dark shadow-md hover:shadow-glow",

        corporateOutline:
          "border-2 border-corporate-blue text-corporate-blue hover:bg-corporate-blue hover:text-white",
      },

      size: {
        default: "h-10 px-5 text-sm rounded-lg",
        sm: "h-9 px-4 text-sm rounded-md",
        lg: "h-12 px-8 text-base rounded-lg",
        xl: "h-14 px-10 text-lg rounded-xl",

        /* 🔥 Hero Size (Matches Your Screenshot) */
        hero:
          "h-[68px] px-10 text-lg rounded-full tracking-wide",
        
        icon: "h-10 w-10 rounded-lg",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
