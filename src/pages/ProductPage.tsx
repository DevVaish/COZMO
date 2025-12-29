import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { ShoppingBag, ChevronLeft, Minus, Plus, Heart } from "lucide-react";
import { ProductCard } from "@/components/home/ProductCard";

const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  if (!product) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/shop">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} has been added to your cart.`,
    });
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <Link to="/shop" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.badge && (
                <span className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <span className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                {product.category}
              </span>
              <h1 className="font-serif text-3xl lg:text-4xl mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-medium">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground mb-8">
                {product.description || "A beautifully crafted piece designed with attention to detail and quality materials."}
              </p>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                          selectedSize === size
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-3">Color</label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                          selectedColor === color
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button onClick={handleAddToCart} size="lg" className="flex-1">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Category</span>
                    <p className="font-medium capitalize">{product.category}</p>
                  </div>
                  {product.subcategory && (
                    <div>
                      <span className="text-muted-foreground">Type</span>
                      <p className="font-medium capitalize">{product.subcategory}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="font-serif text-2xl lg:text-3xl mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
