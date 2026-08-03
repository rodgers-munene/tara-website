"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/8 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-lg font-semibold tracking-[-0.03em] text-navy"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="grid size-7 place-items-center rounded-lg bg-navy text-xs font-serif italic text-cream shadow-sm transition-transform duration-300 group-hover:rotate-[-8deg]">
            T
          </span>
          {siteConfig.name}
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-navy/65 transition-colors hover:bg-navy/5 hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href={siteConfig.ownerPortalUrl}
            className="text-sm font-medium text-navy/65 transition-colors hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
          >
            Sign in
          </Link>
          <Button href={siteConfig.ownerPortalUrl} className="rounded px-5 py-2.5">
            Get started
          </Button>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-navy/12 text-navy transition-colors hover:bg-navy/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-4 top-[calc(100%+0.65rem)] rounded-2xl border border-navy/10 bg-cream/97 p-2 shadow-2xl shadow-navy/10 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-navy/75 transition-colors hover:bg-navy/5 hover:text-navy"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-2 border-t border-navy/10 p-2">
              <Link
                href={siteConfig.ownerPortalUrl}
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-navy px-6 py-3 text-sm font-medium text-cream transition-opacity hover:opacity-90"
              >
                Get started
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
