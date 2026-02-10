import { siteServices } from "@/data/site";
import { Section } from "@/components/layout/section";
import { Code, Zap, Globe } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function Services() {
  const iconMap = {
    Code,
    Zap,
    Globe,
  };

  return (
    <Section
      id={siteServices.sectionId}
      className="border-slate-800/80 bg-slate-900 text-slate-100 bg-[radial-gradient(1200px_circle_at_top,rgba(59,130,246,0.08),transparent_65%)]"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
          {siteServices.label}
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-100 tracking-tight text-balance">
          {siteServices.title}
        </h2>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {siteServices.services.map((service) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap];
          return (
            <Card
              key={service.title}
              className="group relative border border-slate-800/80 bg-slate-900/60 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:border before:border-cyan-400/0 before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none hover:before:border-cyan-400/80 hover:before:opacity-100 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)]"
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                  <IconComponent className="w-6 h-6" />
                </div>
                <CardTitle className="mt-6 text-xl font-semibold text-slate-100">
                  {service.title}
                </CardTitle>
                <p className="mt-3 text-slate-300/80 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
