import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "Check your inbox for your 20% off code.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 lg:py-28 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl">
            Subscribe to our mailing list &{" "}
            <span className="italic">Earn 20% off</span> code to your inbox
          </h2>
          <p className="mt-4 text-muted-foreground">
            By joining our email list, you're saying yes to style updates, cozy vibes, and thoughtful emails. 
            We'll always treat your info with care.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="group">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
