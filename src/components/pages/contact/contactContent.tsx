import type { Locale } from "@/types/locale";

type ContactContent = {
    title: string;
};

export const ContactContent: Record<Locale, ContactContent> = {
    tr: {
        title: "İletişim",
    },
    en: {
        title: "Contact",
    },
};