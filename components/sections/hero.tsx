import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteHero } from "@/data/site";

export function Hero() {
  return (
    <Section
      id={siteHero.sectionId}
      className="border-slate-800/80 bg-slate-950 text-slate-100 bg-[radial-gradient(1200px_circle_at_top,rgba(56,189,248,0.1),transparent_60%)]"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-100 leading-tight tracking-tight text-balance">
          {siteHero.title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300/80 leading-relaxed max-w-2xl">
          {siteHero.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="group bg-cyan-500 text-slate-950 hover:bg-cyan-400"
          >
            <a href={siteHero.cta.primary.href}>
              {siteHero.cta.primary.label}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-slate-700 text-slate-900 hover:bg-slate-100/60 hover:text-slate-100"
          >
            <a href={siteHero.cta.secondary.href}>
              {siteHero.cta.secondary.label}
            </a>
          </Button>
        </div>
      </div>

      {/* Stats or Trust Indicators */}
      <div className="mt-20 pt-10 border-t border-slate-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteHero.stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-3xl md:text-4xl font-semibold text-slate-100">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
