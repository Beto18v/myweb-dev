import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { sitePricing } from "@/data/site";

export function Pricing() {
  return (
    <Section
      id={sitePricing.sectionId}
      className="border-slate-800/80 bg-slate-950 text-slate-100]"
    >
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
          {sitePricing.label}
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-100 tracking-tight text-balance">
          {sitePricing.title}
        </h2>
        <p className="mt-4 text-slate-400">{sitePricing.subtitle}</p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {sitePricing.packages.map((pkg) => (
          <Card
            key={pkg.name}
            className={`group relative p-8 rounded-lg border h-full flex flex-col justify-between transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:border before:border-cyan-400/0 before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none hover:before:border-cyan-400/80 hover:before:opacity-100 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)] ${
              pkg.featured
                ? "border-cyan-400/60 bg-slate-900/80 shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_20px_40px_rgba(34,211,238,0.2)] scale-[1.02]"
                : "border-slate-800/80 bg-slate-900/60"
            }`}
          >
            {pkg.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-cyan-400/15 text-cyan-200 border border-cyan-400/40 rounded-full backdrop-blur">
                Mas popular
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-slate-100">
                {pkg.name}
              </h3>
              <p className="mt-2 text-3xl font-bold text-slate-100">
                {pkg.price}
              </p>
              <p className="mt-3 text-sm text-slate-300/80">
                {pkg.description}
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300/80">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 w-full">
              <Button
                asChild
                variant={pkg.featured ? "default" : "outline"}
                className="w-full"
              >
                <Link href={`${sitePricing.whatsappBaseUrl}${pkg.name}`}>
                  {sitePricing.buttonText}
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-6">
        <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2">
          <Card className="relative p-7 rounded-lg border border-cyan-400/60 bg-slate-900/80 shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_16px_36px_rgba(34,211,238,0.2)]">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  Producto estrella
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100">
                  WhatsApp Automático
                </h3>
                <p className="mt-2 text-3xl font-bold text-slate-100">150k</p>
                <p className="mt-2 text-sm text-slate-300/80">
                  Sin costos mensuales. Entrega rapida.
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Sin mensualidad
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-300/80">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                Mensaje de bienvenida automatico
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                Mensaje de ausencia automatico
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                Respuestas rapidas configuradas (menu, horario, ubicacion,
                precios)
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                Catalogo configurado (si aplica)
              </li>
            </ul>

            <div className="mt-6">
              <Button asChild className="w-full">
                <Link
                  href={`${sitePricing.whatsappBaseUrl}WhatsApp Automático`}
                >
                  {sitePricing.buttonText}
                </Link>
              </Button>
            </div>
          </Card>

            <Card
              className="relative p-7 rounded-lg border border-slate-800/80 bg-slate-900/60 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:border before:border-cyan-400/0 before:opacity-0 before:transition-all before:duration-300 before:pointer-events-none hover:before:border-cyan-400/80 hover:before:opacity-100 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)]"
            >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-semibold text-slate-200">
                  Con mensualidad
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100">
                  Automatizacion PRO con IA
                </h3>
                <p className="mt-2 text-3xl font-bold text-slate-100">
                  300k - 500k
                </p>
                <p className="mt-2 text-sm text-slate-300/80">
                  Requiere suscripcion mensual segun uso y proveedor.
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  + mensualidad
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-300/80">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                Bot con inteligencia artificial
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                Responde preguntas complejas
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                Automatizacion avanzada
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                Integracion con WhatsApp API (Twilio o Cloud API)
              </li>
            </ul>

            <div className="mt-6">
              <Button asChild variant="outline" className="w-full">
                <Link
                  href={`${sitePricing.whatsappBaseUrl}Automatizacion PRO con IA`}
                >
                  {sitePricing.buttonText}
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-slate-400">
        {sitePricing.footerText}
      </p>
    </Section>
  );
}
