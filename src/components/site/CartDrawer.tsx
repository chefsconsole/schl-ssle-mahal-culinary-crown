import { useCart } from "@/lib/cart";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function CartDrawer() {
  const { open, setOpen, lines, setQty, setNotes, remove, subtotal, clear } = useCart();
  const [mode, setMode] = useState<"delivery" | "pickup">("pickup");
  const [step, setStep] = useState<"cart" | "checkout">("cart");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const delivery = mode === "delivery" && subtotal < 60 ? 6 : 0;
  const total = subtotal + delivery;

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order received", {
      description: `Thank you, ${name}. We will confirm shortly on ${phone}.`,
    });
    clear();
    setOpen(false);
    setStep("cart");
    setName(""); setPhone(""); setAddress("");
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-full sm:max-w-md bg-[var(--onyx)] border-l border-border/60 shadow-elegant transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"} flex flex-col`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div>
            <div className="eyebrow">Your Order</div>
            <div className="font-display text-2xl mt-1">{step === "cart" ? "Tasting Selection" : "Checkout"}</div>
          </div>
          <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-gold/60">
            <X className="h-4 w-4" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 grid place-items-center text-center px-8">
            <div>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/40">
                <ShoppingBag className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-6 font-display text-2xl">Your plate awaits</h3>
              <p className="mt-2 text-sm text-muted-foreground">Add a signature dish to begin your journey.</p>
            </div>
          </div>
        ) : step === "cart" ? (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {lines.map((l) => (
                <div key={l.item.id} className="rounded-xl border border-border/60 bg-card/50 p-4">
                  <div className="flex gap-4">
                    <img src={l.item.image} alt="" className="h-16 w-16 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-display text-lg leading-tight">{l.item.name}</div>
                        <div className="text-gold font-medium">CHF {(l.item.price * l.qty).toFixed(0)}</div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full border border-border/60">
                          <button onClick={() => setQty(l.item.id, l.qty - 1)} className="grid h-8 w-8 place-items-center hover:text-gold"><Minus className="h-3 w-3" /></button>
                          <span className="w-8 text-center text-sm">{l.qty}</span>
                          <button onClick={() => setQty(l.item.id, l.qty + 1)} className="grid h-8 w-8 place-items-center hover:text-gold"><Plus className="h-3 w-3" /></button>
                        </div>
                        <button onClick={() => remove(l.item.id)} className="text-xs text-muted-foreground hover:text-destructive uppercase tracking-wider">Remove</button>
                      </div>
                      <input
                        value={l.notes ?? ""}
                        onChange={(e) => setNotes(l.item.id, e.target.value)}
                        placeholder="Special instructions…"
                        className="mt-3 w-full rounded-md border border-input bg-background/40 px-3 py-2 text-xs placeholder:text-muted-foreground/70 focus:outline-none focus:border-gold/60"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border/50 p-6 space-y-4">
              <div className="grid grid-cols-2 gap-2 p-1 rounded-full border border-border/60">
                {(["pickup","delivery"] as const).map((m) => (
                  <button key={m} onClick={() => setMode(m)} className={`rounded-full py-2 text-xs uppercase tracking-widest transition ${mode===m ? "bg-gold-gradient text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{m}</button>
                ))}
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>CHF {subtotal.toFixed(2)}</span></div>
                {mode === "delivery" && (
                  <div className="flex justify-between text-muted-foreground"><span>Delivery {subtotal>=60 && "(free)"}</span><span>CHF {delivery.toFixed(2)}</span></div>
                )}
                <div className="flex justify-between text-lg pt-2 border-t border-border/40"><span>Total</span><span className="text-gold font-medium">CHF {total.toFixed(2)}</span></div>
              </div>
              <button onClick={() => setStep("checkout")} className="w-full rounded-full bg-gold-gradient py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition">
                Continue to Checkout
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={placeOrder} className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            <Field label="Full name" value={name} onChange={setName} required />
            <Field label="Phone" value={phone} onChange={setPhone} required type="tel" />
            {mode === "delivery" && <Field label="Delivery address" value={address} onChange={setAddress} required />}
            <div className="pt-2 space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between"><span>Total</span><span className="text-gold text-lg">CHF {total.toFixed(2)}</span></div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button type="button" onClick={() => setStep("cart")} className="rounded-full border border-border py-3 text-sm hover:border-gold/60">Back</button>
              <button type="submit" className="rounded-full bg-gold-gradient py-3 text-sm font-medium text-primary-foreground shadow-glow">Place Order</button>
            </div>
            <p className="text-[10px] text-center text-muted-foreground/70 uppercase tracking-widest pt-2">Card · Apple Pay · Google Pay · Cash on pickup</p>
          </form>
        )}
      </aside>
    </>
  );
}

function Field({ label, value, onChange, required, type = "text" }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; type?: string }) {
  return (
    <label className="block">
      <span className="eyebrow text-[10px]">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-md border border-input bg-background/40 px-4 py-3 text-sm focus:outline-none focus:border-gold/60"
      />
    </label>
  );
}
