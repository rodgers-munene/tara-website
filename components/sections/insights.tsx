import { ArrowUpRight, Check, Globe2, Store, UsersRound, WalletCards } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SalesChart } from "@/components/motion/sales-chart";
import { SectionLabel } from "@/components/ui/section-label";

export function Insights() {
  return (
    <section id="insights" className="px-6 py-18 md:px-12 md:py-22">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <SectionLabel>Business intelligence</SectionLabel>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.045em] text-navy md:text-4xl md:leading-[1.03]">
              See the whole business. Make the next move.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-navy/60">
            Clear answers from the sales data you already generate every day.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto]">
          <Reveal delay={0.06} className="lg:col-span-2">
            <div className="h-full rounded-[1.5rem] bg-tan p-5 md:p-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold text-navy">Every sale, in one view</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-navy/65">Follow your daily performance across the counter and ekshop.store without switching tools.</p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-navy text-cream"><ArrowUpRight className="size-4" aria-hidden="true" /></span>
              </div>
              <div className="mt-5 flex items-end justify-between"><div><p className="text-xs text-navy/55">This week</p><p className="mt-0.5 text-2xl font-semibold tracking-[-0.04em]">KES 65,920</p></div><span className="text-xs font-medium text-emerald-700">+18.4%</span></div>
              <SalesChart />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-2">
            <div className="rounded-[1.5rem] bg-navy p-5 text-cream md:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-cream/10"><WalletCards className="size-4" aria-hidden="true" /></span><p className="text-sm font-semibold">Payouts, without the chase</p></div>
                <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-medium text-emerald-200">Ready</span>
              </div>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div><p className="text-xs text-cream/55">Available balance</p><p className="mt-1 text-3xl font-semibold tracking-[-0.05em]">KES 65,920</p></div>
                <p className="flex items-center gap-1.5 text-xs text-emerald-200"><Check className="size-3.5" aria-hidden="true" /> Reconciled live</p>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-cream/10 pt-4 text-xs">
                <span className="text-cream/55">Next payout</span>
                <span className="font-medium text-cream">Tomorrow, 09:00</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="lg:col-span-1">
            <div className="h-full rounded-[1.5rem] bg-emerald-700 p-5 text-cream">
              <span className="grid size-9 place-items-center rounded-xl bg-cream/12"><UsersRound className="size-4" aria-hidden="true" /></span>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.025em]">Know who comes back.</h3>
              <p className="mt-2 text-sm leading-6 text-cream/70">Spot your regular customers and serve them better.</p>
            </div>
          </Reveal>

          <Reveal delay={0.24} className="lg:col-span-3">
            <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-navy/10 bg-cream p-5 md:flex-row md:items-end md:p-6">
              <div>
                <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-navy/8 text-navy"><Globe2 className="size-4" aria-hidden="true" /></span><p className="text-sm font-semibold text-navy">Sell locally. Grow without borders.</p></div>
                <p className="mt-4 max-w-md text-sm leading-6 text-navy/65">Your online storefront gives your best products a place to be discovered beyond your physical location.</p>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm font-medium text-navy md:mt-0"><Store className="size-4" aria-hidden="true" /> Physical and online, together</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
