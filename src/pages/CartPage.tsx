import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Checkout functionality coming soon!",
    });
  };

  if (items.length === 0) {
    return (
      <Layout>
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-6" />
            <h1 className="font-serif text-3xl lg:text-4xl mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start exploring our collection!
            </p>
            <Link to="/shop">
              <Button size="lg">
                Continue Shopping
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-serif text-3xl lg:text-4xl mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 lg:gap-6 p-4 bg-card border border-border rounded-lg"
                >
                  {/* Product Image */}
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="w-24 h-32 lg:w-32 lg:h-40 overflow-hidden rounded-lg bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          className="font-medium text-lg hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-muted-foreground text-sm mt-1">
                          ${item.price} each
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <span className="font-medium text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-sm text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="font-serif text-xl mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <Button onClick={handleCheckout} size="lg" className="w-full mb-4">
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <Link to="/shop">
                  <Button variant="outline" size="lg" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CartPage;
