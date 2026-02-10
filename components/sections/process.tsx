import { siteProcess } from "@/data/site";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";

export function Process() {
  return (
    <Section
      id={siteProcess.sectionId}
      className="border-slate-800/80 bg-slate-950 text-slate-100"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
          {siteProcess.label}
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-100 tracking-tight text-balance">
          {siteProcess.title}
        </h2>
        <p className="mt-4 text-slate-300/80">{siteProcess.subtitle}</p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {siteProcess.steps.map((step) => (
          <Card
            key={step.number}
            className="group relative border border-slate-800/80 bg-slate-900/60 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:border before:border-cyan-400/0 before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none hover:before:border-cyan-400/80 hover:before:opacity-100 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)]"
          >
            <CardContent className="p-8">
              <div className="relative flex">
                <div className="relative flex-1">
                  <span className="text-5xl font-bold text-cyan-400/70">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
