<template>
  <transition name="slide">
    <div
      v-if="isOpen"
      class="modal"
      @click.stop
      :class="{ 'modal-error': props.status === 'falseMessage' }"
    >
      <div class="modal__section">
        <SuccessIcon v-if="props.status !== 'falseMessage'" />
        <ErrorButton v-else />
        <p class="modal__section-text">{{ props.message }}</p>
      </div>

      <button
        v-if="props.buttonType === 'close'"
        @click="closeModal"
        class="modal__section-button"
      >
        <ExitButton />
      </button>

      <button v-if="props.buttonType === 'tocart'" class="modal__section-cart">
        <NuxtLink to="/shoppingCart"> VIEW CART</NuxtLink>
      </button>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import ExitButton from "SvgComponents/ExitButton.vue";
import SuccessIcon from "SvgComponents/SuccessIcon.vue";
import ErrorButton from "SvgComponents/errorButton.vue";

type buttonType = "tocart" | "close";

interface Props {
  isOpen: Boolean;
  status: string | null;
  message: string;
  buttonType: buttonType;
}

const props = defineProps<Props>();

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50px;
  left: 96px;
  width: calc(100% - 96px * 2);
  height: 68px;
  display: flex;
  z-index: 2;
  padding: 20px 20px 20px 75px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #efefef;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
  }

  &__section {
    display: flex;
    flex-direction: row;
    gap: 16px;

    &-button {
      background-color: transparent;
    }

    &-cart {
      font-size: 16px;
      color: var(--color-accent);
    }
  }
}

.modal-error::after {
  background-color: var(--color-error);
}

.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

@keyframes borderGrow {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@media (width < 376px) {
  .modal {
    position: fixed;
    bottom: 0px;
    top: auto;
    left: 0px;
    width: 100%;
    height: 68px;
    padding: 17px;
    font-size: 12px;

    &__section {
      display: flex;
      flex-direction: row;
      gap: 16px;

      &-text {
        max-width: 135px;
      }

      &-cart {
        font-size: 12px;
      }
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }

  .slide-enter-to,
  .slide-leave-from {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
