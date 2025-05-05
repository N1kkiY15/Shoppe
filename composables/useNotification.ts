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

  interface notificationDetails {
    message: string;
    duration: number;
  }

  const modalOpen = (details?: notificationDetails) => {
    if (details) {
      notificationDuration.value = details.duration;
      message.value = details.message;
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
