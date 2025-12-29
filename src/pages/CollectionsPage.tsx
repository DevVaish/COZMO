import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import collectionPastel from "@/assets/collection-pastel.jpg";
import collectionSummer from "@/assets/collection-summer.jpg";

const collections = [
  {
    id: "pastel-dreams",
    name: "Pastel Dreams",
    description: "Soft hues, bold styles — embrace the pastel aesthetic with our curated collection of dreamy essentials.",
    image: collectionPastel,
    itemCount: 24,
  },
  {
    id: "summer-2025",
    name: "Summer 2025",
    description: "Your go-to picks for a sun-soaked season. Light fabrics, breezy silhouettes, and colors that pop.",
    image: collectionSummer,
    itemCount: 18,
  },
];

const CollectionsPage = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl lg:text-5xl">Collections</h1>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Explore our carefully curated collections, each telling its own story.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <Link
                key={collection.id}
                to={`/collections/${collection.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-sm text-background/80">{collection.itemCount} items</span>
                  <h2 className="font-serif text-3xl lg:text-4xl text-background mt-2 flex items-center gap-3">
                    {collection.name}
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                  </h2>
                  <p className="text-background/80 mt-3 max-w-md">
                    {collection.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CollectionsPage;
