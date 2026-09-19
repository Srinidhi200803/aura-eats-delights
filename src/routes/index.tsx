import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  Clock3,
  Flame,
  Leaf,
  Search,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { toast } from "sonner";

import heroImage from "@/assets/aura-hero.jpg";
import promoImage from "@/assets/aura-promo.jpg";
import { CartDrawer } from "@/components/aura/cart-drawer";
import { ProductCard } from "@/components/aura/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories, products, type CartItem, type Category, type Product } from "@/data/products";

const CART_KEY = "aura-eats-cart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURA EATS — Crave the extraordinary" },
      { name: "description", content: "Discover handcrafted flavors, curated favorites, and unforgettable bites with AURA EATS." },
      { property: "og:title", content: "AURA EATS — Crave the extraordinary" },
      { property: "og:description", content: "A premium food ordering experience with curated menus and seamless ordering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuraEats,
});

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function AuraEats() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [category, setCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartReady, setCartReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CART_KEY);
      if (saved) setCart(JSON.parse(saved) as CartItem[]);
    } catch {
      window.localStorage.removeItem(CART_KEY);
    }
    setCartReady(true);
  }, []);

  useEffect(() => {
    if (cartReady) window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, cartReady]);

  const visibleProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = category === "All" || product.category === category;
      const searchMatch = !term || `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      return existing
        ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} added`, { description: "Your order has been updated." });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((current) => current
      .map((item) => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
      .filter((item) => item.quantity > 0));
  };

  const exploreFromCart = () => {
    setCartOpen(false);
    window.setTimeout(() => scrollTo("menu"), 200);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
        <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-glass-border bg-nav px-3 shadow-nav backdrop-blur-xl sm:px-5 lg:grid-cols-[1fr_auto_1fr]" aria-label="Main navigation">
          <button className="flex min-w-0 items-center gap-2.5 text-left" onClick={() => scrollTo("home")} aria-label="AURA EATS home">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-button"><UtensilsCrossed className="size-4" /></span>
            <span className="truncate text-sm font-extrabold tracking-wide sm:text-base">AURA EATS</span>
          </button>
          <div className="hidden items-center gap-8 lg:flex">
            {[["Home", "home"], ["Menu", "menu"], ["Offers", "offers"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-sm font-semibold text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:text-primary">{label}</button>
            ))}
          </div>
          <div className="flex shrink-0 items-center justify-end gap-1.5">
            <Button variant="ghost" size="icon" onClick={() => { setSearchOpen(true); window.setTimeout(() => document.getElementById("food-search")?.focus(), 200); }} aria-label="Search menu"><Search /></Button>
            <Button variant="glass" size="icon" className="relative" onClick={() => setCartOpen(true)} aria-label={`Open cart with ${itemCount} items`}>
              <ShoppingBag />
              {itemCount > 0 && <span className="absolute -right-1 -top-1 grid min-h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-[10px] font-extrabold text-coral-foreground">{itemCount}</span>}
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative min-h-[760px] scroll-mt-24 overflow-hidden border-b border-border sm:min-h-[820px]">
          <img src={heroImage} alt="A curated AURA EATS table with pizza, burger, bowl and seasonal plates" width={1536} height={1152} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center lg:object-right" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-16 pt-28 sm:min-h-[820px] sm:px-8 lg:px-10">
            <div className="max-w-3xl animate-hero-in">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md"><Sparkles className="size-3.5" /> Curated. Crafted. Delivered.</div>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.03] sm:text-7xl lg:text-8xl">Crave the <span className="text-primary">extraordinary.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-soft sm:text-lg">Discover handcrafted flavors, curated favorites, and unforgettable bites delivered to your table.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" onClick={() => scrollTo("menu")}>Explore menu <ArrowDown /></Button>
                <Button variant="glass" size="lg" onClick={() => scrollTo("offers")}>View offers <ArrowRight /></Button>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-soft">
                <span className="flex items-center gap-2"><Clock3 className="size-4 text-primary" /> 25–35 min delivery</span>
                <span className="flex items-center gap-2"><Leaf className="size-4 text-veg" /> Freshly prepared</span>
                <span className="flex items-center gap-2"><Sparkles className="size-4 text-coral" /> 4.8 average rating</span>
              </div>
            </div>
          </div>
        </section>

        <section id="offers" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
          <div className="relative mx-auto min-h-[390px] max-w-7xl overflow-hidden rounded-2xl border border-border bg-card shadow-card sm:min-h-[430px]">
            <img src={promoImage} alt="Chef-inspired pasta and comfort food selection" width={1408} height={912} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-promo-overlay" />
            <div className="relative flex min-h-[390px] max-w-2xl flex-col justify-center p-7 sm:min-h-[430px] sm:p-12 lg:p-16">
              <span className="w-fit rounded-full bg-coral px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-coral-foreground">Tonight&apos;s edit · 20% off</span>
              <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">Your cravings, elevated.</h2>
              <p className="mt-4 max-w-lg leading-7 text-soft">Explore today&apos;s curated selection of comfort food and chef-inspired favorites.</p>
              <Button className="mt-7 w-fit" onClick={() => scrollTo("menu")}>Taste the edit <ChevronRight /></Button>
            </div>
          </div>
        </section>

        <section id="menu" className="scroll-mt-20 px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-primary">The menu</p>
                <h2 className="mt-2 text-3xl font-extrabold sm:text-5xl">Made for the moment.</h2>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">Bold flavors. Beautifully made. Yours in minutes.</p>
              </div>
              <Button variant="outline" onClick={() => setSearchOpen((value) => !value)}><Search /> Search dishes</Button>
            </div>

            <div className={`grid transition-all duration-300 ${searchOpen || search ? "mt-7 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="relative max-w-xl">
                  <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="food-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by dish, ingredient or category" className="h-12 rounded-lg bg-card pl-11 pr-11" />
                  {search && <Button variant="ghost" size="icon-sm" className="absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setSearch("")} aria-label="Clear search"><X /></Button>}
                </div>
              </div>
            </div>

            <div className="scrollbar-none -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" role="tablist" aria-label="Food categories">
              {categories.map((item) => (
                <Button key={item} role="tab" aria-selected={category === item} variant={category === item ? "default" : "glass"} className="shrink-0" onClick={() => setCategory(item)}>
                  {item === "All" && <Flame />}{item}
                </Button>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-5">
              <p className="text-sm text-muted-foreground"><span className="font-bold text-foreground">{visibleProducts.length}</span> dishes found</p>
              {(search || category !== "All") && <Button variant="ghost" size="sm" onClick={() => { setSearch(""); setCategory("All"); }}>Clear filters</Button>}
            </div>

            {visibleProducts.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleProducts.map((product) => <ProductCard key={product.id} product={product} inCart={cart.some((item) => item.id === product.id)} onAdd={addToCart} />)}
              </div>
            ) : (
              <div className="mt-6 flex min-h-80 flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 text-center">
                <Search className="size-9 text-primary" />
                <h3 className="mt-4 text-xl font-bold">No delicious matches yet.</h3>
                <p className="mt-2 text-sm text-muted-foreground">Try another dish, ingredient, or category.</p>
                <Button variant="outline" className="mt-5" onClick={() => { setSearch(""); setCategory("All"); }}>See everything</Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold text-foreground">AURA EATS <span className="font-normal text-muted-foreground">· Crave the extraordinary.</span></p>
          <p>Curated with care. Delivered with warmth.</p>
        </div>
      </footer>

      <CartDrawer items={cart} open={cartOpen} onOpenChange={setCartOpen} onUpdate={updateQuantity} onRemove={(id) => setCart((current) => current.filter((item) => item.id !== id))} onExplore={exploreFromCart} onCheckout={() => { setCartOpen(false); toast.success("Demo order confirmed", { description: "No payment was taken. Your favorites are still in the cart." }); }} />
    </div>
  );
}
