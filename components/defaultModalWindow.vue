<template>
  <transition name="slide">
    <div
      v-if="isOpen"
      class="modal"
      :class="{ 'modal-error': props.status === 'falseMessage' }"
    >
      <div class="modal__section">
        <div v-if="props.status !== 'falseMessage'">
          <SuccessIcon />
        </div>
        <div v-else>
          <ErrorButton />
        </div>
        <p>{{ messageTotal }}</p>
      </div>
      <button @click="closeModal" class="modal__section-button">
        <ExitButton />
      </button>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import ExitButton from "SvgComponents/ExitButton.vue";
import SuccessIcon from "SvgComponents/SuccessIcon.vue";
import ErrorButton from "SvgComponents/errorButton.vue";

// type result = "trueMessage" | "falseMessage" | "trueEmail";

interface statusMessage {
  messageSent: string;
  messageErrorSent: string;
  emailSent: string;
}

const messageTotal = ref<string>("");

const message: statusMessage = {
  messageSent: "Your message has been sent successfully.",
  messageErrorSent: "Form has error",
  emailSent:
    "Your email has been sent successfully! We will definitely contact you!",
};

interface Props {
  isOpen: Boolean;
  status: string;
}

const props = defineProps<Props>();

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
  messageTotal.value = "";
};

watch(
  () => props.status,
  (newValue: string) => {
    if (newValue === "trueMessage") {
      messageTotal.value = message.messageSent;
    } else if (newValue === "falseMessage") {
      messageTotal.value = message.messageErrorSent;
    } else if (newValue === "trueEmail") {
      messageTotal.value = message.emailSent;
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

    &-button {
      background-color: transparent;
    }
  }
}

.modal-error {
  border-top: 2px solid var(--color-error);

  &::after {
    background-color: var(--color-error);
  }
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
