import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

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
      <SheetContent className="flex w-[calc(100%-1rem)] flex-col border-glass-border bg-drawer p-0 backdrop-blur-xl sm:max-w-md">
        <SheetHeader className="border-b border-border px-5 py-5 text-left sm:px-6">
          <SheetTitle className="flex items-center gap-3 text-xl">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <ShoppingBag className="size-4" />
            </span>
            Your order
          </SheetTitle>
          <SheetDescription>
            {items.length ? `${items.reduce((sum, item) => sum + item.quantity, 0)} delicious picks` : "Nothing here yet"}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="grid size-24 place-items-center rounded-full border border-dashed border-primary/40 bg-primary/10">
              <ShoppingBag className="size-10 text-primary" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-foreground">
              Your cart is waiting for something delicious.
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Find a new favorite from today&apos;s handpicked menu.
            </p>
            <Button className="mt-6" onClick={onExplore}>Explore menu</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-6">
              {items.map((item) => (
                <article key={item.id} className="grid grid-cols-[72px_minmax(0,1fr)] gap-3 rounded-lg border border-border bg-card p-3">
                  <img
                    src={item.image}
                    alt=""
                    width={1200}
                    height={912}
                    className="size-[72px] rounded-md object-cover"
                  />
                  <div className="min-w-0">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold text-foreground">{item.name}</h3>
                        <p className="mt-1 text-sm font-semibold text-primary">₹{item.price}</p>
                      </div>
                      <Button variant="ghost" size="icon-sm" onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`}>
                        <Trash2 className="text-muted-foreground" />
                      </Button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-md border border-border bg-background">
                        <Button variant="ghost" size="icon-sm" onClick={() => onUpdate(item.id, -1)} aria-label={`Decrease ${item.name} quantity`}>
                          <Minus />
                        </Button>
                        <span className="w-8 text-center text-sm font-bold" aria-live="polite">{item.quantity}</span>
                        <Button variant="ghost" size="icon-sm" onClick={() => onUpdate(item.id, 1)} aria-label={`Increase ${item.name} quantity`}>
                          <Plus />
                        </Button>
                      </div>
                      <p className="text-sm font-bold text-foreground">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-border bg-background/60 p-5 sm:p-6">
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground"><dt>Subtotal</dt><dd>₹{subtotal}</dd></div>
                <div className="flex justify-between text-muted-foreground"><dt>Delivery</dt><dd>₹{deliveryFee}</dd></div>
                <div className="flex justify-between border-t border-border pt-3 text-base font-bold text-foreground"><dt>Total</dt><dd>₹{subtotal + deliveryFee}</dd></div>
              </dl>
              <Button className="mt-5 w-full" size="lg" onClick={onCheckout}>Demo checkout · ₹{subtotal + deliveryFee}</Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">No payment will be taken.</p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}