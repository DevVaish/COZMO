import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-model.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion model in elegant cream blazer with golden embroidery"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            Effortless Style,{" "}
            <span className="italic">Thoughtfully Made</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Modern essentials in soft tones and timeless cuts — designed to feel good and look even better.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            <Button asChild size="lg" className="group">
              <Link to="/shop/women">
                Shop Women
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/shop/men">
                Shop Men
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" })}
        className="absolute bottom-8 left-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors animate-fade-in opacity-0"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
        Scroll to explore
      </button>
    </section>
  );
};
