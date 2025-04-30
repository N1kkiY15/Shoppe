import useNotification from "./useNotification";
import type { useForm } from "~/types/forms";

export default function useFormSubmit() {
  const { isModalOpen, status, modalClose, modalOpen, message } =
    useNotification();

  const submitForm = async (
    successMessage: string,
    errorMessage: string,
    form: useForm,
    type: string,
    validateForm: () => boolean,
    resetForm: () => void,
    saveToLocalStorage: (data: useForm, key: string) => Promise<string>,
  ) => {
    if (!validateForm()) {
      status.value = "falseMessage";
      message.value = errorMessage;
      modalOpen();
      return;
    }

    try {
      await saveToLocalStorage(form, type);
      status.value = "trueMessage";
      message.value = successMessage;
      resetForm();
    } catch (error) {
      status.value = "falseMessage";
      message.value = "Error while saving data";
    }
    modalOpen();
  };

  return {
    submitForm,
    isModalOpen,
    status,
    modalClose,
    message,
  };
}
