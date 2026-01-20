import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-accent text-accent-foreground hover:brightness-110 shadow-md",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
                outline:
                    "border border-input bg-background/50 hover:bg-accent hover:text-accent-foreground shadow-sm backdrop-blur-sm",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
                ghost: "hover:bg-accent/10 hover:text-accent",
                link: "text-primary underline-offset-4 hover:underline",
                white: "bg-white text-black hover:bg-white/90 shadow-md", // Custom variant for hero
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-12 rounded-md px-8 text-base",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
