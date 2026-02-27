import type { Locale } from "@/types/locale";

type PublicationsContent = {
    title: string;
};

export const publicationsContent: Record<Locale, PublicationsContent> = {
    tr: {
        title: "Yayınlar",
    },
    en: {
        title: "Publications",
    },
};