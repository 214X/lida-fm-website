import type { Locale } from "@/types/locale";

export const routes: Record<
    string,
    Record<Locale, string>
> = {
    home: {
        tr: "/",
        en: "/en",
    },
    aboutUs: {
        tr: "/hakkimizda",
        en: "/en/about-us",
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
    },
    // LABS STARTS
    humidityLab: {
        tr: "/laboratuvarlar/nem",
        en: "/en/laboratories/humidity",
    }
    // LABS ENDS
};