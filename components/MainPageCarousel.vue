<template>
  <div class="carousel">
    <div v-if="errorLoading" class="carousel__container">
      <div v-if="!isLoading">
        <div class="carousel-container">
          <transition-group tag="div" name="slide">
            <div
              v-if="products[currentPage - 1]"
              :key="products[currentPage - 1].id"
              class="carousel__container-card"
            >
              <img
                class="carousel__container-photo"
                src="assets/pictures/cover.png"
                :alt="products[currentPage - 1].title"
              />
              <div class="carousel__container-description">
                <h1>{{ products[currentPage - 1].title }}</h1>
                <h2>${{ products[currentPage - 1].price }}</h2>
              </div>
              <ButtonComp variant="special" size="xl">View product</ButtonComp>
            </div>
          </transition-group>
        </div>

        <nav class="carousel__navigation">
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
      <div v-else class="spinner" />
    </div>
    <ErrorMessage v-if="!errorLoading" class="error" />
  </div>
</template>

<script lang="ts" setup>
import ErrorMessage from "./ErrorMessage.vue";

onMounted(async () => {
  await fetchByURL();
  intervalId.value = window.setInterval(autoChangePage, 5000);
});

const pagesNumber = 5;
const currentPage = ref(1);

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

const { isLoading, errorLoading, products, fetchByURL } = useFetch(
  "https://fakestoreapi.com/products"
);

const intervalId = ref<number | null>(null);

onUnmounted(() => {
  if (intervalId.value) {
    window.clearInterval(intervalId.value);
  }
});
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 646px;
  border-radius: 16px;
  color: var(--color-contrast);
  margin-bottom: 64px;

  &__container {
    &-card {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: 48px;
      position: absolute;
      padding: 226px 857px 213px 39px;
      z-index: 2;
      margin-right: 200px;
    }

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
    z-index: 2;

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
      cursor: pointer;
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

.slide-enter-active,
.slide-leave-active {
  transition: transform 1s ease;
}

.slide-enter-from {
  transform: translateX(calc(100% + 200px));
}

.slide-leave-to {
  transform: translateX(calc(-100% - 200px));
}
</style>
