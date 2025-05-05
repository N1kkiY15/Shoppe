import type { useForm } from "~/types/forms";

export default function useFormValidation(initialForm: Partial<useForm> = {}) {
  const form = reactive<Partial<useForm>>({ ...initialForm });
  const errors = reactive<Partial<useForm>>({});

  const validateField = (field: keyof useForm, value?: string) => {
    const fieldValue = value ?? form[field] ?? "";
    const stringValue =
      typeof fieldValue === "string" ? fieldValue : String(fieldValue);

    switch (field) {
      case "firstName":
        errors.firstName = !stringValue.trim() ? "First name is required." : "";
        break;
      case "lastName":
        errors.lastName = !stringValue.trim() ? "Last name is required." : "";
        break;
      case "email":
        if (!stringValue.trim()) {
          errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(stringValue)) {
          errors.email = "Email is invalid.";
        } else {
          errors.email = "";
        }
        break;
      case "subject":
        errors.subject = !stringValue.trim() ? "Subject is required." : "";
        break;
      case "message":
        errors.message = !stringValue.trim() ? "Message is required." : "";
        break;
      case "password":
        errors.password = !stringValue.trim() ? "Password is required." : "";
        break;
      case "country":
        errors.country = !stringValue.trim() ? "Country is required." : "";
        break;
      case "streetAddress":
        errors.streetAddress = !stringValue.trim() ? "streetAddress is required." : "";
        break;
      case "postcode":
        errors.postcode = !stringValue.trim() ? "postcode is required." : "";
        break;
      case "townAddress":
        errors.townAddress = !stringValue.trim() ? "townAddress is required." : "";
        break;
      case "phoneNumber":
        errors.phoneNumber = !stringValue.trim() ? "phoneNumber is required." : "";
        break;
      default:
        break;
    }
  };

  const handleBlur = (field: keyof typeof form) => {
    validateField(field, form[field] as string);
  };

  const validateForm = (): boolean => {
    (Object.keys(form) as Array<keyof useForm>).forEach((field) => {
      validateField(field, form[field] as string);
    });
    return !Object.values(errors).some((error) => error);
  };

  const resetForm = () => {
    Object.keys(form).forEach((field) => {
      const key = field as keyof useForm;
      if (typeof form[key] === "boolean") {
        form[key] = false as never;
      } else if (typeof form[key] === "number") {
        form[key] = 0 as never;
      } else {
        form[key] = undefined;
      }
      errors[key] = undefined;
    });
  };

  return {
    form,
    errors,
    validateField,
    handleBlur,
    validateForm,
    resetForm,
  };
}
