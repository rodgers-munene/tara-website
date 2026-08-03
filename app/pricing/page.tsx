import { ArrowRight, Check, Store, Building2 } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { siteConfig } from "@/lib/constants";

const smallFeatures = [
  "Up to 2 business stores",
  "eTIMS and tax calculation",
  "Sales analytics for each store",
  "Inventory tracking",
  "Employee slots",
  "Auto restock",
];

const mediumFeatures = [
  "Up to 4 business stores",
  "Sales analytics for each store",
  "eTIMS and tax calculation",
  "Real-time demand price recommendations",
  "B2C and B2B marketplace access",
  "Inventory tracking",
  "Discounted shipping rates",
  "Employee KPI and performance tracking",
];

function PricePlan({
  name,
  description,
  monthly,
  yearly,
  weekly,
  features,
  icon,
  featured = false,
}: {
  name: string;
  description: string;
  monthly: string;
  yearly: string;
  weekly?: string;
  features: string[];
  icon: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <Reveal direction={featured ? "right" : "left"} className="h-full">
      <article className={`relative flex h-full flex-col rounded-[1.75rem] border p-6 md:p-8 ${featured ? "border-navy bg-navy text-cream shadow-[0_24px_60px_rgba(20,33,61,0.2)]" : "border-navy/10 bg-cream text-navy"}`}>
        {featured && <span className="absolute right-6 top-6 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-200">For growing teams</span>}
        <span className={`grid size-11 place-items-center rounded-xl ${featured ? "bg-cream/10 text-cream" : "bg-navy text-cream"}`}>{icon}</span>
        <h2 className="mt-6 text-2xl font-semibold tracking-[-0.04em]">{name}</h2>
        <p className={`mt-2 max-w-sm text-sm leading-6 ${featured ? "text-cream/70" : "text-navy/65"}`}>{description}</p>

        <div className={`mt-7 border-y py-5 ${featured ? "border-cream/15" : "border-navy/10"}`}>
          <p className={`text-xs ${featured ? "text-cream/55" : "text-navy/55"}`}>Starting from</p>
          <p className="mt-1 text-4xl font-semibold tracking-[-0.06em]">{monthly}<span className={`ml-1 text-sm font-medium tracking-normal ${featured ? "text-cream/55" : "text-navy/50"}`}>/ month</span></p>
          <div className={`mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs ${featured ? "text-cream/65" : "text-navy/60"}`}>
            {weekly && <span>{weekly} / week</span>}
            <span>{yearly} / year</span>
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {features.map((feature) => <li key={feature} className={`flex gap-3 text-sm ${featured ? "text-cream/80" : "text-navy/75"}`}><Check className={`mt-0.5 size-4 shrink-0 ${featured ? "text-emerald-200" : "text-emerald-700"}`} aria-hidden="true" />{feature}</li>)}
        </ul>
        <Button href={siteConfig.ownerPortalUrl} variant={featured ? "inverted" : "primary"} className="mt-8 w-full rounded-full">Choose {name}<ArrowRight className="size-4" /></Button>
      </article>
    </Reveal>
  );
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-18 md:px-12 md:pb-32 md:pt-24">
          <div className="hero-grid pointer-events-none absolute inset-0 -z-20 opacity-45" />
          <div className="pointer-events-none absolute -right-20 top-0 -z-10 size-100 rounded-full bg-tan/65 blur-3xl" />
          <div className="mx-auto max-w-7xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <SectionLabel>Simple, transparent pricing</SectionLabel>
              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-navy md:text-6xl md:leading-[1.01]">The tools to grow, priced for your business.</h1>
              <p className="mx-auto mt-6 max-w-xl leading-7 text-navy/70 md:text-lg">Choose the Tara plan that matches where you are today. More features will be added as your business grows.</p>
            </Reveal>

            <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2">
              <PricePlan name="Small Enterprise" description="For independent shops and small teams building a dependable daily operation." monthly="KSh 416" weekly="KSh 104" yearly="KSh 4,992" features={smallFeatures} icon={<Store className="size-5" aria-hidden="true" />} />
              <PricePlan name="Medium Enterprise" description="For wholesalers, distributors, supermarkets, hardwares, and businesses scaling across channels." monthly="KSh 5,625" yearly="KSh 67,500" features={mediumFeatures} icon={<Building2 className="size-5" aria-hidden="true" />} featured />
            </div>

            <Reveal delay={0.2} className="mx-auto mt-8 max-w-5xl rounded-2xl border border-navy/10 bg-cream/70 px-5 py-4 text-center text-sm leading-6 text-navy/65">
              Small Enterprise supports weekly, monthly, and yearly billing. Medium Enterprise supports monthly and yearly billing. Your first subscription begins on a monthly or yearly option.
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
