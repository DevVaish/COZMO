import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/home/Newsletter";
import heroImage from "@/assets/hero-model.jpg";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-rose rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-olive rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Our Story</span>
            <h1 className="font-serif text-4xl lg:text-6xl mt-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Fashion that feels like <span className="italic">home</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              At Cozmo, we believe in creating pieces that become part of your everyday story. 
              Thoughtfully designed, sustainably made, and always comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden aspect-[21/9]">
            <img
              src={heroImage}
              alt="Fashion editorial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl">Our Beginning</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Founded in 2001, Cozmo started with a simple idea: fashion should feel as good as it looks. 
                What began as a small boutique has grown into a beloved brand, but our core values remain unchanged.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every piece in our collection is designed with intention — from the initial sketch to the final stitch. 
                We work with skilled artisans who share our commitment to quality and sustainability.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-accent/50 rounded-2xl p-8 text-center">
                <div className="font-serif text-4xl text-primary">24</div>
                <div className="mt-2 text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="bg-accent/50 rounded-2xl p-8 text-center">
                <div className="font-serif text-4xl text-primary">10M+</div>
                <div className="mt-2 text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-accent/50 rounded-2xl p-8 text-center">
                <div className="font-serif text-4xl text-primary">5+</div>
                <div className="mt-2 text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="bg-accent/50 rounded-2xl p-8 text-center">
                <div className="font-serif text-4xl text-primary">100%</div>
                <div className="mt-2 text-sm text-muted-foreground">Sustainable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl">Our Values</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              The principles that guide everything we create.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Quality First",
                description: "We use only the finest materials and work with skilled artisans to ensure every piece meets our high standards.",
              },
              {
                title: "Sustainable Fashion",
                description: "From organic fabrics to eco-friendly packaging, we're committed to reducing our environmental footprint.",
              },
              {
                title: "Timeless Design",
                description: "We create pieces meant to last — both in quality and style. Fashion that transcends seasons.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <h3 className="font-serif text-xl">{value.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default AboutPage;
