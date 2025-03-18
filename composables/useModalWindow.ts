import { ref } from "vue";

const isModalOpen = ref<boolean>(false);
const status = ref<string>("");

export default function useModalWindow() {
  const clearStatus = () => {
    status.value = "";
  };

  const modalClose = () => {
    isModalOpen.value = false;
    clearStatus();
  };

  const modalOpen = () => {
    isModalOpen.value = true;
    setTimeout(() => {
      isModalOpen.value = false;
      clearStatus();
    }, 5000);
  };
  
  return {
    isModalOpen,
    status,
    clearStatus,
    modalClose,
    modalOpen,
  };
}
