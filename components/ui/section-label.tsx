import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-xs font-medium uppercase tracking-widest text-navy/50",
        className
      )}
    >
      {children}
    </span>
  );
}
