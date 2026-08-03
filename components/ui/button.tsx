import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "outline" | "inverted";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-navy text-cream hover:opacity-90",
  outline: "border border-navy/20 text-navy hover:bg-navy/5",
  inverted: "bg-cream text-navy hover:opacity-90",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
