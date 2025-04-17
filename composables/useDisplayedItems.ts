import type { Product } from "~/types/product";

export default function useDisplayedItems(
  numberOfCards: number,
  category = "electronics",
) {
  // const DisplayedItems = () => {
  const { isLoading, errorLoading, data, fetchByURL } = useFetch<Product[]>(
    "https://fakestoreapi.com/products",
  );

  let REQUIRED_NUMBER_OF_CARDS = numberOfCards;

  onMounted(async () => {
    await fetchByURL();
  });

  const displayedItems = computed(() => {
    const products = data.value as Product[]; // Assert type
    const filteredProducts = products.filter(
      (product) => product.category === category,
    );
    return filteredProducts.slice(0, REQUIRED_NUMBER_OF_CARDS);
  });
  // };
  return { displayedItems, isLoading };
}
