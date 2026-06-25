import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve a Table · Schlössle Mahal · Vaduz" },
      { name: "description", content: "Reserve your table at Schlössle Mahal — Indian fine dining in Vaduz, Liechtenstein." },
      { property: "og:title", content: "Reserve · Schlössle Mahal" },
      { property: "og:description", content: "Book your evening of royal Indian cuisine in Vaduz." },
    ],
  }),
  component: Reserve,
});

function Reserve() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", time: "19:00", guests: "2", notes: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation requested", {
      description: `${form.guests} guests · ${form.date} at ${form.time}. We will confirm by phone shortly.`,
    });
    setForm({ name: "", phone: "", email: "", date: "", time: "19:00", guests: "2", notes: "" });
  };

  return (
    <div className="pt-32 pb-24">
      <section className="container-luxe grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <div className="eyebrow">Reservations</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-tight">Reserve<br/><span className="text-gold-gradient italic">your evening</span>.</h1>
          <div className="hairline my-8 max-w-[120px]" />
          <p className="text-foreground/80 leading-relaxed max-w-md">
            Tell us a little about your evening. We will confirm your table by phone within
            the hour. For parties of seven or more, please call us directly.
          </p>
          <div className="mt-10 relative rounded-sm overflow-hidden shadow-elegant">
            <img src={interior} alt="" className="w-full h-72 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="eyebrow text-[10px]">Direct</div>
              <div className="font-display text-2xl mt-1">+423 232 32 99</div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-sm border border-border/60 bg-card/40 p-8 md:p-10 backdrop-blur space-y-5">
          <Field label="Name" value={form.name} onChange={set("name")} required />
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Phone" type="tel" value={form.phone} onChange={set("phone")} required />
            <Field label="Email" type="email" value={form.email} onChange={set("email")} />
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <Field label="Date" type="date" value={form.date} onChange={set("date")} required />
            <FieldSelect label="Time" value={form.time} onChange={set("time")}>
              {["12:00","12:30","13:00","13:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30"].map((t) => <option key={t} value={t}>{t}</option>)}
            </FieldSelect>
            <FieldSelect label="Guests" value={form.guests} onChange={set("guests")}>
              {[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n}</option>)}
            </FieldSelect>
          </div>
          <label className="block">
            <span className="eyebrow text-[10px]">Special requests</span>
            <textarea
              value={form.notes}
              onChange={set("notes")}
              rows={4}
              placeholder="Window table, allergies, celebrations…"
              className="mt-2 w-full rounded-md border border-input bg-background/40 px-4 py-3 text-sm focus:outline-none focus:border-gold/60"
            />
          </label>
          <button type="submit" className="w-full rounded-full bg-gold-gradient py-4 text-xs tracking-widest uppercase font-medium text-primary-foreground shadow-glow">
            Request Reservation
          </button>
          <p className="text-[10px] text-center text-muted-foreground tracking-widest uppercase">We will confirm within the hour</p>
        </form>
      </section>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="eyebrow text-[10px]">{label}</span>
      <input {...rest} className="mt-2 w-full rounded-md border border-input bg-background/40 px-4 py-3 text-sm focus:outline-none focus:border-gold/60" />
    </label>
  );
}
function FieldSelect({ label, children, ...rest }: { label: string; children: React.ReactNode } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <span className="eyebrow text-[10px]">{label}</span>
      <select {...rest} className="mt-2 w-full rounded-md border border-input bg-background/40 px-4 py-3 text-sm focus:outline-none focus:border-gold/60">
        {children}
      </select>
    </label>
  );
}
