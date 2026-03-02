import type { Locale } from "@/types/locale";

export const routes: Record<
    string,
    Record<Locale, string>
> = {
    home: {
        tr: "/",
        en: "/en",
    },
    publications: {
        tr: "/yayinlar",
        en: "/en/publications",
    },
    projects: {
        tr: "/projeler",
        en: "/en/projects",
    },
    contact: {
        tr: "/iletisim",
        en: "/en/contact",
    }
};