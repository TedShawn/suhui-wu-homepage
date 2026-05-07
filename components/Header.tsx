"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col" onClick={() => setIsOpen(false)}>
          <span className="text-base font-semibold tracking-tight text-ink">{site.name}</span>
          <span className="text-xs text-slate-500">Nanjing University</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-glacier text-ocean"
                    : "text-slate-600 hover:bg-slate-100 hover:text-ocean"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 hover:text-ocean md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-5 pb-4 shadow-sm md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1 pt-3">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active ? "bg-glacier text-ocean" : "text-slate-600 hover:bg-slate-50 hover:text-ocean"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
