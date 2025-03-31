const isModalOpen = ref<boolean>(false);
const status = ref<string>("");
let message = ref<string>("");

export default function useModalWindow() {
  const modalClose = () => {
    isModalOpen.value = false;
    clearStatus();
    clearMessage();
  };

  const modalOpen = () => {
    isModalOpen.value = true;
    starTimeout();
  };

  const timeoutId = ref<number | null>(null);

  const starTimeout = () => {
    if (timeoutId.value) {
      clearInterval(timeoutId.value);
    }
    timeoutId.value = setTimeout(() => {
      modalClose();
    }, 5000);
  };

  const clearStatus = () => {
    status.value = "";
  };

  const clearMessage = () => {
    message.value = "";
  };

  return {
    isModalOpen,
    status,
    clearStatus,
    modalClose,
    modalOpen,
    message,
  };
}
