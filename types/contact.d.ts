export interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    subject: ContactSubject;
    message: string;
}

export type ContactSubject =  '' | 'first' | 'second' | 'third' | string;

export interface Errors {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}