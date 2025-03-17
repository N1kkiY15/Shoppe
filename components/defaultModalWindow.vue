<template>
  <transition name="slide">
    <div v-if="isOpen" class="modal">
      <div class="modal__section">
        <SuccesIcon />
        <p>{{ message }}</p>
      </div>
      <button @click="closeModal">
        <ExitButton />
      </button>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import ExitButton from "~/assets/pictures/svg/SvgComponents/ExitButton.vue";
import SuccesIcon from "~/assets/pictures/svg/SvgComponents/SuccesIcon.vue";

const props = defineProps({
  isOpen: Boolean,
  title: String,
  message: String,
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};

watch(
  () => props.isOpen,
  (newValue: boolean) => {
    if (newValue) {
      setTimeout(() => {
        closeModal();
      }, 5000);
    }
  }
);
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50px;
  left: 96px;
  width: calc(100% - 96px * 2);
  height: 68px;
  border-top: 2px solid var(--color-accent);
  display: flex;
  z-index: 2;
  padding: 20px 20px 20px 75px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-modal);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    animation: borderGrow 5s linear forwards;
  }
  &__section {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
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
</style>
