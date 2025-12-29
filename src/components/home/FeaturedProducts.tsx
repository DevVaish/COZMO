import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import productSkirt from "@/assets/product-skirt.jpg";
import productTop from "@/assets/product-top.jpg";
import productSweater from "@/assets/product-sweater.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";

const products = [
  {
    id: "coral-curve-skirt",
    name: "Coral Curve Skirt",
    price: 100,
    originalPrice: 177,
    image: productSkirt,
    badge: "Sale",
  },
  {
    id: "mist-ruffle-top",
    name: "Mist Ruffle Top",
    price: 113,
    originalPrice: 160,
    image: productTop,
    badge: "Sale",
  },
  {
    id: "willow-knit-sweater",
    name: "Willow Knit Sweater",
    price: 94,
    image: productSweater,
  },
  {
    id: "midnight-hoodie",
    name: "Midnight Hoodie",
    price: 97,
    image: productHoodie,
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Featured</span>
            <h2 className="font-serif text-3xl lg:text-4xl mt-2">Pastel Dreams</h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              Soft hues, bold styles — embrace the pastel aesthetic.
            </p>
          </div>
          <Link
            to="/collections/pastel-dreams"
            className="group inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
