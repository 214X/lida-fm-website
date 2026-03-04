import type { Locale } from "@/types/locale";

type AboutContent = {
    title: string;
};

export const AboutContent: Record<Locale, AboutContent> = {
    tr: {
        title: "Hakkımızda",
    },
    en: {
        title: "About Us",
    },
};
