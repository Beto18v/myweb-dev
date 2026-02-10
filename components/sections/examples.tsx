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
        {/* Ejemplo 1: Diseño sin textos - Restaurante */}
        <Card className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300">
          <div className="aspect-4/3 bg-linear-to-br from-orange-50 to-amber-100 p-6 flex flex-col dark:from-orange-900/20 dark:to-amber-900/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 h-6 bg-white/80 rounded-full mx-2" />
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden dark:bg-gray-900">
              <div className="h-1/2 bg-linear-to-r from-orange-400 to-red-500 flex items-center justify-center relative" />
              <div className="p-4 space-y-3">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-orange-200 rounded-lg dark:bg-orange-800" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-28 bg-orange-600 rounded" />
                    <div className="h-2 w-32 bg-gray-200 rounded dark:bg-gray-700" />
                    <div className="h-2 w-16 bg-green-500 rounded" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-red-200 rounded-lg dark:bg-red-800" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-24 bg-red-600 rounded" />
                    <div className="h-2 w-36 bg-gray-200 rounded dark:bg-gray-700" />
                    <div className="h-2 w-16 bg-green-500 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Ejemplo 2: Diseño sin textos - Salón de Belleza */}
        <Card className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300">
          <div className="aspect-4/3 bg-linear-to-br from-pink-50 to-purple-100 p-6 flex flex-col dark:from-pink-900/20 dark:to-purple-900/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 h-6 bg-white/80 rounded-full mx-2" />
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden dark:bg-gray-900">
              <div className="h-1/2 bg-linear-to-r from-pink-400 to-purple-500 flex items-center justify-center relative" />
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-pink-100 rounded-lg p-2 dark:bg-pink-900/30" />
                  <div className="bg-purple-100 rounded-lg p-2 dark:bg-purple-900/30" />
                  <div className="bg-blue-100 rounded-lg p-2 dark:bg-blue-900/30" />
                </div>
                <div className="bg-linear-to-r from-pink-50 to-purple-50 rounded-lg p-3 dark:from-pink-900/10 dark:to-purple-900/10" />
              </div>
            </div>
          </div>
        </Card>

        {/* Ejemplo 3: Diseño sin textos - Portafolio Creativo */}
        <Card className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300">
          <div className="aspect-4/3 bg-linear-to-br from-blue-50 to-indigo-100 p-6 flex flex-col dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 h-6 bg-white/80 rounded-full mx-2" />
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden dark:bg-gray-900 flex flex-col">
              <div className="flex-1 grid grid-cols-3 gap-2 p-4">
                <div className="col-span-3 h-24 bg-indigo-200 rounded-lg dark:bg-indigo-800" />
                <div className="h-16 bg-blue-200 rounded-lg dark:bg-blue-800" />
                <div className="h-16 bg-purple-200 rounded-lg dark:bg-purple-800" />
                <div className="h-16 bg-pink-200 rounded-lg dark:bg-pink-800" />
              </div>
              <div className="flex items-center justify-between px-4 pb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-300 dark:bg-indigo-700" />
                <div className="w-20 h-6 bg-gray-200 rounded dark:bg-gray-700" />
                <div className="w-8 h-8 bg-blue-200 rounded-full dark:bg-blue-700" />
              </div>
            </div>
          </div>
        </Card>

        {/* Ejemplo 4: Diseño sin textos - Tienda Online Minimalista */}
        <Card className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300">
          <div className="aspect-4/3 bg-linear-to-br from-gray-50 to-gray-200 p-6 flex flex-col dark:from-gray-900/20 dark:to-gray-700/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 h-6 bg-white/80 rounded-full mx-2" />
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden dark:bg-gray-900 flex flex-col">
              <div className="h-10 bg-gray-100 rounded-full mx-4 mt-4 dark:bg-gray-800" />
              <div className="flex-1 grid grid-cols-2 gap-4 p-4">
                <div className="bg-gray-200 rounded-lg h-24 dark:bg-gray-700" />
                <div className="bg-gray-200 rounded-lg h-24 dark:bg-gray-700" />
                <div className="bg-gray-200 rounded-lg h-24 dark:bg-gray-700" />
                <div className="bg-gray-200 rounded-lg h-24 dark:bg-gray-700" />
              </div>
              <div className="flex items-center justify-between px-4 pb-4">
                <div className="w-24 h-8 bg-green-200 rounded dark:bg-green-700" />
                <div className="w-24 h-8 bg-blue-200 rounded dark:bg-blue-700" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        {siteExamples.footerText}
      </p>
    </Section>
  );
}
