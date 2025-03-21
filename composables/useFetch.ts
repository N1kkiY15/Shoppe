export default function useFetch(url: string) {
  
  const isLoading = ref<boolean>(true);
  const errorLoading = ref<boolean>(true);
  const products = ref<Array<Products>>([]);
  const cardsOnPage: number = 6;

  interface Rating {
    rate: number;
    count: number;
  }

  interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }

  const fetchByURL = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      products.value = data;
    } catch (error) {
      errorLoading.value = false;
      console.error("Error fetching products:", error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    errorLoading,
    products,
    fetchByURL,
    cardsOnPage,
  };
}
