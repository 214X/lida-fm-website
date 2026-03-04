import type { Locale } from "@/types/locale";

type HomeContent = {
    abbreviation: string;
    name: string;
    description: string;
};

export const homeContent: Record<Locale, HomeContent> = {
    tr: {
        abbreviation: "TDML",
        name: "Termodinamik Metroloji Laboratuvarı",
        description: "",
    },
    en: {
        abbreviation: "TDML",
        name: "Thermodynamics Metrology Laboratory",
        description: "",
    },
};