import type { useForm } from "~/types/forms";

const getTime = () => new Date().getTime();

export const saveToLocalStorage = (data: useForm, keyPrefix: string) => {
  return new Promise<string>((resolve) => {
    const storageKey = `${keyPrefix}_${getTime()}`;
    const valueToStore = JSON.stringify(data);
    localStorage.setItem(storageKey, valueToStore);
    resolve(storageKey);
  });
};
