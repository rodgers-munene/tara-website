import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/constants";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-cream/40">{title}</p>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-cream/65 transition-colors hover:text-cream">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy px-6 py-16 text-cream md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="group flex items-center gap-2.5 text-lg font-semibold tracking-[-0.03em]">
            <span className="grid size-7 place-items-center rounded-lg bg-cream text-xs font-serif italic text-navy transition-transform duration-300 group-hover:rotate-[-8deg]">T</span>
            {siteConfig.name}
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-6 text-cream/60">
            Connecting commerce across Africa through intelligent
            infrastructure. Building the foundation for the next generation
            of retailers.
          </p>
          <Link href={siteConfig.ownerPortalUrl} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cream transition-colors hover:text-emerald-200">
            Start with Tara <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <FooterColumn title="Product" links={footerLinks.product} />
        <FooterColumn title="Company" links={footerLinks.company} />
        <FooterColumn title="Legal" links={footerLinks.legal} />
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} Tara. All rights reserved.</span>
        <span>Made in Africa</span>
      </div>
      </div>
    </footer>
  );
}
