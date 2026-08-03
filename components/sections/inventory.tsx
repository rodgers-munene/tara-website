import Image from "next/image";
import { Barcode, BellRing, Check, PackageCheck } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/motion/reveal";

export function Inventory() {
  return (
    <section id="inventory" className="bg-cream px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <Reveal direction="left">
          <SectionLabel>Inventory intelligence</SectionLabel>
          <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.045em] text-navy md:text-5xl md:leading-[1.03]">
            Know what&apos;s on every shelf, without the stocktake.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-navy/70">
            Tara updates stock with every sale, across every channel, so your
            team can focus on serving customers instead of counting products.
          </p>

          <div className="mt-9 space-y-3">
            <div className="flex gap-4 rounded-2xl border border-navy/8 bg-background/65 p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-navy text-cream"><Barcode className="size-5" aria-hidden="true" /></span>
              <div>
                <h3 className="text-sm font-semibold text-navy">Scan once, update everywhere</h3>
                <p className="mt-1 text-sm leading-5 text-navy/60">Batch barcodes and sales stay in sync across your business.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-navy/8 bg-background/65 p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-700"><BellRing className="size-5" aria-hidden="true" /></span>
              <div>
                <h3 className="text-sm font-semibold text-navy">Act before you run low</h3>
                <p className="mt-1 text-sm leading-5 text-navy/60">Timely alerts make reordering a simple next step.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} direction="right" className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-tan/75 blur-2xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-navy/10 bg-navy p-2 shadow-[0_30px_70px_rgba(20,33,61,0.18)] md:p-3">
            <div className="relative overflow-hidden rounded-[1.1rem] bg-background">
              <Image
                src="/tara_dashboard.webp"
                alt="Tara inventory hub dashboard"
                width={1364}
                height={655}
                className="h-auto w-full"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl border border-white/60 bg-cream/95 px-3 py-2 shadow-lg shadow-navy/10 backdrop-blur md:bottom-5 md:left-5">
                <span className="grid size-7 place-items-center rounded-lg bg-emerald-700/10 text-emerald-700"><PackageCheck className="size-4" aria-hidden="true" /></span>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-navy/45">Stock health</p>
                  <p className="text-xs font-semibold text-navy">Up to date</p>
                </div>
                <span className="ml-2 grid size-5 place-items-center rounded-full bg-emerald-700 text-cream"><Check className="size-3" aria-hidden="true" /></span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
