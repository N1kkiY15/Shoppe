<template>
  <div class="carousel">
    <div v-if="errorLoading" class="carousel__container">
      <div v-if="!isLoading">
        <div class="carousel-container">
          <transition tag="div" name="slide">
            <div
              v-if="currentProduct"
              :key="currentProduct.id"
              class="carousel__container-card"
            >
              <img
                class="carousel__container-photo"
                src="pictures/cover.png"
                :alt="currentProduct.title"
              />
              <div class="carousel__container-description">
                <h1 class="carousel__container-description-heading">
                  {{ currentProduct.title }}
                </h1>
                <h2 class="carousel__container-description-price">
                  ${{ currentProduct.price }}
                </h2>
                <ButtonComp
                  @click="goToPage(currentProduct.id)"
                  variant="special"
                  size="xl"
                  >View product
                </ButtonComp>
              </div>
            </div>
          </transition>
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
import type { Product } from "~/types/product";

onMounted(async () => {
  await fetchByURL();
  startInterval();
}); // restart timer func

const startInterval = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
  intervalId.value = window.setInterval(autoChangePage, 6000);
};

const pagesNumber = 5;
const currentPage = ref(1);

const isActive = (page: number): boolean => page === currentPage.value;

const changePage = (page: number) => {
  currentPage.value = page;
  startInterval();
};

const autoChangePage = () => {
  if (currentPage.value === pagesNumber) {
    currentPage.value = 1;
  } else {
    currentPage.value = currentPage.value + 1;
  }
};

const { isLoading, errorLoading, data, fetchByURL } = useFetch<Product[]>(
  "https://fakestoreapi.com/products",
);

const { navigateToPage } = goToPageItem();

const goToPage = (value: number) => {
  navigateToPage(value);
};

const currentProduct = computed(() => {
  return data.value?.[currentPage.value - 1];
});

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
      justify-content: center;
      padding-left: 30px;
      z-index: 2;
      margin-right: 200px;
    }

    &-photo {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }

    &-description {
      margin-right: auto;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      min-width: 400px;
      gap: 16px;

      &-heading {
        font-size: clamp(1.25rem, 0.964rem + 1.221vw, 2.063rem);
      }

      &-price {
        margin-bottom: 48px;
      }
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

@media (width <= 375px) {
  .carousel {
    height: 354px;
    border-radius: 8px;
    margin-bottom: 21px;

    &__container {
      &-card {
        display: flex;
        justify-content: flex-end;
        padding-left: 8px;
        padding-bottom: 26px;
        margin-right: 0px;
      }

      &-description {
        gap: 3px;

        &-heading {
          max-width: 217px;
          flex-wrap: wrap;
        }

        &-price {
          margin-bottom: 10px;
          font-weight: 400;
          font-size: 14px;
          line-height: 26px;
        }
      }
    }

    &__navigation {
      bottom: 8px;

      & ul {
        gap: 6px;
      }

      & li {
        width: 4px;
        height: 4px;
      }

      & .activePage {
        width: 7px;
        height: 7px;
      }
    }
  }

  .slide-enter-from {
    transform: translateX(calc(100% + 50px));
  }

  .slide-leave-to {
    transform: translateX(calc(-100% - 50px));
  }
}
</style>
