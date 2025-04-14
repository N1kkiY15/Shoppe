import { defineStore } from "pinia";
import { ref } from 'vue';
import type { Product } from "~/types/product";

export const useShoppingCart = defineStore("shoppingCart", () => {
  const productCart = ref<Product[]>([]);

  const addProduct = (product: Product) => {
    productCart.value.push(product);
    console.log(product);
    console.log("productCart:", productCart.value)
  };

  const clearCart = () => {
    productCart.value = [];
  };

  return {
    productCart,
    addProduct,
  };
});
