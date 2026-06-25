import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { MENU, CATEGORIES, type Category } from "@/lib/menu-data";
import { useCart } from "@/lib/cart";
import { Plus, Flame, Leaf } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu · Schlössle Mahal · Indian Cuisine in Vaduz" },
      { name: "description", content: "Browse the full menu of Schlössle Mahal — starters, tandoor, biryani, vegetarian and signature dishes. Order online for pickup or delivery in Vaduz." },
      { property: "og:title", content: "Schlössle Mahal · Menu" },
      { property: "og:description", content: "Royal Indian dishes available for pickup, delivery, or in-house." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<Category>("Non Vegetarian");
  const { add } = useCart();

  const items = useMemo(() => MENU.filter((m) => m.category === active), [active]);

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="container-luxe text-center pb-12">
        <div className="eyebrow">Order Online</div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-tight">The <span className="text-gold-gradient italic">Menu</span></h1>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
          Choose your dishes. Add notes for the chef. Pick up at the door or delivered to your table at home.
        </p>
      </section>

      {/* Sticky category tabs */}
      <div className="sticky top-[72px] z-30 bg-background/85 backdrop-blur-xl border-y border-border/60">
        <div className="container-luxe">
          <div className="flex gap-2 overflow-x-auto py-4 -mx-1 px-1 scrollbar-none">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs tracking-widest uppercase transition border ${
                  active === c
                    ? "bg-gold-gradient text-primary-foreground border-transparent shadow-glow"
                    : "border-border text-muted-foreground hover:text-gold hover:border-gold/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Items */}
      <section className="container-luxe pt-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {items.map((it) => (
            <article key={it.id} className="group flex gap-5 p-5 rounded-sm border border-border/60 bg-card/40 hover:border-gold/40 transition-all">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-sm">
                <img src={it.image} alt={it.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {it.signature && (
                  <span className="absolute top-1 left-1 rounded-full bg-gold-gradient px-2 py-0.5 text-[9px] tracking-wider uppercase text-primary-foreground">Signature</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl md:text-2xl leading-tight">{it.name}</h3>
                  <div className="text-gold text-sm whitespace-nowrap">CHF {it.price}</div>
                </div>
                <div className="mt-1.5 flex items-center gap-2 text-[10px] tracking-widest uppercase text-muted-foreground">
                  {it.veg && <span className="inline-flex items-center gap-1 text-emerald-400/80"><Leaf className="h-3 w-3" /> Veg</span>}
                  {it.spice && (
                    <span className="inline-flex items-center gap-0.5 text-gold/80">
                      {Array.from({ length: it.spice }).map((_, i) => <Flame key={i} className="h-3 w-3 fill-current" />)}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed line-clamp-3">{it.description}</p>
                <button
                  onClick={() => add(it)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-[10px] tracking-widest uppercase text-gold hover:bg-gold/10 transition"
                >
                  <Plus className="h-3.5 w-3.5" /> Add to Order
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
