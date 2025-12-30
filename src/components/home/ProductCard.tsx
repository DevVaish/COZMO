import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

export const ProductCard = ({ id, name, price, originalPrice, image, badge }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, price, image });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <Link
  to={`/product/${id}`}
  className="group block"
>
  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-4 border border-white">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {badge && (
      <span className="absolute top-3 left-3 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
        {badge}
      </span>
    )}

    <Button
      onClick={handleAddToCart}
      size="sm"
      className="absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
    >
      <ShoppingBag className="w-4 h-4 mr-2" />
      Add
    </Button>
  </div>

  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
    {name}
  </h3>

  <div className="flex items-center gap-2 mt-1">
    <span className="text-foreground font-medium">${price}</span>
    {originalPrice && (
      <span className="text-muted-foreground line-through text-sm">
        ${originalPrice}
      </span>
    )}
  </div>
</Link>
  );
};
