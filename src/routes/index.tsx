import { createFileRoute, Link } from "@tanstack/react-router";
import heroThali from "@/assets/hero-thali.jpg";
import tandoor from "@/assets/tandoor.jpg";
import chef from "@/assets/chef.jpg";
import interior from "@/assets/interior.jpg";
import spices from "@/assets/spices.jpg";
import butterChicken from "@/assets/dish-butter-chicken.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import tandoori from "@/assets/dish-tandoori.jpg";
import { ArrowRight, Quote, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Schlössle Mahal · Authentic Indian Fine Dining in Vaduz" },
      { name: "description", content: "Royal Indian cuisine in the heart of Vaduz, Liechtenstein. Reserve a table, order online, or discover our chef's signature tasting." },
      { property: "og:title", content: "Schlössle Mahal · Authentic Indian Fine Dining" },
      { property: "og:description", content: "Crafted with tradition. Served with grace. Vaduz, Liechtenstein." },
      { property: "og:image", content: "/og-cover.jpg" },
    ],
  }),
  component: Home,
});

const signatures = [
  { name: "Butter Chicken Schlössle", desc: "Tandoor-charred chicken, silken tomato-cashew, cultured butter.", img: butterChicken, price: "CHF 34" },
  { name: "Lamb Dum Biryani", desc: "Saffron basmati and slow-braised lamb sealed in a copper handi.", img: biryani, price: "CHF 36" },
  { name: "Tandoori Tiger Prawns", desc: "Wild prawns, saffron yoghurt, ajwain, kissed by clay-oven flame.", img: tandoori, price: "CHF 42" },
];

const reviews = [
  { quote: "An astonishing tribute to the great Indian kitchens. The Lamb Rogan Josh is a love letter to Kashmir.", who: "Falstaff", rating: 5 },
  { quote: "The most refined Indian dining experience between Zürich and Milan. Every plate is a small ceremony.", who: "Schweizer Gourmet", rating: 5 },
  { quote: "Schlössle Mahal does not merely serve food — it stages a quiet, perfumed theatre of hospitality.", who: "Vaduz Magazin", rating: 5 },
];

const gallery = [interior, spices, butterChicken, biryani, tandoori, tandoor];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroThali}
            alt="Royal Indian thali at Schlössle Mahal"
            className="h-full w-full object-cover scale-110 animate-[fadeUp_2s_ease-out]"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-curtain)" }} />
        </div>

        <div className="container-luxe pb-20 md:pb-32 pt-40">
          <div className="max-w-3xl">
            <div className="eyebrow animate-fade-up">Vaduz · Liechtenstein · Est. 1998</div>
            <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] animate-fade-up delay-100">
              Authentic Indian Cuisine.<br/>
              <span className="text-gold-gradient italic">Crafted With Tradition.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed animate-fade-up delay-200">
              A candlelit journey through the royal kitchens of India — hand-ground spices,
              slow tandoor fires, and the quiet ceremony of true hospitality.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Link to="/reserve" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-medium tracking-wider uppercase text-primary-foreground shadow-glow hover:opacity-95 transition">
                Reserve a Table
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/menu" className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-sm font-medium tracking-wider uppercase text-gold hover:bg-gold/10 transition">
                Order Online
              </Link>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground animate-float">
          <span>Discover</span>
          <div className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-28 md:py-40">
        <div className="container-luxe grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <img src={interior} alt="Schlössle Mahal interior" loading="lazy" width={1600} height={1200} className="rounded-sm shadow-elegant" />
            <div className="absolute -bottom-8 -right-8 hidden md:block w-48 h-48 border border-gold/40 -z-10" />
          </div>
          <div className="md:col-span-7 md:pl-12">
            <div className="eyebrow">About the House</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              A palace of <span className="text-gold-gradient italic">spice</span><br/>in the heart of Vaduz.
            </h2>
            <div className="hairline my-8 max-w-[120px]" />
            <p className="text-foreground/80 leading-relaxed">
              For more than two decades, Schlössle Mahal has carried the perfume of the Indian
              royal kitchens into the Alpine valley of the Rhine. Our cellars hold spices
              ground each morning by hand. Our tandoor breathes through the evening. Our
              hospitality follows the oldest rule of the subcontinent — <em className="text-gold">Atithi Devo Bhava</em> —
              the guest is divine.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {[
                { k: "26", v: "Years of craft" },
                { k: "32", v: "Spice blends" },
                { k: "1", v: "Living tandoor" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-4xl text-gold-gradient">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* SIGNATURES */}
      <section id="signatures" className="relative py-28 md:py-40 bg-[var(--ink)]">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow">Signature Plates</div>
              <h2 className="mt-4 font-display text-4xl md:text-6xl max-w-xl leading-tight">The chef's <span className="text-gold-gradient italic">love letters</span>.</h2>
            </div>
            <Link to="/menu" className="self-start md:self-end inline-flex items-center gap-2 text-sm tracking-widest uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition">
              Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {signatures.map((s, i) => (
              <article key={s.name} className="group relative overflow-hidden rounded-sm bg-card border border-border/50 hover:border-gold/40 transition-all duration-700">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={s.name} loading="lazy" width={1200} height={1500} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl md:text-3xl">{s.name}</h3>
                    <span className="text-gold text-sm">{s.price}</span>
                  </div>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                </div>
                <div className="absolute top-4 left-4 text-[10px] tracking-[0.4em] uppercase text-gold/80">N° {String(i+1).padStart(2,"0")}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHEF */}
      <section id="chef" className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <img src={tandoor} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container-luxe grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 md:order-2">
            <img src={chef} alt="Executive Chef of Schlössle Mahal" loading="lazy" width={1200} height={1504} className="rounded-sm shadow-elegant" />
          </div>
          <div className="md:col-span-6 md:order-1">
            <div className="eyebrow">The Chef</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">From Lucknow,<br/><span className="text-gold-gradient italic">to the Rhine.</span></h2>
            <div className="hairline my-8 max-w-[120px]" />
            <p className="text-foreground/80 leading-relaxed">
              Chef Aarav Mehrotra was born into the kitchens of Lucknow, where his grandmother
              kept a copper handi that had simmered for three generations. He trained under the
              masters of the Nawabi court tradition, cooked across Delhi, Dubai and Geneva, and
              brought his craft to Vaduz to build a kitchen that honours every grain of saffron.
            </p>
            <blockquote className="mt-8 pl-6 border-l border-gold/60">
              <Quote className="h-5 w-5 text-gold mb-3" />
              <p className="font-display text-xl md:text-2xl italic leading-snug">
                "A dish should taste of the hands that made it, the fire that cooked it, and the soil it came from."
              </p>
              <footer className="mt-4 text-xs tracking-widest uppercase text-muted-foreground">— Chef Aarav Mehrotra</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-28 md:py-40 bg-[var(--ink)]">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow">Press &amp; Guests</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">Words from <span className="text-gold-gradient italic">our table</span>.</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.who} className="rounded-sm border border-border/60 bg-card/40 p-8 backdrop-blur">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-6 font-display text-xl leading-snug italic text-foreground/90">"{r.quote}"</blockquote>
                <figcaption className="mt-6 text-xs tracking-widest uppercase text-gold">{r.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-28 md:py-40">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow">Gallery</div>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">A quiet, <span className="text-gold-gradient italic">perfumed theatre</span>.</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {gallery.map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-sm ${i % 5 === 0 ? "md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-1000" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-28 md:py-40 bg-[var(--ink)]">
        <div className="container-luxe grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Find Us</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">Beneath the<br/><span className="text-gold-gradient italic">Vaduz castle</span>.</h2>
            <div className="hairline my-8 max-w-[120px]" />
            <div className="space-y-6 text-foreground/85">
              <div>
                <div className="eyebrow text-[10px] mb-1">Address</div>
                <p>Schloss Strasse 5<br/>9490 Vaduz, Liechtenstein</p>
              </div>
              <div>
                <div className="eyebrow text-[10px] mb-1">Reservations</div>
                <p>+423 232 32 99<br/>reserve@schloessle-mahal.com</p>
              </div>
              <div>
                <div className="eyebrow text-[10px] mb-1">Hours</div>
                <p>Tue–Sun · 18:00 – 23:00<br/>Lunch Fri–Sun · 12:00 – 14:30</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/reserve" className="rounded-full bg-gold-gradient px-6 py-3 text-xs tracking-widest uppercase text-primary-foreground">Book a Table</Link>
              <a href="https://maps.google.com/?q=Vaduz+Liechtenstein" target="_blank" rel="noreferrer" className="rounded-full border border-gold/50 px-6 py-3 text-xs tracking-widest uppercase text-gold hover:bg-gold/10">Open in Maps</a>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden shadow-elegant">
            <iframe
              title="Schlössle Mahal location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=9.515%2C47.135%2C9.530%2C47.145&amp;layer=mapnik&amp;marker=47.1410%2C9.5209"
              className="absolute inset-0 h-full w-full grayscale-[40%] contrast-110 opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none mix-blend-multiply" style={{ background: "linear-gradient(135deg, oklch(0.30 0.06 50 / 0.35), oklch(0.13 0.012 60 / 0.55))" }} />
          </div>
        </div>
      </section>
    </>
  );
}
