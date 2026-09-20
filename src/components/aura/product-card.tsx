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
    <article className="group flex min-h-[490px] flex-col overflow-hidden rounded-lg border border-border bg-card/80 shadow-card backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-card-hover">
      <div className="relative aspect-[4/3.35] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          width={1200}
          height={912}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.055] ${
            product.imagePosition === "left"
              ? "object-left"
              : product.imagePosition === "right"
                ? "object-right"
                : product.imagePosition === "top"
                  ? "object-top"
                  : "object-center"
          }`}
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span className="rounded-sm border border-glass-border bg-nav px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary backdrop-blur-md">
            {product.category}
          </span>
          <span className="flex items-center gap-1 rounded-sm border border-glass-border bg-nav px-2.5 py-1 text-[10px] font-semibold text-foreground backdrop-blur-md">
            <Star className="size-3 fill-primary text-primary" aria-hidden="true" />
            {product.rating}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex min-w-0 items-start gap-2">
          <span
            className="mt-1.5 grid size-4 shrink-0 place-items-center border border-veg text-veg"
            aria-label={product.vegetarian ? "Vegetarian" : "Non-vegetarian"}
          >
            <span className={`size-1.5 rounded-full ${product.vegetarian ? "bg-veg" : "bg-coral"}`} />
          </span>
          <div className="min-w-0">
             <h3 className="text-2xl leading-[1.05] text-foreground transition-colors group-hover:text-primary">{product.name}</h3>
             <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border/70 pt-5">
          <p className="text-xl font-semibold text-primary">
            <span className="mr-0.5 text-sm font-medium">₹</span>
            {product.price}
          </p>
          <Button
            variant={inCart ? "added" : "default"}
            size="sm"
            onClick={() => onAdd(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            {inCart ? <Check /> : <Plus />}
            {inCart ? "Add another" : "Add to cart"}
          </Button>
        </div>
      </div>
    </article>
  );
}