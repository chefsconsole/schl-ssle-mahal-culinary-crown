import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "@/lib/cart";
import { CartDrawer } from "@/components/site/CartDrawer";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">404</div>
        <h1 className="mt-3 font-display text-5xl">Lost in the kitchen</h1>
        <p className="mt-3 text-sm text-muted-foreground">The page you seek has wandered off. Return to the dining room.</p>
        <Link to="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow">
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">A small mishap in the kitchen. Try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground">Try again</button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Schlössle Mahal · Authentic Indian Fine Dining in Vaduz, Liechtenstein" },
      { name: "description", content: "Schlössle Mahal — a Michelin-inspired Indian restaurant in Vaduz, Liechtenstein. Reserve a table, order online, and discover the royal cuisine of India." },
      { name: "author", content: "Schlössle Mahal" },
      { property: "og:title", content: "Schlössle Mahal · Authentic Indian Fine Dining · Vaduz" },
      { property: "og:description", content: "Royal Indian cuisine, crafted with tradition. Reserve or order online." },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1a1410" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Nav />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
        <Toaster />
        <a
          href="https://wa.me/4232323299"
          target="_blank"
          rel="noreferrer"
          aria-label="Order on WhatsApp"
          className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-105 transition"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.46 0 .12 5.34.12 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.43-8.41ZM12.04 21.8a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.37a9.85 9.85 0 1 1 8.36 4.63Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.21-.57-.36Z"/></svg>
        </a>
      </CartProvider>
    </QueryClientProvider>
  );
}
