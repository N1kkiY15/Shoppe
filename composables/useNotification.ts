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

  const notificationDuration = ref<number>(5000);

  const modalClose = () => {
    isModalOpen.value = false;
    if (timeoutId.value) {
      clearTimeout(timeoutId.value);
      timeoutId.value = null;
    }
    clearStatus();
    clearMessage();
  };

  const modalOpen = (duration?: number) => {
    if (duration) {
      notificationDuration.value = duration;
    }
    isModalOpen.value = true;
    startTimeout();
  };

  const startTimeout = () => {
    if (timeoutId.value) {
      clearTimeout(timeoutId.value);
    }
    timeoutId.value = setTimeout(() => {
      modalClose();
    }, notificationDuration.value);
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
    notificationDuration,
  };
}
