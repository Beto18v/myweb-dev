import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { siteExamples } from "@/data/site";

export function Examples() {
  return (
    <Section
      id={siteExamples.sectionId}
      className="border-slate-800/80 bg-slate-900 text-slate-100 bg-[radial-gradient(1200px_circle_at_top,rgba(59,130,246,0.08),transparent_65%)]"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
          {siteExamples.label}
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-100 tracking-tight text-balance">
          {siteExamples.title}
        </h2>
        <p className="mt-4 text-slate-300/80">{siteExamples.subtitle}</p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {/* Ejemplo 1 */}
        <Card className="group relative overflow-hidden rounded-lg border border-slate-800/80 bg-slate-900/60 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)] transition-all duration-300 p-0 before:absolute before:inset-0 before:rounded-lg before:border before:border-cyan-400/0 before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none hover:before:border-cyan-400/80">
          <div className="h-full w-full bg-slate-900/40 flex items-center justify-center">
            <Image
              src="/examples/Ex5.jpg"
              alt="Ejemplo 5"
              width={1200}
              height={900}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover"
              quality={100}
            />
          </div>
        </Card>

        {/* Ejemplo 2 */}

        <Card className="group relative overflow-hidden rounded-lg border border-slate-800/80 bg-slate-900/60 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)] transition-all duration-300 p-0 before:absolute before:inset-0 before:rounded-lg before:border before:border-cyan-400/0 before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none hover:before:border-cyan-400/80">
          <div className="h-full w-full bg-slate-900/40 flex items-center justify-center">
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

        {/* Ejemplo 3 */}
        <Card className="group relative overflow-hidden rounded-lg border border-slate-800/80 bg-slate-900/60 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)] transition-all duration-300 p-0 before:absolute before:inset-0 before:rounded-lg before:border before:border-cyan-400/0 before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none hover:before:border-cyan-400/80">
          <div className="h-full w-full bg-slate-900/40 flex items-center justify-center">
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

        {/* Ejemplo 4 */}
        <Card className="group relative overflow-hidden rounded-lg border border-slate-800/80 bg-slate-900/60 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)] transition-all duration-300 p-0 before:absolute before:inset-0 before:rounded-lg before:border before:border-cyan-400/0 before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none hover:before:border-cyan-400/80">
          <div className="h-full w-full bg-slate-900/40 flex items-center justify-center">
            <Image
              src="/examples/Ex6.jpg"
              alt="Ejemplo 6"
              width={1200}
              height={900}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover"
              quality={100}
            />
          </div>
        </Card>

        {/* Ejemplo 5 */}
        <Card className="group relative overflow-hidden rounded-lg border border-slate-800/80 bg-slate-900/60 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)] transition-all duration-300 p-0 before:absolute before:inset-0 before:rounded-lg before:border before:border-cyan-400/0 before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none hover:before:border-cyan-400/80">
          <div className="h-full w-full bg-slate-900/40 flex items-center justify-center">
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

        {/* Ejemplo 6 */}
        <Card className="group relative overflow-hidden rounded-lg border border-slate-800/80 bg-slate-900/60 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)] transition-all duration-300 p-0 before:absolute before:inset-0 before:rounded-lg before:border before:border-cyan-400/0 before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none hover:before:border-cyan-400/80">
          <div className="h-full w-full bg-slate-900/40 flex items-center justify-center">
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

      <p className="mt-10 text-center text-sm text-slate-400">
        {siteExamples.footerText}
      </p>
    </Section>
  );
}
