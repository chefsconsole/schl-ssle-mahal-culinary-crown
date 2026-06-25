import butterChicken from "@/assets/dish-butter-chicken.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import tandoori from "@/assets/dish-tandoori.jpg";
import thali from "@/assets/hero-thali.jpg";

export type Category =
  | "Starters"
  | "Vegetarian"
  | "Non Vegetarian"
  | "Tandoor"
  | "Breads"
  | "Rice"
  | "Desserts"
  | "Drinks";

export const CATEGORIES: Category[] = [
  "Starters",
  "Vegetarian",
  "Non Vegetarian",
  "Tandoor",
  "Breads",
  "Rice",
  "Desserts",
  "Drinks",
];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // CHF
  category: Category;
  image: string;
  signature?: boolean;
  veg?: boolean;
  spice?: 1 | 2 | 3;
}

export const MENU: MenuItem[] = [
  // Starters
  { id: "samosa", name: "Royal Samosa Trio", description: "Crisp pastry parcels of spiced potato, peas and paneer, served with tamarind and mint chutney.", price: 14, category: "Starters", image: tandoori, veg: true, spice: 1 },
  { id: "chaat", name: "Papdi Chaat Mahal", description: "Layered crisps with yoghurt, chickpeas, pomegranate and sweet-sour chutneys.", price: 16, category: "Starters", image: tandoori, veg: true, spice: 2 },
  { id: "soup", name: "Mulligatawny", description: "Slow-simmered lentil and coconut broth perfumed with curry leaf and tamarind.", price: 13, category: "Starters", veg: true, image: butterChicken, spice: 1 },

  // Vegetarian
  { id: "paneer", name: "Paneer Makhani", description: "House-made cottage cheese in a velvet tomato-fenugreek butter sauce.", price: 28, category: "Vegetarian", image: butterChicken, veg: true, spice: 1, signature: true },
  { id: "dal", name: "Dal Makhani — 24 Hour", description: "Black urad lentils slow-cooked overnight with cream, butter and smoked tomato.", price: 24, category: "Vegetarian", image: butterChicken, veg: true, spice: 1, signature: true },
  { id: "palak", name: "Palak Paneer", description: "Silken spinach with charred paneer, garam masala and a touch of cream.", price: 26, category: "Vegetarian", image: butterChicken, veg: true, spice: 2 },
  { id: "aloo", name: "Aloo Gobi Hyderabadi", description: "Cauliflower and baby potato tempered with mustard seed and curry leaf.", price: 22, category: "Vegetarian", image: butterChicken, veg: true, spice: 2 },

  // Non Vegetarian
  { id: "butter-chicken", name: "Butter Chicken Schlössle", description: "Our signature — tandoor-charred chicken in a silken tomato-cashew sauce finished with cultured butter.", price: 34, category: "Non Vegetarian", image: butterChicken, spice: 2, signature: true },
  { id: "rogan", name: "Lamb Rogan Josh", description: "Kashmiri lamb braised with hand-ground spices, saffron and Himalayan chillies.", price: 38, category: "Non Vegetarian", image: biryani, spice: 3, signature: true },
  { id: "korma", name: "Chicken Korma Awadhi", description: "A regal white curry of almond, cashew and rose with poached chicken supreme.", price: 32, category: "Non Vegetarian", image: butterChicken, spice: 1 },
  { id: "vindaloo", name: "Goan Pork Vindaloo", description: "Slow-braised pork shoulder in palm vinegar, Kashmiri chilli and jaggery.", price: 36, category: "Non Vegetarian", image: butterChicken, spice: 3 },

  // Tandoor
  { id: "tandoori-prawn", name: "Tandoori Tiger Prawns", description: "Wild prawns marinated in saffron, hung yoghurt and ajwain, roasted in the clay oven.", price: 42, category: "Tandoor", image: tandoori, signature: true, spice: 2 },
  { id: "seekh", name: "Galouti Lamb Seekh", description: "Hand-minced lamb kebab with 32 spices, melt-in-mouth tradition of the nawabs.", price: 36, category: "Tandoor", image: tandoori, spice: 2 },
  { id: "tikka", name: "Murgh Malai Tikka", description: "Cream cheese and cardamom marinated chicken, kissed by the tandoor.", price: 32, category: "Tandoor", image: tandoori, spice: 1 },

  // Breads
  { id: "naan-butter", name: "Butter Naan", description: "Pillowy clay-oven flatbread brushed with cultured butter.", price: 7, category: "Breads", image: thali, veg: true },
  { id: "naan-garlic", name: "Garlic & Coriander Naan", description: "With confit garlic and hand-torn coriander.", price: 8, category: "Breads", image: thali, veg: true },
  { id: "paratha", name: "Laccha Paratha", description: "Hand-laminated whole-wheat layers, ghee-finished.", price: 8, category: "Breads", image: thali, veg: true },

  // Rice
  { id: "biryani", name: "Lamb Dum Biryani", description: "Long-grain basmati and slow-braised lamb sealed in a copper handi with saffron and rose.", price: 36, category: "Rice", image: biryani, spice: 2, signature: true },
  { id: "veg-biryani", name: "Hyderabadi Vegetable Biryani", description: "Seasonal vegetables, fried onion, mint and saffron under a dum-cooked seal.", price: 28, category: "Rice", image: biryani, veg: true, spice: 2 },
  { id: "jeera", name: "Jeera Pulao", description: "Basmati tempered with cumin and bay.", price: 10, category: "Rice", image: biryani, veg: true },

  // Desserts
  { id: "gulab", name: "Gulab Jamun & Saffron Cream", description: "Warm milk dumplings, cardamom syrup, saffron crème fraîche.", price: 12, category: "Desserts", image: thali, veg: true },
  { id: "kulfi", name: "Pistachio Kulfi", description: "Slow-reduced milk ice with Sicilian pistachio and edible gold leaf.", price: 14, category: "Desserts", image: thali, veg: true },

  // Drinks
  { id: "lassi", name: "Mango Lassi", description: "Alphonso mango whipped with yoghurt and cardamom.", price: 8, category: "Drinks", image: thali, veg: true },
  { id: "chai", name: "Masala Chai Service", description: "Loose-leaf Assam, fresh ginger, green cardamom — served tableside.", price: 7, category: "Drinks", image: thali, veg: true },
  { id: "cocktail", name: "Bombay Negroni", description: "Bombay Sapphire, Campari, sweet vermouth, smoked cardamom mist.", price: 18, category: "Drinks", image: thali, veg: true },
];
