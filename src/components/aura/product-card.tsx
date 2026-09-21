import { Check, Plus, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  inCart: boolean;
  onAdd: (product: Product) => void;
};

export function ProductCard({ product, inCart, onAdd }: ProductCardProps) {
  return (
    <article className="group animate-menu-card-in flex min-h-[470px] flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-card transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-primary/35 hover:shadow-card-hover sm:min-h-[490px]">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          width={1200}
          height={912}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.035] ${
            product.imagePosition === "left"
              ? "object-left"
              : product.imagePosition === "right"
                ? "object-right"
                : product.imagePosition === "top"
                  ? "object-top"
                  : "object-center"
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/55 via-transparent to-background/10" />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-nav/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground shadow-sm backdrop-blur-xl">
            <span className={`size-2 rounded-full ring-4 ${product.vegetarian ? "bg-veg ring-veg/15" : "bg-coral ring-coral/15"}`} />
            {product.vegetarian ? "Vegetarian" : "Non-vegetarian"}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-glass-border bg-nav/90 px-3 py-1.5 text-[11px] font-bold text-foreground shadow-sm backdrop-blur-xl">
            <Star className="size-3 fill-primary text-primary" aria-hidden="true" />
            {product.rating}
          </span>
        </div>
        <span className="absolute bottom-4 left-4 rounded-sm border border-primary/25 bg-nav/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-xl sm:bottom-5 sm:left-5">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="min-w-0">
          <h3 className="text-[1.65rem] leading-[1.05] text-foreground transition-colors duration-200 group-hover:text-primary sm:text-[1.75rem]">
            {product.name}
          </h3>
          <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-muted-foreground sm:text-sm">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border/70 pt-5 sm:pt-6">
          <div>
            <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Price</span>
            <p className="mt-0.5 flex items-baseline font-sans text-3xl font-extrabold leading-none text-primary">
              <span className="mr-1 text-sm font-bold">₹</span>
              {product.price}
            </p>
          </div>
          <Button
            variant={inCart ? "added" : "default"}
            size="default"
            className="h-11 rounded-lg px-4 text-xs shadow-button transition-[transform,background-color,border-color,box-shadow] duration-200 active:scale-[0.97]"
            onClick={() => onAdd(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            {inCart ? <Check /> : <Plus />}
            {inCart ? "Add another" : "Add"}
          </Button>
        </div>
      </div>
    </article>
  );
}