import type { useForm } from "~/types/forms";

export default function useSaveToLocalStorage() {
  const getTime = () => new Date().getTime();

  const saveToLocalStorage = (data: useForm, keyPrefix: string) => {
    return new Promise<string>((resolve) => {
      const storageKey = `${keyPrefix}_${getTime()}`;
      const valueToStore = JSON.stringify(data);
      localStorage.setItem(storageKey, valueToStore);
      resolve(storageKey);
    });
  };

  return {
    saveToLocalStorage
  };
}