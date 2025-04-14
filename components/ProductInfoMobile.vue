<template>
  <div class="info-mobile">
    <div class="info-mobile__description">
      <p class="info-mobile__description-text">
        {{ props.description }}
      </p>
      <button class="info-mobile__description-button">next</button>
    </div>
  </div>
</template>

<script setup lang="ts">


interface PageInfo {
  description: string;
}
const props = defineProps<PageInfo>()
</script>

<style scoped lang="scss">
.info-mobile {
  flex-direction: column;

  &__description {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 6px;

    &-text {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-button {

    }
  }
}
</style>
