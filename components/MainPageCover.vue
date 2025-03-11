<template>
  <div class="cover">
    <div v-if="!isLoading" class="cover__container">
      <img class ="cover__container-photo" src="assets/pictures/cover.png" />
      <div class="cover__container-description">
        <h1>{{ products[currentPage - 1]?.title }}</h1>
        <h2>$ {{ products[currentPage - 1]?.price }}</h2>
      </div>
      <special-button id="{{ products[currentPage - 1]?.id }}"
        >View product</special-button>
      <nav class="cover__navigation">
        <ul>
          <li
            v-for="page in pagesNumber"
            :key="page"
            :class="{ activePage: isActive(page) }"
            @click="changePage(page)"
          />
        </ul>
      </nav>
    </div> 
    <div v-else class="spinner"></div> 
  </div>
</template>

<script lang="ts" setup>
const pagesNumber: number = 5;
const currentPage = ref<number>(1);
const intervalId = ref<number | null>(null);

const isActive = (page: number): boolean => page === currentPage.value;

const changePage = (page: number) => {
  currentPage.value = page;
};

const autoChangePage = () => {
  if (currentPage.value === pagesNumber) {
    currentPage.value = 1;
  } else {
    currentPage.value = currentPage.value + 1;
  }
};

const isLoading = ref<boolean>(true);
let products: Array<Products> = [];

onMounted(async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const firstFiveItems = data.slice(0, 5);

    products = firstFiveItems.map((item: Products) => item);
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    isLoading.value = false;
  }

  intervalId.value = window.setInterval(autoChangePage, 3000);
});

onUnmounted(() => {
  if (intervalId.value) {
    window.clearInterval(intervalId.value);
  }
});

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
</script>

<style lang="scss" scoped>

.cover {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 646px;
  border-radius: 16px;
  background-color: var(--color-text);
  padding: 226px 857px 213px 39px;
  color: var(--color-contrast);
  margin-bottom: 64px;
  
  &__container {
    display: flex;
    flex-direction: column;
    gap: 48px;
    max-width: 390px;
    z-index: 2;
    
    &-photo {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
    
    &-description {
      display: flex;
      flex-direction: column;
      min-width: 400px;
      gap: 16px;
    }
  }
  
  &__navigation {
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translateX(-50%);
    
    & ul {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    
    & li {
      width: 9px;
      height: 9px;
      background-color: var(--color-contrast);
      border-radius: 50%;
    }
    
    & .activePage {
      width: 16px;
      height: 16px;
      background-color: transparent;
      border-radius: 50%;
      border: 1px solid var(--color-contrast);
    }
  }
}

.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: var(--color-contrast); 
  animation: spin 1s linear infinite;
  

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
}
</style>
