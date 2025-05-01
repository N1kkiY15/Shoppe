import { defineStore } from "pinia";
import type { Product } from "~/types/product";

export const useShoppingCart = defineStore("shoppingCart", () => {
  const productCart = ref<Product[]>([]);

  const findProduct = (id: number) => {
    return productCart.value.find((obj) => obj.id === id);
  };

  const addProduct = (product: Product) => {
    productCart.value.push(product);
  };

  const clearCart = () => {
    productCart.value = [];
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    const existingProduct = findProduct(product.id);
    if (existingProduct) {
      existingProduct.qty += quantity;
    } else {
      addProduct({ ...product, qty: quantity });
    }
  };

  const incrementProduct = (id: number) => {
    const product = findProduct(id);
    if (product) product.qty++;
  };

  const decrementProduct = (id: number) => {
    const product = findProduct(id);
    if (!product) return;
    product.qty--;

    if (product.qty < 1) {
      removeProduct(product.id);
    }
  };

  const removeProduct = (id: number) => {
    productCart.value = productCart.value.filter((p) => p.id !== id);
  };

  const totalPrice = computed(() => {
    const sum = productCart.value.reduce((sum, product) => {
      return sum + product.price * product.qty;
    }, 0);
    return Number(sum.toFixed(2));
  });

  return {
    productCart,
    addProduct,
    incrementProduct,
    decrementProduct,
    addToCart,
    clearCart,
    removeProduct,
    totalPrice,
  };
});
