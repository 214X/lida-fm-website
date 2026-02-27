import type { Locale } from "@/types/locale";

type HomeContent = {
    title: string;
    description: string;
};

export const homeContent: Record<Locale, HomeContent> = {
    tr: {
        title: "Lida-FM (Türkçe)",
        description: "Proje açıklaması",
    },
    en: {
        title: "Lida-FM (English)",
        description: "Project description",
    },
};