import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { MenuItem } from "./menu-data";

export interface CartLine {
  item: MenuItem;
  qty: number;
  notes?: string;
}

interface CartCtx {
  lines: CartLine[];
  add: (item: MenuItem, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  setNotes: (id: string, notes: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sm_cart");
      if (raw) setLines(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem("sm_cart", JSON.stringify(lines)); } catch {}
  }, [lines]);

  const add = (item: MenuItem, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.item.id === item.id);
      if (existing) return prev.map((l) => l.item.id === item.id ? { ...l, qty: l.qty + qty } : l);
      return [...prev, { item, qty }];
    });
    setOpen(true);
  };
  const remove = (id: string) => setLines((p) => p.filter((l) => l.item.id !== id));
  const setQty = (id: string, qty: number) =>
    setLines((p) => qty <= 0 ? p.filter((l) => l.item.id !== id) : p.map((l) => l.item.id === id ? { ...l, qty } : l));
  const setNotes = (id: string, notes: string) =>
    setLines((p) => p.map((l) => l.item.id === id ? { ...l, notes } : l));
  const clear = () => setLines([]);

  const count = lines.reduce((s, l) => s + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.qty * l.item.price, 0);

  return (
    <Ctx.Provider value={{ lines, add, remove, setQty, setNotes, clear, count, subtotal, open, setOpen }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used within CartProvider");
  return v;
}
