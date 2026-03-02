import type { Locale } from "@/types/locale";

type HomeContent = {
    title: string;
    description: string;
};

export const homeContent: Record<Locale, HomeContent> = {
    tr: {
        title: "TDML",
        description: "Biz kimiz?",
    },
    en: {
        title: "TDML",
        description: "Who are us?",
    },
};