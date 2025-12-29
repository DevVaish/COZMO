import productSkirt from "@/assets/product-skirt.jpg";
import productTop from "@/assets/product-top.jpg";
import productSweater from "@/assets/product-sweater.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  category: "women" | "men" | "accessories" | "shoes" | "jewelry";
  subcategory?: string;
  description?: string;
  sizes?: string[];
  colors?: string[];
}

export const products: Product[] = [
  // Women's Clothing
  { id: "coral-curve-skirt", name: "Coral Curve Skirt", price: 100, originalPrice: 177, image: productSkirt, badge: "Sale", category: "women", subcategory: "skirts", description: "A beautiful coral curve skirt with elegant draping.", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Coral", "Blush", "Ivory"] },
  { id: "mist-ruffle-top", name: "Mist Ruffle Top", price: 113, originalPrice: 160, image: productTop, badge: "Sale", category: "women", subcategory: "tops", description: "Delicate ruffle detailing on a soft mist-colored top.", sizes: ["XS", "S", "M", "L"], colors: ["Mist", "Sage", "White"] },
  { id: "willow-knit-sweater", name: "Willow Knit Sweater", price: 94, image: productSweater, category: "women", subcategory: "sweaters", description: "Cozy knit sweater in a warm willow tone.", sizes: ["S", "M", "L", "XL"], colors: ["Willow", "Cream", "Olive"] },
  { id: "serene-flow-dress", name: "Serene Flow Dress", price: 93, originalPrice: 120, image: productSkirt, badge: "Sale", category: "women", subcategory: "dresses", description: "Flowing silhouette with serene aesthetic.", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Blush", "Sage", "Cream"] },
  { id: "bloom-linen-top", name: "Bloom Linen Top", price: 49, image: productTop, category: "women", subcategory: "tops", description: "Light and airy linen top for warm days.", sizes: ["XS", "S", "M", "L"], colors: ["White", "Natural", "Rose"] },
  { id: "petal-slip-dress", name: "Petal Slip Dress", price: 119, image: productSweater, category: "women", subcategory: "dresses", description: "Elegant slip dress with petal-soft fabric.", sizes: ["S", "M", "L"], colors: ["Champagne", "Blush", "Black"] },
  
  // Men's Clothing
  { id: "midnight-hoodie", name: "Midnight Hoodie", price: 97, image: productHoodie, category: "men", subcategory: "hoodies", description: "Premium cotton hoodie in deep midnight shade.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Midnight", "Charcoal", "Navy"] },
  { id: "urban-cotton-tee", name: "Urban Cotton Tee", price: 45, image: productTop, category: "men", subcategory: "t-shirts", description: "Classic fit cotton t-shirt for everyday wear.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Black", "Gray", "Navy"] },
  { id: "slate-chino-pants", name: "Slate Chino Pants", price: 89, image: productSweater, category: "men", subcategory: "pants", description: "Tailored chino pants in versatile slate color.", sizes: ["28", "30", "32", "34", "36"], colors: ["Slate", "Khaki", "Navy"] },
  { id: "forest-crew-sweater", name: "Forest Crew Sweater", price: 110, image: productSweater, category: "men", subcategory: "sweaters", description: "Warm crew neck sweater in forest green.", sizes: ["S", "M", "L", "XL"], colors: ["Forest", "Burgundy", "Charcoal"] },
  { id: "storm-jacket", name: "Storm Jacket", price: 175, originalPrice: 220, image: productHoodie, badge: "Sale", category: "men", subcategory: "jackets", description: "Weather-resistant jacket for all conditions.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Storm Gray", "Black", "Navy"] },
  { id: "classic-oxford-shirt", name: "Classic Oxford Shirt", price: 78, image: productTop, category: "men", subcategory: "shirts", description: "Timeless oxford shirt with button-down collar.", sizes: ["S", "M", "L", "XL"], colors: ["White", "Light Blue", "Pink"] },
  
  // Accessories
  { id: "blush-chain-earrings", name: "Blush Chain Earrings", price: 44, originalPrice: 80, image: productHoodie, badge: "Sale", category: "jewelry", description: "Delicate chain earrings with blush tone accents.", colors: ["Gold", "Silver", "Rose Gold"] },
  { id: "silk-scarf-bloom", name: "Silk Scarf Bloom", price: 65, image: productSkirt, category: "accessories", description: "Luxurious silk scarf with floral print.", colors: ["Bloom", "Sage", "Sunset"] },
  { id: "leather-tote-bag", name: "Leather Tote Bag", price: 189, image: productSweater, category: "accessories", description: "Spacious leather tote for work or weekend.", colors: ["Tan", "Black", "Burgundy"] },
  { id: "woven-belt", name: "Woven Belt", price: 55, image: productHoodie, category: "accessories", description: "Hand-woven belt with brass buckle.", sizes: ["S", "M", "L"], colors: ["Natural", "Brown", "Black"] },
  { id: "cashmere-beanie", name: "Cashmere Beanie", price: 75, image: productTop, category: "accessories", description: "Ultra-soft cashmere beanie for cold days.", colors: ["Cream", "Gray", "Burgundy", "Forest"] },
  
  // Shoes
  { id: "leather-loafers", name: "Leather Loafers", price: 165, image: productSkirt, category: "shoes", description: "Classic leather loafers with comfort insole.", sizes: ["36", "37", "38", "39", "40", "41", "42"], colors: ["Tan", "Black", "Burgundy"] },
  { id: "canvas-sneakers", name: "Canvas Sneakers", price: 89, image: productTop, category: "shoes", description: "Casual canvas sneakers for everyday wear.", sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"], colors: ["White", "Black", "Navy", "Sage"] },
  { id: "suede-ankle-boots", name: "Suede Ankle Boots", price: 195, originalPrice: 250, image: productSweater, badge: "Sale", category: "shoes", description: "Elegant suede ankle boots with block heel.", sizes: ["36", "37", "38", "39", "40", "41"], colors: ["Camel", "Black", "Gray"] },
  { id: "oxford-brogues", name: "Oxford Brogues", price: 210, image: productHoodie, category: "shoes", description: "Handcrafted leather brogues with wingtip detail.", sizes: ["39", "40", "41", "42", "43", "44", "45"], colors: ["Cognac", "Black"] },
  
  // Jewelry
  { id: "gold-pendant-necklace", name: "Gold Pendant Necklace", price: 125, image: productSkirt, category: "jewelry", description: "Minimalist gold pendant on delicate chain.", colors: ["Gold", "Rose Gold"] },
  { id: "pearl-studs", name: "Pearl Studs", price: 68, image: productTop, category: "jewelry", description: "Classic freshwater pearl stud earrings.", colors: ["White Pearl", "Cream Pearl"] },
  { id: "signet-ring", name: "Signet Ring", price: 95, image: productSweater, category: "jewelry", description: "Vintage-inspired signet ring in solid brass.", sizes: ["5", "6", "7", "8", "9"], colors: ["Gold", "Silver"] },
  { id: "layered-bracelet-set", name: "Layered Bracelet Set", price: 85, image: productHoodie, category: "jewelry", description: "Set of three layered bracelets for stacking.", colors: ["Gold", "Silver", "Mixed"] },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};
