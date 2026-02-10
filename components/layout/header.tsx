"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { headerData } from "@/data/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { brand, navItems, cta, mobileMenu } = headerData;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href={brand.href}
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            {brand.name}
            <span className="text-accent">{brand.accent}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
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
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild size="sm" className="w-fit mt-2">
                <Link href={cta.href} onClick={() => setIsMenuOpen(false)}>
                  {cta.label}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
