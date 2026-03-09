import { Locale } from "@/types/locale";

export type Publication = {
    id: string;
    day: number;
    month: number;
    year: number;
    title: string;
    description: string;
    href: string;
    journal?: string;
};

// Publications are sorted with the newest first (index 0 is the latest publication).
export const publicationsData: Publication[] = [
    {
        id: "pub-1",
        day: 24,
        month: 12,
        year: 2024,
        title: "Nodular-defect induced degradation of laser damage resistance of 532 nm high reflectivity coating after exposure to gamma rays",
        description: "The coupling effect of gamma-ray radiation and 532 nm nanosecond laser radiation on optical coatings and substrates was investigated. Fused silica and S-BSL7 glass with 532 nm high reflectivity (HR) coatings were irradiated using 60Co gamma-ray source at a dose rate of 1 Gy/s for a total dose of 1–500 kGy...",
        href: "https://opg.optica.org/oe/fulltext.cfm?uri=oe-32-27-49021&id=566348",
        journal: "Optics Express",
    },
    {
        id: "pub-2",
        day: 1,
        month: 3,
        year: 2024,
        title: "Nanosecond laser damage of 532 nm thin film polarizers evaluated by different testing protocols",
        description: "Different laser damage testing protocols, including 1-on-1, S-on-1, and Raster Scan, were conducted on 532 nm polarizers to evaluate the damage resistance and mechanisms...",
        href: "https://www.sciencedirect.com/science/article/pii/S0925346724003070",
        journal: "Optics & Laser Technology",
    },
    {
        id: "pub-3",
        day: 25,
        month: 12,
        year: 2023,
        title: "Nodular defects induced laser damage of 532 nm thin-film polarizers",
        description: "The laser damage characteristics of the thin-film polarizers for the wavelength of 532 nm and AOI of 56° were investigated using a Nd:YAG laser system...",
        href: "https://www.sciencedirect.com/science/article/pii/S0925346724003070",
        journal: "Optics & Laser Technology",
    },
    {
        id: "pub-4",
        day: 24,
        month: 8,
        year: 2023,
        title: "A Laser Damage Threshold for Microscope Glass Slides",
        description: "Laser-induced damage to optical components is a limitation for designing highly sensitive biosensors. This study investigated the laser-induced damage threshold (LIDT) of high-quality microscope glass slides...",
        href: "https://www.mdpi.com/2304-6732/10/9/967",
        journal: "Photonics (MDPI)",
    },
    {
        id: "pub-5",
        day: 19,
        month: 5,
        year: 2023,
        title: "A Multiwavelength Vacuum Environment Laser Calorimetry System",
        description: "In the current work, we describe a process of optimizing a laser calorimeter system to characterize the thermal performance of optical glasses and thin films in a vacuum environment...",
        href: "https://www.researchgate.net/publication/374750527_A_Multiwavelength_Vacuum_Environment_Laser_Calorimetry_System",
        journal: "ResearchGate",
    },
];

export function getMonthName(month: number, locale: "tr" | "en") {
    const date = new Date(2024, month - 1, 1);
    return date.toLocaleString(locale === "tr" ? "tr-TR" : "en-US", {
        month: "long",
    }).toUpperCase();
}
