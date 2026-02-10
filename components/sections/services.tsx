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
    <Section id={siteServices.sectionId} className="bg-muted/50">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider">
          {siteServices.label}
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground tracking-tight text-balance">
          {siteServices.title}
        </h2>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {siteServices.services.map((service) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap];
          return (
            <Card
              key={service.title}
              className="group hover:border-accent/50 transition-colors"
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <IconComponent className="w-6 h-6" />
                </div>
                <CardTitle className="mt-6 text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <p className="mt-3 text-muted-foreground leading-relaxed">
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
