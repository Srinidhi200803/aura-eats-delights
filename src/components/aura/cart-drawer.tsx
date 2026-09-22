import { ArrowRight, Minus, Plus, ShoppingBag, Sparkles, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { CartItem } from "@/data/products";

type CartDrawerProps = {
  items: CartItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onExplore: () => void;
  onCheckout: () => void;
};

export function CartDrawer({
  items,
  open,
  onOpenChange,
  onUpdate,
  onRemove,
  onExplore,
  onCheckout,
}: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 40 : 0;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex h-[100dvh] w-full flex-col overflow-hidden border-l border-glass-border bg-drawer/95 p-0 shadow-card-hover backdrop-blur-3xl data-[state=closed]:duration-200 data-[state=open]:duration-200 sm:max-w-[460px] [&>button]:right-5 [&>button]:top-5 [&>button]:grid [&>button]:size-11 [&>button]:place-items-center [&>button]:rounded-full [&>button]:border [&>button]:border-glass-border [&>button]:bg-glass [&>button]:opacity-100 [&>button]:backdrop-blur-xl [&>button_svg]:size-5">
        <SheetHeader className="shrink-0 border-b border-glass-border px-5 pb-5 pt-6 text-left sm:px-7 sm:pb-6 sm:pt-8">
          <p className="pr-14 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">AURA EATS</p>
          <SheetTitle className="pr-14 text-3xl font-normal leading-none sm:text-4xl">My order</SheetTitle>
          <SheetDescription className="pr-14 text-xs">
            {items.length ? `${items.reduce((sum, item) => sum + item.quantity, 0)} ${items.reduce((sum, item) => sum + item.quantity, 0) === 1 ? "item" : "items"} selected` : "Ready when you are"}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto px-7 py-8 text-center">
             <div className="relative grid size-24 shrink-0 place-items-center rounded-full border border-primary/25 bg-primary/10 shadow-button backdrop-blur-xl">
              <ShoppingBag className="size-9 text-primary" aria-hidden="true" />
              <span className="absolute right-1 top-1 grid size-7 place-items-center rounded-full border border-glass-border bg-drawer text-coral"><Sparkles className="size-3.5" /></span>
            </div>
             <h3 className="mt-7 max-w-xs text-3xl leading-tight text-foreground">
              Your cart is waiting for something delicious.
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              Find a new favorite from today&apos;s handpicked menu.
            </p>
            <Button className="mt-7 h-12 w-full max-w-xs" onClick={onExplore}>Explore menu <ArrowRight /></Button>
          </div>
        ) : (
          <>
            <div className="scrollbar-none min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-3 py-4 sm:px-5 sm:py-5">
              {items.map((item) => (
                 <article key={item.id} className="grid grid-cols-[72px_minmax(0,1fr)] gap-3 rounded-xl border border-glass-border bg-glass/60 p-3 shadow-card backdrop-blur-xl transition-[border-color,background-color] duration-200 hover:border-primary/25 hover:bg-glass sm:grid-cols-[84px_minmax(0,1fr)] sm:gap-4 sm:p-4">
                  <img
                    src={item.image}
                    alt=""
                    width={1200}
                    height={912}
                    className="size-[72px] rounded-lg border border-glass-border object-cover sm:size-[84px]"
                  />
                  <div className="flex min-w-0 flex-col justify-between">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-1">
                      <div className="min-w-0">
                         <h3 className="line-clamp-2 pr-1 text-lg leading-[1.05] text-foreground">{item.name}</h3>
                        <p className="mt-1.5 text-[11px] text-muted-foreground">₹{item.price} each</p>
                      </div>
                      <Button variant="ghost" size="icon-sm" className="-mr-1 -mt-1 size-9 text-muted-foreground hover:text-destructive" onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`}>
                        <Trash2 />
                      </Button>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="flex h-10 items-center rounded-full border border-glass-border bg-background/45 p-0.5">
                        <Button variant="ghost" size="icon-sm" className="size-9 rounded-full" onClick={() => onUpdate(item.id, -1)} aria-label={`Decrease ${item.name} quantity`}>
                          <Minus />
                        </Button>
                        <span className="w-7 text-center text-sm font-bold tabular-nums" aria-live="polite">{item.quantity}</span>
                        <Button variant="ghost" size="icon-sm" className="size-9 rounded-full text-primary" onClick={() => onUpdate(item.id, 1)} aria-label={`Increase ${item.name} quantity`}>
                          <Plus />
                        </Button>
                      </div>
                      <p className="shrink-0 text-sm font-bold tabular-nums text-primary">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="shrink-0 border-t border-glass-border bg-glass/60 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 shadow-nav backdrop-blur-3xl sm:px-7 sm:pb-7 sm:pt-5">
              <dl className="space-y-2.5 text-xs">
                <div className="flex justify-between text-muted-foreground"><dt className="uppercase tracking-[0.12em]">Subtotal</dt><dd className="font-semibold tabular-nums text-foreground">₹{subtotal}</dd></div>
                <div className="flex justify-between text-muted-foreground"><dt className="uppercase tracking-[0.12em]">Delivery fee</dt><dd className="font-semibold tabular-nums text-foreground">₹{deliveryFee}</dd></div>
                <div className="flex items-end justify-between border-t border-glass-border pt-3"><dt className="text-sm font-bold uppercase tracking-[0.14em] text-foreground">Total due</dt><dd className="font-sans text-3xl font-extrabold leading-none tabular-nums text-primary">₹{subtotal + deliveryFee}</dd></div>
              </dl>
              <Button className="mt-4 h-13 w-full rounded-xl text-xs uppercase tracking-[0.12em]" size="lg" onClick={onCheckout}>Complete demo order <ArrowRight /></Button>
              <p className="mt-2.5 text-center text-[10px] text-muted-foreground">Demo only · No payment will be taken</p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}