interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function useFormValidation() {
  const form = reactive<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const footerEmail = ref<string>("");

  const errors = reactive<Errors>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateField = (field: keyof ContactForm | string, value: string) => {
    switch (field) {
      case "firstName":
        if (!value.trim()) {
          errors.firstName = "First name is required.";
        } else {
          errors.firstName = "";
        }
        break;

      case "lastName":
        if (!value.trim()) {
          errors.lastName = "Last name is required.";
        } else {
          errors.lastName = "";
        }
        break;

      case "email":
        if (!value.trim()) {
          errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errors.email = "Email is invalid.";
        } else {
          errors.email = "";
        }
        break;

      case "subject":
        if (!value.trim()) {
          errors.subject = "Subject is required.";
        } else {
          errors.subject = "";
        }
        break;

      case "message":
        if (!value.trim()) {
          errors.message = "Message is required.";
        } else {
          errors.message = "";
        }
        break;

      default:
        break;
    }
  };

  const validateFooterEmail = () => {
    if (!footerEmail.value.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(footerEmail.value)) {
      errors.email = "Email is invalid.";
    } else {
      errors.email = "";
    }
  };

  const validateForm = (): boolean => {
    (Object.keys(form) as Array<keyof ContactForm>).forEach((field) => {
      validateField(field, form[field]);
    });
    return !Object.values(errors).some((error) => error);
  };

  const resetForm = () => {
    Object.keys(form).forEach((field) => {
      form[field as keyof ContactForm] = "";
      errors[field as keyof ContactForm] = "";
    });
    footerEmail.value = "";
  };

  return {
    form,
    footerEmail,
    errors,
    validateField,
    validateFooterEmail,
    validateForm,
    resetForm,
  };
}
