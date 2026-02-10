import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { sitePricing } from "@/data/site";

export function Pricing() {
  return (
    <Section id={sitePricing.sectionId}>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-medium  uppercase tracking-wider">
          {sitePricing.label}
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground tracking-tight text-balance">
          {sitePricing.title}
        </h2>
        <p className="mt-4 text-muted-foreground">{sitePricing.subtitle}</p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {sitePricing.packages.map((pkg) => (
          <Card
            key={pkg.name}
            className={`relative p-8 rounded-lg border h-full flex flex-col justify-between ${
              pkg.featured
                ? "border-accent bg-card shadow-lg scale-[1.02]"
                : "border-border bg-card"
            }`}
          >
            {pkg.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                Más popular
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {pkg.name}
              </h3>
              <p className="mt-2 text-3xl font-bold text-foreground">
                {pkg.price}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {pkg.description}
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 w-full">
              <Button asChild variant={pkg.featured ? "default" : "outline"}>
                <Link href={`${sitePricing.whatsappBaseUrl}${pkg.name}`}>
                  {sitePricing.buttonText}
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        {sitePricing.footerText}
      </p>
    </Section>
  );
}
