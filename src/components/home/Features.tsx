import { ShieldCheck, RotateCcw, Globe, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description: "Your info stays safe with us. All payments are encrypted and protected.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Changed your mind? No worries — you have 30 days to send it back, stress-free.",
  },
  {
    icon: Globe,
    title: "Worldwide Delivery",
    description: "From our shop to your doorstep. Fast, reliable shipping wherever you are.",
  },
  {
    icon: HeadphonesIcon,
    title: "Here to Help",
    description: "Need something? Our support team's just a message away — always happy to chat.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
