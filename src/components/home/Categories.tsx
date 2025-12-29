import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import categoryOuterwear from "@/assets/category-outerwear.jpg";
import categoryTops from "@/assets/category-tops.jpg";
import categoryBottoms from "@/assets/category-bottoms.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const categories = [
  {
    name: "Outerwear",
    description: "Light, flowy, easy",
    image: categoryOuterwear,
    link: "/shop/outerwear",
  },
  {
    name: "Tops",
    description: "Cute meets comfy",
    image: categoryTops,
    link: "/shop/tops",
  },
  {
    name: "Bottoms",
    description: "Relaxed fits, always",
    image: categoryBottoms,
    link: "/shop/bottoms",
  },
  {
    name: "Accessories",
    description: "Small things, big vibe",
    image: categoryAccessories,
    link: "/shop/accessories",
  },
];

export const Categories = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Browse</span>
          <h2 className="font-serif text-3xl lg:text-4xl mt-2">Shop Categories</h2>
          <p className="mt-3 text-muted-foreground">View and find what you want.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.link}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl text-background flex items-center gap-2">
                  {category.name}
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                <p className="text-sm text-background/80 mt-1">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
