import Link from "next/link";
import { footerData } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand, description, navItems, copyright } = footerData;

  return (
    <footer className="py-12 border-t border-slate-900/80 bg-[#05070c] text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link
              href={brand.href}
              className="text-lg font-semibold tracking-tight text-slate-100"
            >
              {brand.name}
              <span className="text-cyan-300">{brand.accent}</span>
            </Link>
            <p className="mt-2 text-sm text-slate-400">{description}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} {brand.name}. {copyright.label}
          </p>
        </div>
      </div>
    </footer>
  );
}
