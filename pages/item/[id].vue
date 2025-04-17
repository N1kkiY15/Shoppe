<template>
  <div v-if="data" class="product">
    <div class="product__main">
      <div class="product__gallery">
        <div class="product__thumbnails">
          <img
            v-for="(photo, index) in arrayOfPhotos"
            :key="index"
            :src="photo"
            class="product__thumbnail"
            :class="{
              'product__thumbnail--active': index === currentPhotoIndex,
            }"
            @click="setMainPhoto(index)"
          />
        </div>

        <div class="product__main-photo">
          <img :src="mainPhoto" class="product__main-image" />
          <div class="product__photo-divider"></div>
        </div>
      </div>

      <div class="product__info">
        <div class="product__header">
          <h2 class="product__title">{{ data.title }}</h2>
          <h4 class="product__price">$ {{ data.price }}</h4>
        </div>

        <div class="product__rating">
          <div class="product__rating-line">
            <div class="product__stars">
              <StarFilled v-for="star in rating" :key="`filled-${star}`" />
              <StarPool
                v-for="star in MAX_NUMBER_OF_STARS - rating"
                :key="`empty-${star}`"
              />
            </div>
            <span class="product__reviews-count"
              >{{ data.rating.count }} customer review</span
            >
          </div>
          <p class="product__description">{{ data.description }}</p>
        </div>

        <div class="product__actions">
          <div class="product__quantity"></div>
          <ButtonComp
            class="product__add-to-cart"
            variant="secondary"
            size="xl"
            @click="shoppingCart.addToCart(data)"
          >
            ADD TO CART
          </ButtonComp>
        </div>

        <ProductInfoMobile
          class="product__info-mobile"
          :description="data.description"
          :count="data.rating.count"
        />

        <div class="product__social">
          <button class="product__like">
            <Hearth />
          </button>
          <div class="product__social-divider"></div>
          <div class="product__social-links">
            <Letter class="product__social-icon" />
            <FacebookIcon class="product__social-icon" />
            <InstagramIcon class="product__social-icon" />
            <TwitterIcon class="product__social-icon" />
          </div>
        </div>

        <div class="product__meta">
          <span class="product__sku">SKU: 12</span>
          <span class="product__category">Category: {{ data.category }}</span>
        </div>
      </div>
    </div>

    <div class="product__tabs">
      <div class="product__tab-headers">
        <h3
          v-for="tab in tabs"
          :key="tab.id"
          class="product__tab-header"
          :class="{ 'product__tab-header--active': currentTab === tab.id }"
          @click="changeTab(tab.id)"
        >
          {{ tab.label
          }}<span v-if="tab.id === 'reviews'">({{ data.rating.count }})</span>
        </h3>
      </div>

      <div class="product__tab-content">
        <ItemPageDescription
          v-if="currentTab === 'description'"
          :text="data.description"
        />
        <ItemPageInformation v-if="currentTab === 'information'" />
        <keep-alive>
          <ItemPageReviews
            v-if="currentTab === 'reviews'"
            :count="data.rating.count"
          />
        </keep-alive>
      </div>
    </div>

    <SimilarItems :category="data.category" />
    <NuxtLink to="/shop" class="product__continue">
      <p class="span-accent">Continue shopping</p>
      <MarkRight />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import Hearth from "SvgComponents/Hearth.vue";
import Letter from "SvgComponents/Letter.vue";
import FacebookIcon from "SvgComponents/FacebookIcon.vue";
import InstagramIcon from "SvgComponents/InstagramIcon.vue";
import TwitterIcon from "SvgComponents/TwitterIcon.vue";
import StarFilled from "SvgComponents/StarFilled.vue";
import StarPool from "SvgComponents/StarPool.vue";

const route = useRoute();
import type { Product } from "~/types/product";

const currentId: number = Number(route.params.id) || 0;
const { isLoading, data, fetchByURL } = useFetch<Product>(
  `https://fakestoreapi.com/products/${currentId}`,
);

onMounted(async () => {
  await fetchByURL();
  startInterval();
});

const currentPage = ref<string>("description");

const changeItemPage = (pageId: string) => {
  if (pageId === "description") {
    currentPage.value = pageId;
  } else if (pageId === "information") {
    currentPage.value = pageId;
  } else if (pageId === "reviews") {
    currentPage.value = pageId;
  }
};

const MAX_NUMBER_OF_STARS = 5;

const currentTab = ref("description");

const tabs = [
  { id: "description", label: "Description" },
  { id: "information", label: "Additional information" },
  { id: "reviews", label: "Reviews" },
];

const changeTab = (tabId: string) => {
  currentTab.value = tabId;
};

const rating = computed(() =>
  data.value?.rating ? Math.round(data.value.rating.rate) : 0,
);

import img1 from "assets/pictures/Img01.png";
import img2 from "assets/pictures/Img02.png";
import img3 from "assets/pictures/Img03.png";
import img4 from "assets/pictures/Img04.png";
import ProductInfoMobile from "../components/ProductInfoMobile.vue";
import { provide } from "#imports";
import MarkRight from "../assets/pictures/svg/SvgComponents/MarkRight.vue";

const arrayOfPhotos = [img1, img2, img3, img4];

const currentPhotoIndex = ref<number>(0);

const mainPhoto = ref(arrayOfPhotos[currentPhotoIndex.value]);

const setMainPhoto = (index: number) => {
  mainPhoto.value = arrayOfPhotos[(currentPhotoIndex.value = index)];
  startInterval();
};

const autoChangePhoto = () => {
  currentPhotoIndex.value =
    (currentPhotoIndex.value + 1) % arrayOfPhotos.length;
  mainPhoto.value = arrayOfPhotos[currentPhotoIndex.value];
};

const intervalId = ref<number | null>(null);

const startInterval = () => {
  if (intervalId.value) clearInterval(intervalId.value);
  intervalId.value = window.setInterval(autoChangePhoto, 3000);
};

const productTitle = computed(() => data.value?.title || "");
const productDescription = computed(() => data.value?.description || "");
const productRatingCount = computed(() => data.value?.rating.count || "");

provide("productTitle", productTitle);
provide("productDescription", productDescription);
provide("productRatingCount", productRatingCount);

import { useShoppingCart } from "#imports";
const shoppingCart = useShoppingCart();

onUnmounted(() => {
  if (intervalId.value) window.clearInterval(intervalId.value);
});
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  gap: 123px;

  &__main {
    display: flex;
    gap: 62px;
  }

  &__gallery {
    display: flex;
    gap: 39px;
  }

  &__thumbnails {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__thumbnail {
    max-width: 120px;
    max-height: 120px;
    border-radius: 10px;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }

    &--active {
      border: 2px solid var(--color-primary);
    }
  }

  &__main-photo {
    display: flex;
    flex-direction: column;
    max-width: 540px;
    gap: 24px;
  }

  &__main-image {
    width: 540px;
    height: 600px;
    object-fit: cover;
  }

  &__photo-divider {
    width: 100%;
    height: 2px;
    background: var(--color-decorative);
  }

  &__info {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 23px;
    margin-bottom: 64px;
  }

  &__title {
    font-size: 2rem;
  }

  &__price {
    color: var(--color-accent);
    font-size: 1.5rem;
  }

  &__rating {
    margin-bottom: 48px;
  }

  &__rating-line {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 19px;
  }

  &__stars {
    display: flex;
    gap: 10px;
  }

  &__reviews-count {
    font-size: 0.875rem;
  }

  &__description {
    line-height: 1.6;
  }

  &__actions {
    display: flex;
    gap: 20px;
    margin-bottom: 80px;
  }

  &__add-to-cart {
    flex-grow: 1;
  }

  &__info-mobile {
    display: none;
  }

  &__social {
    display: flex;
    align-items: center;
    gap: 39px;
    margin-bottom: 38px;
  }

  &__like {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  &__social-divider {
    height: 24px;
    border-right: 1px solid var(--color-main);
  }

  &__social-links {
    display: flex;
    gap: 24px;
  }

  &__social-icon {
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 0.875rem;
  }

  &__tabs {
    display: flex;
    flex-direction: column;
  }

  &__tab-headers {
    position: relative;
    display: flex;
    gap: 96px;
    margin-bottom: 34px;
    border-bottom: 2px solid var(--color-decorative);
  }

  &__tab-header {
    position: relative;
    margin: 0;
    padding-bottom: 40px;
    font-size: 1.125rem;
    cursor: pointer;
    color: var(--color-text-secondary);

    &--active {
      border-bottom: 2px solid var(--color-main);
    }
  }

  &__tab-content {
    margin-top: 20px;
  }

  &__continue {
    display: none;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 72px;
    font-size: 12px;
  }

  @media (width <= 375px) {
    gap: 21px;

    &__main {
      flex-direction: column;
      gap: 24px;
    }

    &__gallery {
      display: flex;
      gap: 39px;
    }

    &__thumbnails {
      display: none;
    }

    &__thumbnail {
      max-width: 120px;
      max-height: 120px;
      border-radius: 10px;
      cursor: pointer;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.8;
      }

      &--active {
        border: 2px solid var(--color-primary);
      }
    }

    &__tabs {
      display: none;
    }

    &__actions {
      display: block;
      margin-bottom: 16px;
    }

    &__main-image {
      width: 100%;
      height: 374px;
      object-fit: cover;
      border-radius: 4px;
    }

    &__title {
      font-size: 20px;
    }

    &__price {
      font-size: 16px;
    }

    &__header {
      margin-bottom: 24px;
    }

    &__rating {
      display: none;
    }

    &__info-mobile {
      display: flex;
    }

    &__social {
      display: none;
    }

    &__meta {
      display: none;
    }

    &__continue {
      display: flex;
    }
  }
}
</style>
