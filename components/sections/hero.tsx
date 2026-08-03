import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/motion/reveal";
import { ChartCard } from "@/components/motion/chart-card";

const capabilities = ["Payments", "Inventory", "Insights"];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-6 pb-24 pt-12 md:px-12 md:pb-32 md:pt-16"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20 opacity-45" />
      <div className="pointer-events-none absolute -right-24 top-0 -z-10 h-100 w-100 rounded-full bg-tan/60 blur-3xl md:-right-10 md:h-130 md:w-130" />
      <div className="pointer-events-none absolute left-[42%] top-24 -z-10 h-72 w-72 rounded-full bg-cream blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-8">
        <Reveal className="max-w-xl">
          <SectionLabel>Entirely African-Made</SectionLabel>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-navy sm:text-6xl md:text-7xl md:leading-[0.98]">
            Run every sale from one <em className="font-serif font-normal italic">intelligent</em>{" "}
            POS.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-navy/70 md:text-lg">
            Payments, inventory, receipts, and business insights in one calm,
            connected workspace—built for the pace of African commerce.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Button href={siteConfig.ownerPortalUrl} className="group rounded px-6 py-3.5">
              Start selling
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <a
              href="#watch"
              className="group inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-navy/65"
            >
              <span className="grid size-8 place-items-center rounded-full border border-navy/15 transition-colors group-hover:bg-navy/5">
                <Play className="ml-0.5 size-3 fill-current" aria-hidden="true" />
              </span>
              Book a demo
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-medium text-navy/65">
            {capabilities.map((capability) => (
              <span key={capability} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-700" />
                {capability}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto h-[31rem] w-full max-w-xl md:h-[35rem]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy/10 md:h-96 md:w-96" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy/5 md:h-125 md:w-125" />
          <div className="hero-phone relative mx-auto h-full w-58 overflow-hidden rounded-[2.75rem] border-[5px] border-navy bg-navy shadow-[0_30px_70px_rgba(20,33,61,0.28)] md:w-68">
            <Image
              src="/tara_phone_dash.webp"
              alt="Tara mobile payments dashboard"
              fill
              sizes="(min-width: 768px) 272px, 232px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-white/15 to-transparent" />
          </div>

          <div className="hero-sales-card absolute -left-3 bottom-10 w-58 md:-left-5 md:bottom-16 md:w-72">
            <ChartCard />
          </div>

          <div className="hero-stock-card absolute -right-2 top-12 w-46 rounded-2xl border border-white/60 bg-cream/95 p-4 shadow-xl shadow-navy/10 backdrop-blur md:-right-2 md:top-16 md:w-52">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-navy/55">Stock alert</p>
              <span className="size-2 rounded-full bg-amber-500" />
            </div>
            <p className="mt-3 text-sm font-semibold text-navy">Cooking Oil 1L</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-navy/10">
              <div className="h-full w-[24%] rounded-full bg-amber-500" />
            </div>
            <p className="mt-2 text-xs text-navy/55">12 items remaining</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
