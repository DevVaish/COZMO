const stats = [
  { value: "3", label: "Sub brands" },
  { value: "10M+", label: "Happy Customers" },
  { value: "24", label: "Years in service" },
  { value: "5+", label: "Countries" },
];

export const Stats = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="font-serif text-2xl lg:text-3xl">A softer take on style.</h3>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We're here for effortless fashion that fits your mood — light, calm, and just a little playful. 
            Inspired by pastel palettes, natural textures, and the kind of pieces you'll reach for <em>every day</em>.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="font-serif text-4xl lg:text-5xl text-primary">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
