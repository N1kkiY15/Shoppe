export default function useNotification() {
  const isModalOpen = ref<boolean>(false);
  const status = ref<"trueMessage" | "falseMessage" | null>(null);
  const message = ref<string>("");
  const timeoutId = ref<ReturnType<typeof setTimeout> | null>(null);

  const clearStatus = () => {
    status.value = null;
  };

  const clearMessage = () => {
    message.value = "";
  };

  const startTimeout = () => {
    if (timeoutId.value) {
      clearTimeout(timeoutId.value);
    }
    timeoutId.value = setTimeout(() => {
      modalClose();
    }, 5000);
  };

  const modalClose = () => {
    isModalOpen.value = false;
    clearStatus();
    clearMessage();
    if (timeoutId.value) {
      clearTimeout(timeoutId.value);
      timeoutId.value = null;
    }
  };

  const modalOpen = () => {
    isModalOpen.value = true;
    startTimeout();
  };

  onUnmounted(() => {
    if (timeoutId.value) {
      clearTimeout(timeoutId.value);
    }
  });

  return {
    isModalOpen,
    status,
    message,
    modalClose,
    modalOpen,
    clearStatus,
    clearMessage,
  };
}
