import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { useCart } from "@/lib/cart";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reserve", label: "Reserve" },
  { to: "/#chef", label: "Chef" },
  { to: "/#contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { count, setOpen } = useCart();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/75 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between py-5">
        <Link to="/" className="group flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-gold/40">
            <span className="font-display text-gold text-lg leading-none">S</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg tracking-wide">Schlössle Mahal</div>
            <div className="eyebrow text-[0.6rem]">Vaduz · Liechtenstein</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-border hover:border-gold/60 transition"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-gold-gradient text-[10px] font-medium text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <Link
            to="/reserve"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition"
          >
            Reserve Table
          </Link>
          <button
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-border"
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
          >
            {mobile ? <X className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-luxe py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.to} href={l.to} onClick={() => setMobile(false)} className="text-base text-foreground/90 hover:text-gold">
                {l.label}
              </a>
            ))}
            <Link to="/reserve" onClick={() => setMobile(false)} className="mt-2 inline-flex justify-center rounded-full bg-gold-gradient px-5 py-3 text-sm font-medium text-primary-foreground">
              Reserve Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
