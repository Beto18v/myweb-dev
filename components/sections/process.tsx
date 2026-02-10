import { siteProcess } from "@/data/site";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";

export function Process() {
  return (
    <Section id={siteProcess.sectionId}>
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider">
          {siteProcess.label}
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground tracking-tight text-balance">
          {siteProcess.title}
        </h2>
        <p className="mt-4 text-muted-foreground">{siteProcess.subtitle}</p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {siteProcess.steps.map((step) => (
          <Card
            key={step.number}
            className="group hover:border-accent/50 transition-colors"
          >
            <CardContent className="p-8">
              <div className="relative flex">
                <div className="relative flex-1">
                  <span className="text-5xl font-bold text-muted-foreground">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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
