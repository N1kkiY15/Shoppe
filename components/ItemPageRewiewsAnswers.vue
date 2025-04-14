<template>
  <div class="answers">
    <AuthorsAnswer
      v-for="(review, index) in visibleReviews"
      :key="index"
      class="answers__item"
      :author="review.author"
      :text="review.text"
      :rating="review.rating"
    >
    </AuthorsAnswer>

    <ButtonComp
      v-if="hasMoreReviews"
      variant="primary"
      size="l"
      @click="loadMore"
    >
      More
    </ButtonComp>
  </div>
</template>

<script setup lang="ts">
const reviewsArray = [
  {
    text: "bomboclap bomboclap bomboclap bomboclap bomboclap bomboclap    bomboclapbomboclap bomboclap bomboclap bomboclap",
    author: "Lilly",
    rating: 5,
  },
  {
    text: "bomboclap 22222222222222222222 bomboclap 22222222222222222222 bomboclap 22222222222222222222 bomboclap 22222222222222222222",
    author: "Mary",
    rating: 3,
  },
  {
    text: "lorem ipsum dolor",
    author: "Milli",
    rating: 1,
  },
  {
    text: "gde merge request",
    author: "Ivan Barinov",
    rating: 4,
  },
  {
    text: "bomboclap bomboclap bomboclap bomboclap bomboclap bomboclap    bomboclapbomboclap bomboclap bomboclap bomboclap",
    author: "Lilly",
    rating: 5,
  },
  {
    text: "bomboclap 22222222222222222222 bomboclap 22222222222222222222 bomboclap 22222222222222222222 bomboclap 22222222222222222222",
    author: "Mary",
    rating: 3,
  },
  {
    text: "lorem ipsum dolor",
    author: "Milli",
    rating: 1,
  },
  {
    text: "gde merge request",
    author: "Ivan Barinov",
    rating: 4,
  },
  {
    text: "bomboclap bomboclap bomboclap bomboclap bomboclap bomboclap    bomboclapbomboclap bomboclap bomboclap bomboclap",
    author: "Lilly",
    rating: 5,
  },
  {
    text: "bomboclap 22222222222222222222 bomboclap 22222222222222222222 bomboclap 22222222222222222222 bomboclap 22222222222222222222",
    author: "Mary",
    rating: 3,
  },
  {
    text: "lorem ipsum dolor",
    author: "Milli",
    rating: 1,
  },
  {
    text: "gde merge request",
    author: "Ivan Barinov",
    rating: 4,
  },
];

const visibleCount = ref(3);
const itemsPerLoad = 3;

const visibleReviews = computed(() =>
  reviewsArray.slice(0, visibleCount.value),
);
const hasMoreReviews = computed(() => visibleCount.value < reviewsArray.length);
const loadMore = () => {
  visibleCount.value += itemsPerLoad;
};
</script>

<style scoped lang="scss">
.answers {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  &__item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--color-decorative);
    width: 100%;
    padding-bottom: 39px;

    &:last-child {
      margin-bottom: 0;
      border-bottom: none;
    }
  }

  &__item-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  &__item-author {
    margin: 0;
  }

  &__item-date {
    color: var(--color-text);
    font-size: var(--font-size-text-medium);
    font-weight: var(--font-weight-regular);
  }

  &__item-rating {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 24px;
  }

  &__item-text {
    color: var(--color-text);
    margin: 0;
    font-weight: var(--font-weight-regular);
  }
}
</style>
