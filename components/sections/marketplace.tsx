import { ArrowRight, Check, Globe2, Package, ShoppingBag, Store } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/ui/section-label";

const products = ["Kiondo Tote", "Maasai Beadwork", "Nile Clay Vase"];

export function Marketplace() {
  return (
    <section id="marketplace" className="relative overflow-hidden bg-navy px-6 py-24 text-cream md:px-12 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-32 size-120 rounded-full border border-cream/8" />
      <div className="pointer-events-none absolute -right-28 -top-28 size-125 rounded-full bg-emerald-400/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <SectionLabel className="text-cream/50">Tara × ekshop.store</SectionLabel>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.01]">
            One catalogue. Every place you sell.
          </h2>
          <p className="mt-6 max-w-xl leading-7 text-cream/70 md:text-lg">
            Create your shop in Tara or on ekshop.store. Products, stock, and
            sales stay automatically in sync across the counter and online.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <Reveal direction="left">
            <div className="rounded-[1.75rem] border border-cream/15 bg-cream p-5 text-navy shadow-2xl shadow-black/15 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-navy text-cream"><Package className="size-5" aria-hidden="true" /></span>
                  <div>
                    <p className="text-sm font-semibold">Your Tara catalogue</p>
                    <p className="mt-0.5 text-xs text-navy/55">124 products ready to sell</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-700/10 px-2.5 py-1 text-xs font-medium text-emerald-700">Synced</span>
              </div>
              <div className="mt-6 space-y-2">
                {products.map((product, index) => (
                  <div key={product} className="flex items-center justify-between rounded-xl bg-navy/5 px-3 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="grid size-7 place-items-center rounded-lg bg-tan text-[10px] font-semibold text-navy">0{index + 1}</span>
                      <span className="text-sm font-medium">{product}</span>
                    </div>
                    <Check className="size-4 text-emerald-700" aria-label="Synced" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative flex justify-center py-2 lg:py-0">
            <div className="hidden h-px w-8 bg-cream/25 lg:block" />
            <div className="relative grid size-18 place-items-center rounded-full border border-cream/20 bg-cream/10 text-center shadow-xl shadow-black/15 backdrop-blur">
              <div className="absolute inset-1 rounded-full border border-cream/10" />
              <span className="relative text-xs font-semibold tracking-tight">Tara<br />sync</span>
            </div>
            <div className="hidden h-px w-8 bg-cream/25 lg:block" />
          </Reveal>

          <Reveal delay={0.2} direction="right">
            <div className="rounded-[1.75rem] border border-cream/15 bg-cream/8 p-5 shadow-2xl shadow-black/15 backdrop-blur-sm md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-cream text-navy"><ShoppingBag className="size-5" aria-hidden="true" /></span>
                  <div>
                    <p className="text-sm font-semibold">Your ekshop.store</p>
                    <p className="mt-0.5 text-xs text-cream/55">Your online storefront, always current</p>
                  </div>
                </div>
                <Globe2 className="size-5 text-cream/45" aria-hidden="true" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {products.map((product) => (
                  <div key={product} className="rounded-xl bg-cream/10 p-2">
                    <div className="h-14 rounded-lg bg-linear-to-br from-tan/85 to-cream/45" />
                    <p className="mt-2 truncate text-[10px] font-medium text-cream/80">{product}</p>
                    <p className="mt-0.5 text-[9px] text-emerald-200">In stock</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-8">
          <div className="grid overflow-hidden rounded-2xl border border-cream/12 bg-cream/6 md:grid-cols-[1fr_auto_1fr]">
            <div className="flex items-center gap-3 p-5">
              <span className="grid size-10 place-items-center rounded-xl bg-cream/10"><Store className="size-5" aria-hidden="true" /></span>
              <div>
                <p className="text-xs text-cream/55">Physical shop</p>
                <p className="mt-0.5 text-lg font-semibold">KES 42,800</p>
              </div>
            </div>
            <div className="flex items-center justify-center border-y border-cream/12 px-5 py-3 text-xs font-medium text-emerald-200 md:border-x md:border-y-0">
              <span className="mr-2 size-2 rounded-full bg-emerald-300" /> Sales combined live
            </div>
            <div className="flex items-center gap-3 p-5">
              <span className="grid size-10 place-items-center rounded-xl bg-cream text-navy"><Globe2 className="size-5" aria-hidden="true" /></span>
              <div>
                <p className="text-xs text-cream/55">ekshop.store</p>
                <p className="mt-0.5 text-lg font-semibold">KES 23,120</p>
              </div>
              <ArrowRight className="ml-auto size-5 text-cream/40" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
