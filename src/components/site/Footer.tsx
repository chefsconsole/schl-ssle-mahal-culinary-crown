export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border/60 bg-[var(--ink)]">
      <div className="container-luxe py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">Schlössle <span className="text-gold-gradient">Mahal</span></div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            An ode to the royal kitchens of India, brought to the heart of Vaduz.
            Hand-ground spices, slow fires, and the rituals of true hospitality.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://wa.me/4232323299"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-xs tracking-wider uppercase text-gold hover:bg-gold/10 transition"
            >
              WhatsApp Ordering
            </a>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4">Visit</div>
          <p className="text-sm leading-relaxed text-foreground/80">
            Schloss Strasse 5<br/>
            9490 Vaduz<br/>
            Liechtenstein
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Hours</div>
          <p className="text-sm leading-relaxed text-foreground/80">
            Tue – Sun · 18:00 – 23:00<br/>
            Lunch Fri – Sun · 12:00 – 14:30<br/>
            <span className="text-muted-foreground">Closed Mondays</span>
          </p>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container-luxe py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Schlössle Mahal · Vaduz</div>
          <div className="tracking-widest uppercase">Crafted with tradition · Served with grace</div>
        </div>
      </div>
    </footer>
  );
}
