<template>
  <div class="skeleton-card">
    <div class="skeleton-card__image"></div>
    <div class="skeleton-card__description">
      <div class="skeleton-card__description-text"></div>
      <div class="skeleton-card__description-price"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skeleton-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 380px;
  background: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;

  &__image {
    width: 100%;
    height: 380px;
    background: #c0c0c0;
    border-radius: 8px;
    animation: shimmer 1.5s ease-in-out infinite;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-text,
    &-price {
      background: #c0c0c0;
      border-radius: 8px;
      animation: shimmer 1.5s ease-in-out infinite;
    }

    &-text {
      width: 100%;
      height: 50px;
    }

    &-price {
      width: 20%;
      height: 26px;
    }
  }
}

@keyframes shimmer {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}
</style>
