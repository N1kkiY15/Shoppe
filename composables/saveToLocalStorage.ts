type variant = "footer" | "contacts";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function useSaveToLocalStorage(
  type: variant,
  object?: ContactForm
) {
  const getTime = () => new Date().getTime();

  const saveFooterEmailToLocalStorage = (email: string) => {
    localStorage.setItem(`footerEmail_${getTime()}`, email);
    return (email = "");
  }; // peredelivaem + func SaveToLS -> key && value: generic(?) i udalenie tozhe peredelat )) =)))

  const saveContactsToLocalStorage = () => {
    if (typeof object === "string" || !object) {
      console.error("Invalid object for contacts");
      return;
    }

    const objectString = JSON.stringify(object);
    localStorage.setItem(`userContacts_${getTime()}`, objectString);
    object.firstName = "";
    object.lastName = "";
    object.email = "";
    object.subject = "";
    object.message = "";
  };

  switch (type) {
    case "footer":
      return {
        saveFooterEmailToLocalStorage,
        // 
        //
      };

    case "contacts":
      return {
        saveContactsToLocalStorage,
        //
        //
      };

    default:
      throw new Error(`Unknown type: ${type}`);
  }
}
