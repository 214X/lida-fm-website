import type { Locale } from "@/types/locale";

type HomeContent = {
    abbreviation: string;
    name: string;
    description: string;
    latestPubEyebrow: string;
    latestPubTitle: string;
    readMoreBtn: string;
    viewAllBtn: string;
};

export const homeContent: Record<Locale, HomeContent> = {
    tr: {
        abbreviation: "TDML",
        name: "Termodinamik Metroloji Laboratuvarı",
        description: "",
        latestPubEyebrow: "Güncel",
        latestPubTitle: "Son Yayınımız",
        readMoreBtn: "Makaleyi Oku",
        viewAllBtn: "Tüm Yayınlar",
    },
    en: {
        abbreviation: "TDML",
        name: "Thermodynamics Metrology Laboratory",
        description: "",
        latestPubEyebrow: "Latest",
        latestPubTitle: "Our Latest Publication",
        readMoreBtn: "Read Article",
        viewAllBtn: "All Publications",
    },
};