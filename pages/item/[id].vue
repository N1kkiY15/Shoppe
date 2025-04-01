<template>
  <div v-if="data" class="item-container">
    <div class="item-container__info item-card">
      <div class="item-card__photos">
        <div class="item-card__photos-menu">
          <img
            src="assets/pictures/Img 01.png"
            class="item-card__photos-menu-card"
          />
          <img
            src="assets/pictures/Img 01.png"
            class="item-card__photos-menu-card"
          />
          <img
            src="assets/pictures/Img 01.png"
            class="item-card__photos-menu-card"
          />
          <img
            src="assets/pictures/Img 01.png"
            class="item-card__photos-menu-card"
          />
        </div>

        <div class="item-card__photos-main">
          <img
            src="assets/pictures/Img 01.png"
            class="item-card__photos-main-picture"
          />
        </div>
      </div>
      <div class="item-card__description item-description">
        <div class="item-description__headings">
          <h2>{{ data?.title }}</h2>
          <h4 class="span-accent">$ {{ data?.price }}</h4>
        </div>

        <div class="item-description__rewiew">
          <div class="item-description__rewiew-line">
            <div class="item-description__rewiew-stars">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarPool />
            </div>
            <span> {{ data.rating.count }} customer review</span>
          </div>
          <div class="item-description__rewiew-text">
            <p>{{ data?.description }}</p>
          </div>
        </div>

        <div class="item-description__add">
          <div class="item-description__add-count"></div>
          <div class="item-description__add-button">
            <ButtonComp variant="secondary" size="xl">ADD TO CART</ButtonComp>
          </div>
        </div>

        <div class="item-description__socials">
          <div class="item-description__socials-like">
            <Hearth />
          </div>
          <div class="item-description__socials-line"></div>
          <div class="item-description__socials-icons">
            <Letter />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>

        <div class="item-description__details">
          <span>SKU: 12</span>
          <span>Category: {{ data.category }}</span>
        </div>
      </div>
    </div>

    <div class="item-container__pages">
      <div class="item-container__page-heading page-heading">
        <h3
          @click="changeItemPage('description')"
          :class="{
            'page-heading__underline': currentPage === 'description',
          }"
          id="description"
        >
          <a>Description</a>
        </h3>
        <h3
          @click="changeItemPage('information')"
          :class="{
            'page-heading__underline': currentPage === 'information',
          }"
          id="information"
        >
          <a>Aditional information</a>
        </h3>
        <h3
          @click="changeItemPage('reviews')"
          :class="{ 'page-heading__underline': currentPage === 'reviews' }"
          id="reviews"
        >
          <a>Reviews({{ data.rating.count }})</a>
        </h3>
      </div>
      <ItemPageDescription
        v-if="currentPage === 'description'"
        :text="data?.description"
      />
      <ItemPageInformation v-if="currentPage === 'information'" />
      <keep-alive>
        <ItemPageReviews
          v-if="currentPage === 'reviews'"
          :title="data.title"
          :count="data.rating.count"
        />
      </keep-alive>
    </div>

    <SimilarItems :category='data.category' />
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
  console.log(data.value);
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
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  flex-direction: column;
  gap: 123px;

  &__info {
    // в нем может ничего не быть, но для бэм мы оставляем его?
  }

  &__page {
    position: relative;
    display: flex;
    flex-direction: column;

    &-heading {
    }
  }
}

.page-heading {
  display: flex;
  flex-direction: row;
  gap: 96px;
  margin-bottom: 34px;
  border-bottom: 2px solid var(--color-decorative);

  &__underline {
    //position: relative;
    padding-bottom: 40px;
    border-bottom: 2px solid var(--color-main);
    z-index: 2;
  }
}

.header__border {
  margin-bottom: 80px;
  border-bottom: 1px solid var(--color-decorative);
}

.item-card {
  display: flex;
  flex-direction: row;
  gap: 62px;

  &__photos {
    display: flex;
    flex-direction: row;
    width: auto;
    flex: 0 0 auto;
    gap: 39px;

    &-menu {
      display: flex;
      flex-direction: column;
      gap: 40px;

      &-card {
        max-width: 120px;
        max-height: 120px;
      }
    }

    &-main {
      max-width: 540px;
      max-height: 600px;

      &-picture {
        width: 540px;
        height: 100%;
      }
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}

.item-description {
  &__headings {
    display: flex;
    flex-direction: column;
    gap: 23px;
    margin-bottom: 64px;
  }

  &__rewiew {
    margin-bottom: 48px;

    &-line {
      display: flex;
      flex-direction: row;
      gap: 24px;
      margin-bottom: 19px;
    }

    &-stars {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }

  &__add {
    margin-bottom: 80px;
  }

  &__socials {
    display: flex;
    gap: 39px;
    margin-bottom: 38px;

    &-line::after {
      content: "";
      border-right: 1px solid var(--color-main);
    }

    &-icons {
      display: flex;
      flex-direction: row;
      gap: 24px;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}
</style>
