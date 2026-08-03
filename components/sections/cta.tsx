import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const benefits = ["One connected POS", "Inventory that stays current", "Your ekshop.store storefront"];

export function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-emerald-700 px-6 py-24 text-cream md:px-12 md:py-32">
      <div className="pointer-events-none absolute -left-24 -top-32 size-110 rounded-full border border-cream/15" />
      <div className="pointer-events-none absolute -bottom-40 right-0 size-130 rounded-full bg-navy/15 blur-3xl" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/65">Built for the next sale</p>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl md:leading-[1.01]">Your business is ready for its next chapter.</h2>
        <p className="mx-auto mt-6 max-w-xl leading-7 text-cream/75 md:text-lg">Bring your physical shop, stock, and online storefront into one system that grows with you.</p>
        <div className="mt-9 flex justify-center"><Button href="#signup" variant="inverted" className="group rounded-full px-6 py-3.5">Get started with Tara <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" /></Button></div>
        <div className="mt-9 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-cream/75">
          {benefits.map((benefit) => <span key={benefit} className="flex items-center gap-2"><Check className="size-4 text-emerald-200" aria-hidden="true" />{benefit}</span>)}
        </div>
      </Reveal>
    </section>
  );
}
