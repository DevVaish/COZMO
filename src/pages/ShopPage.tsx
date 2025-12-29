import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/home/ProductCard";
import { products } from "@/data/products";

interface ShopPageProps {
  category?: "women" | "men" | "accessories" | "shoes" | "jewelry";
}

const categories = [
  { id: "all", name: "All Products" },
  { id: "women", name: "Women" },
  { id: "men", name: "Men" },
  { id: "accessories", name: "Accessories" },
  { id: "shoes", name: "Shoes" },
  { id: "jewelry", name: "Jewelry" },
];

const filters = ["All", "New Arrivals", "Best Sellers", "Sale"];

const ShopPage = ({ category }: ShopPageProps) => {
  const [activeCategory, setActiveCategory] = useState(category || "all");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts = products.filter((product) => {
    if (activeCategory === "all") return true;
    return product.category === activeCategory;
  }).filter((product) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Sale") return product.badge === "Sale";
    return true;
  });

  const title = categories.find((c) => c.id === activeCategory)?.name || "All Products";

  return (
    <Layout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl lg:text-5xl">{title}</h1>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Discover our curated collection of thoughtfully designed pieces.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium border rounded-full transition-colors ${
                  activeFilter === filter
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "forwards" }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ShopPage;
