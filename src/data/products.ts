import asianImage from "@/assets/menu-asian.jpg";
import burgersImage from "@/assets/menu-burgers.jpg";
import dessertImage from "@/assets/menu-dessert.jpg";
import drinkImage from "@/assets/menu-drink.jpg";
import indianImage from "@/assets/menu-indian.jpg";
import pizzaImage from "@/assets/menu-pizza.jpg";
import promoImage from "@/assets/aura-promo.jpg";

export const categories = ["All", "Pizza", "Burgers", "Indian", "Asian", "Desserts", "Drinks"] as const;

export type Category = (typeof categories)[number];

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Exclude<Category, "All">;
  vegetarian: boolean;
  rating: number;
  image: string;
  imagePosition?: string;
};

export type CartItem = Product & { quantity: number };

export const products: Product[] = [
  {
    id: 1,
    name: "Truffle Mushroom Pizza",
    description: "Wild mushrooms, truffle cream, mozzarella and thyme.",
    price: 349,
    category: "Pizza",
    vegetarian: true,
    rating: 4.9,
    image: pizzaImage,
    imagePosition: "right",
  },
  {
    id: 2,
    name: "Classic Smash Burger",
    description: "Double seared patty, cheddar, pickles and house sauce.",
    price: 279,
    category: "Burgers",
    vegetarian: false,
    rating: 4.8,
    image: burgersImage,
    imagePosition: "left",
  },
  {
    id: 3,
    name: "Spicy Paneer Tikka",
    description: "Charred paneer, peppers, mint chutney and smoked spices.",
    price: 249,
    category: "Indian",
    vegetarian: true,
    rating: 4.8,
    image: indianImage,
  },
  {
    id: 4,
    name: "Korean Gochujang Bowl",
    description: "Sticky gochujang chicken, rice, kimchi and sesame greens.",
    price: 329,
    category: "Asian",
    vegetarian: false,
    rating: 4.9,
    image: asianImage,
  },
  {
    id: 5,
    name: "Creamy Alfredo Pasta",
    description: "Silky parmesan sauce, garlic, herbs and grilled chicken.",
    price: 299,
    category: "Indian",
    vegetarian: false,
    rating: 4.7,
    image: promoImage,
  },
  {
    id: 6,
    name: "Crispy Chicken Burger",
    description: "Crackling chicken, slaw, pickles and smoky chili mayo.",
    price: 299,
    category: "Burgers",
    vegetarian: false,
    rating: 4.8,
    image: burgersImage,
    imagePosition: "right",
  },
  {
    id: 7,
    name: "Chocolate Lava Cake",
    description: "Warm dark chocolate center, vanilla cream and berries.",
    price: 199,
    category: "Desserts",
    vegetarian: true,
    rating: 4.9,
    image: dessertImage,
  },
  {
    id: 8,
    name: "Mango Matcha Cooler",
    description: "Alphonso mango, ceremonial matcha and fresh lime.",
    price: 179,
    category: "Drinks",
    vegetarian: true,
    rating: 4.7,
    image: drinkImage,
  },
  {
    id: 9,
    name: "Margherita Pizza",
    description: "San Marzano tomato, fresh mozzarella and basil oil.",
    price: 299,
    category: "Pizza",
    vegetarian: true,
    rating: 4.7,
    image: pizzaImage,
    imagePosition: "left",
  },
  {
    id: 10,
    name: "Loaded French Fries",
    description: "Golden fries, cheddar sauce, jalapeño and scallions.",
    price: 149,
    category: "Burgers",
    vegetarian: true,
    rating: 4.6,
    image: promoImage,
    imagePosition: "top",
  },
  {
    id: 11,
    name: "Firecracker Tofu Bowl",
    description: "Crisp tofu, chili glaze, jasmine rice and crunchy greens.",
    price: 289,
    category: "Asian",
    vegetarian: true,
    rating: 4.7,
    image: asianImage,
  },
  {
    id: 12,
    name: "Saffron Kulfi Cloud",
    description: "Saffron kulfi, pistachio praline and rose crumbs.",
    price: 189,
    category: "Desserts",
    vegetarian: true,
    rating: 4.8,
    image: dessertImage,
  },
];