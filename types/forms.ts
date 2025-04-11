export type variant = "footer" | "contacts" | "LogIn" | "createAccount" | "rewiew" | "resetPassword";

export interface useForm {
    firstName?: string;
    lastName?: string;
    email?: string;
    subject?: string;
    message?: string;
    password?: string;
    saveData?: boolean;
    rating?: number;
}