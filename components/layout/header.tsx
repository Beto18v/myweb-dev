"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { headerData } from "@/data/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { brand, navItems, cta, mobileMenu } = headerData;

  // Smooth scroll handler
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[rgba(6,12,24,0.78)] shadow-lg border-b border-[rgba(56,189,248,0.18)] backdrop-blur-xl backdrop-saturate-150"
      style={{
        WebkitBackdropFilter: "blur(16px) saturate(150%)",
        backdropFilter: "blur(16px) saturate(150%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href={brand.href}
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-100 px-3 py-1 rounded-xl bg-[rgba(30,64,175,0.12)] border border-[rgba(56,189,248,0.22)] shadow-sm"
            style={{ letterSpacing: "0.01em" }}
            onClick={(e) => handleSmoothScroll(e, brand.href)}
          >
            <span>
              {brand.name}
              <span className="text-cyan-300">{brand.accent}</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-slate-200/90 hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-[rgba(56,189,248,0.12)]"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              size="sm"
              className="rounded-lg shadow-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2"
            >
              <a
                href={cta.href}
                onClick={(e) => handleSmoothScroll(e, cta.href)}
              >
                {cta.label}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-100 rounded-lg bg-[rgba(56,189,248,0.14)] hover:bg-[rgba(56,189,248,0.22)] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen ? mobileMenu.closeLabel : mobileMenu.openLabel
            }
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <span suppressHydrationWarning>
                <Menu className="h-5 w-5" />
              </span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 px-4 py-6 border-t border-[rgba(56,189,248,0.18)] bg-[rgba(6,12,24,0.94)] backdrop-blur-xl rounded-b-2xl shadow-lg">
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-slate-100 hover:text-white transition-colors px-4 py-2 rounded-xl border border-[rgba(56,189,248,0.14)] bg-[rgba(56,189,248,0.08)] backdrop-blur-md hover:bg-[rgba(56,189,248,0.18)] shadow-sm"
                  style={{
                    WebkitBackdropFilter: "blur(8px)",
                    backdropFilter: "blur(8px)",
                  }}
                  onClick={(e) => {
                    handleSmoothScroll(e, item.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <Button
                asChild
                size="sm"
                className="w-fit mt-4 rounded-lg shadow-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2"
              >
                <a
                  href={cta.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, cta.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {cta.label}
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
