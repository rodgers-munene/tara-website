import { ArrowUpRight, Check, ReceiptText, Store, Wifi } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/motion/reveal";

const payments = ["Card", "M-Pesa", "Cash"];

export function PhysicalMobile() {
  return (
    <section id="product" className="grid overflow-hidden lg:grid-cols-2">
      <div className="bg-tan px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-xl">
          <Reveal>
            <SectionLabel>Scene 01 / Physical</SectionLabel>
            <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.045em] text-navy md:text-5xl md:leading-[1.03]">
              Sell however your customers want to pay.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-navy/70">
              From a market stall to a flagship store, Tara gives every
              counter a fast, dependable checkout experience.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mt-10">
            <div className="rounded-2xl border border-navy/10 bg-cream/65 p-5 shadow-[0_18px_40px_rgba(20,33,61,0.08)]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-navy text-cream">
                    <Store className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">Counter checkout</p>
                    <p className="mt-0.5 text-xs text-navy/55">Fast for your team. Clear for customers.</p>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-navy/45" aria-hidden="true" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {payments.map((payment) => (
                  <span key={payment} className="rounded-full border border-navy/10 bg-white/65 px-3 py-1.5 text-xs font-medium text-navy/70">
                    {payment}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.22} className="mt-6 flex items-center gap-3 text-sm text-navy/70">
            <span className="grid size-8 place-items-center rounded-full bg-navy/8">
              <ReceiptText className="size-4 text-navy" aria-hidden="true" />
            </span>
            Receipts and sales records, always in sync.
          </Reveal>
        </div>
      </div>

      <div className="relative overflow-hidden bg-navy px-6 py-20 text-cream md:px-12 lg:px-16 lg:py-28">
        <div className="pointer-events-none absolute -right-24 -top-20 size-100 rounded-full border border-cream/10" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 size-90 rounded-full bg-cream/5 blur-3xl" />
        <div className="relative mx-auto max-w-xl">
          <Reveal direction="right">
            <SectionLabel className="text-cream/50">Scene 02 / Mobile</SectionLabel>
          </Reveal>

          <Reveal delay={0.1} direction="right" className="mt-6">
            <div className="relative max-w-sm overflow-hidden rounded-2xl border border-cream/15 bg-cream/6 p-4 shadow-2xl shadow-black/15 backdrop-blur-sm">
              <div className="pointer-events-none absolute right-[-3rem] top-[-2rem] size-28 rounded-full border border-cream/10" />
              <div className="relative flex items-center justify-between">
                <p className="flex items-center gap-1.5 text-xs text-cream/60"><Wifi className="size-3" aria-hidden="true" /> Live payment flow</p>
                <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] font-medium text-emerald-200">12:48 PM</span>
              </div>
              <div className="relative mt-4 rounded-xl bg-cream p-3.5 text-navy shadow-lg shadow-black/10">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-navy/55">M-Pesa payment received</p>
                    <p className="mt-1 text-xl font-semibold tracking-[-0.04em]">KES 2,480</p>
                  </div>
                  <span className="grid size-6 place-items-center rounded-full bg-emerald-700/10 text-emerald-700"><Check className="size-3.5" aria-hidden="true" /></span>
                </div>
              </div>
              <div className="relative mt-3 flex items-center justify-between gap-3 text-xs text-cream/65">
                <span className="flex items-center gap-1.5"><ReceiptText className="size-3.5" aria-hidden="true" /> Receipt created</span>
                <span className="flex items-center gap-1.5 text-emerald-200"><Check className="size-3.5" aria-hidden="true" /> Reconciled</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="right" className="mt-9">
            <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.045em] md:text-5xl md:leading-[1.03]">
              Payments built for the way Africa moves.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-cream/70">
              Accept payments on the move and see every sale reconcile to your
              balance in real time.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
