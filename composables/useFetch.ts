export default function useFetch<T>(url: string) {
  
  const isLoading = ref<boolean>(true);
  const errorLoading = ref<boolean>(true);
  const data = ref<T | null>(null);


  const fetchByURL = async () => {
    try {
      const response = await fetch(url);
      const dataResponse = await response.json() as T;
      data.value = dataResponse;
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
    data,
    fetchByURL,
  };
}
