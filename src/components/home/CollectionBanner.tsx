import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CollectionBannerProps {
  title: string;
  description: string;
  image: string;
  link: string;
  reversed?: boolean;
}

export const CollectionBanner = ({ title, description, image, link, reversed }: CollectionBannerProps) => {
  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Image */}
          <div className={`relative overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-[3/4] ${reversed ? "lg:order-2" : ""}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className={`flex flex-col justify-center ${reversed ? "lg:order-1" : ""}`}>
            <h2 className="font-serif text-3xl lg:text-5xl">{title}</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-md">
              {description}
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="group">
                <Link to={link}>
                  Explore Collection
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
