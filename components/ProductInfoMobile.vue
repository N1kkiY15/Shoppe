<template>
  <div class="info-mobile">
    <div class="info-mobile__description">

      <transition v-if="showDescription" name="fade">
        <item-page-description
          v-if="showDescription"
          :text="props.description"
        />
      </transition>

      <transition v-else name="fade">
        <p class="info-mobile__description-text">
          {{ props.description }}
        </p>
      </transition>

      <button
        class="info-mobile__description-button"
        @click="toggleShowDescription"
        :class="{ active: showDescription }"
      >
        View More
      </button>
    </div>

    <div class="info-mobile__pages">
      <div class="info-mobile__pages-item">
        <button class="info-mobile__pages-button" id="1" @click="togglePage">
          <p>Description</p>
          <MarkDown />
        </button>
        <ItemPageDescription v-if="showPage" :text="props.description" />
      </div>

      <div>
        <button
          class="info-mobile__pages-button"
          id="1"
          @click="togglePageInfo"
        >
          <p>Additional information</p>
          <MarkDown />
        </button>
        <ItemPageInformation v-if="showPageInfo" />
      </div>

      <div>
        <button
          class="info-mobile__pages-button"
          id="1"
          @click="togglePageReviews"
        >
          <p>Reviews({{props.count}})</p>
          <MarkDown />
        </button>
        <ItemPageReviews v-if="showPageReviews" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MarkDown from "../assets/pictures/svg/SvgComponents/MarkDown.vue";

interface PageInfo {
  description: string;
  count: number;
}

const props = defineProps<PageInfo>();

const showDescription = ref<boolean>(false);

const showPage = ref<boolean>(false);
const showPageInfo = ref<boolean>(false);
const showPageReviews = ref<boolean>(false);

const toggleShowDescription = () =>
  (showDescription.value = !showDescription.value);

const togglePage = () => {
  showPage.value = !showPage.value;
};

const togglePageInfo = () => {
  showPageInfo.value = !showPageInfo.value;
};

const togglePageReviews = () => {
  showPageReviews.value = !showPageReviews.value;
};
</script>

<style scoped lang="scss">
.info-mobile {
  flex-direction: column;

  &__description {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 6px;
    margin-bottom: 16px;

    &-text {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all 1s ease;

      &.active {
        -webkit-line-clamp: unset;
      }
    }

    &-button {
      cursor: pointer;
      position: relative;
      margin-bottom: 14px;

      &::after {
        content: ">";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: transform 0.5s ease;
      }

      &.active::after {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }

  &__pages {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 0;
    border-top: 1px solid var(--color-decorative);
    border-bottom: 1px solid var(--color-decorative);

    &-item:last-child {
      margin-bottom: 15px;
    }

    &-button {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
