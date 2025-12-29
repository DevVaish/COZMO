import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CollectionBanner } from "@/components/home/CollectionBanner";
import { Stats } from "@/components/home/Stats";
import { Categories } from "@/components/home/Categories";
import { Features } from "@/components/home/Features";
import { Newsletter } from "@/components/home/Newsletter";
import collectionPastel from "@/assets/collection-pastel.jpg";
import collectionSummer from "@/assets/collection-summer.jpg";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <CollectionBanner
        title="Pastel Dreams"
        description="Effortless fashion for every mood — light, calm, and a little playful. Inspired by pastels, natural textures, and everyday essentials."
        image={collectionPastel}
        link="/collections/pastel-dreams"
      />
      <Stats />
      <CollectionBanner
        title="Summer 2025"
        description="Your go-to picks for a sun-soaked season. Light fabrics, breezy silhouettes, and colors that pop."
        image={collectionSummer}
        link="/collections/summer-2025"
        reversed
      />
      <Categories />
      <Features />
      <Newsletter />
    </Layout>
  );
};

export default Index;
