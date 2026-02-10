import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { siteExamples } from "@/data/site";

export function Examples() {
  return (
    <Section id={siteExamples.sectionId} className="bg-muted/50">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider">
          {siteExamples.label}
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground tracking-tight text-balance">
          {siteExamples.title}
        </h2>
        <p className="mt-4 text-muted-foreground">{siteExamples.subtitle}</p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {/* Ejemplo 1 */}
        <Card className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 p-0">
          <div className="h-full w-full bg-muted/30 flex items-center justify-center">
            <Image
              src="/examples/Ex1.jpg"
              alt="Ejemplo 1"
              width={1200}
              height={900}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover"
              quality={100}
            />
          </div>
        </Card>

        {/* Ejemplo 2 */}

        <Card className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 p-0">
          <div className="h-full w-full bg-muted/30 flex items-center justify-center">
            <Image
              src="/examples/Ex3.jpg"
              alt="Ejemplo 3"
              width={1200}
              height={900}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover"
              quality={100}
            />
          </div>
        </Card>

        {/* Ejemplo 3 */}
        <Card className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 p-0">
          <div className="h-full w-full bg-muted/30 flex items-center justify-center">
            <Image
              src="/examples/Ex2.jpg"
              alt="Ejemplo 2"
              width={1200}
              height={900}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover"
              quality={100}
            />
          </div>
        </Card>

        {/* Ejemplo 4 */}
        <Card className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 p-0">
          <div className="h-full w-full bg-muted/30 flex items-center justify-center">
            <Image
              src="/examples/Ex4.jpg"
              alt="Ejemplo 4"
              width={1200}
              height={900}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover"
              quality={100}
            />
          </div>
        </Card>
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        {siteExamples.footerText}
      </p>
    </Section>
  );
}
