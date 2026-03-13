import type { Locale } from "@/types/locale";

type AboutSection = {
    title: string;
    content: string[];
};

type AboutContent = {
    title: string;
    subtitle: string;
    badge: string;
    heroText: string;
    mainSections: AboutSection[];
};

export const AboutContent: Record<Locale, AboutContent> = {
    tr: {
        title: "Hakkımızda",
        subtitle: "Termodinamik ve Dinamik Metroloji Laboratuvarları",
        badge: "TDML",
        heroText: "TÜBİTAK UME bünyesinde ulusal ölçüm standartlarını oluşturan, muhafaza eden ve geliştiren referans laboratuvarlar. Sıcaklık, Nem, Basınç, Kütle, Hacim, Yoğunluk ve Kuvvet metrolojisi alanlarında kesintisiz hizmet veriyoruz.",
        mainSections: [
            {
                title: "Vizyonumuz",
                content: [
                    "Termal ve Dinamik Metroloji alanlarında Türkiye'nin ölçüm altyapısını dünya standartlarında tutmak, endüstrinin ihtiyaç duyduğu kalibrasyon ve test hizmetlerini en yüksek doğrulukla sağlamak temel vizyonumuzdur.",
                    "Sıcaklık ve Nem Laboratuvarları, uluslararası denklik (CIPM MRA) kapsamında ülkemizi başarıyla temsil etmekte ve referans standartları sürekli geliştirmektedir."
                ]
            },
            {
                title: "Misyonumuz ve Faaliyet Ortamımız",
                content: [
                    "Laboratuvarlarımız, uluslararası metroloji enstitüleri ile ortak araştırma projeleri yürütmekte ve ölçüm tekniklerinin geliştirilmesine katkı sağlamaktadır.",
                    "Endüstriyel kuruluşlara, kalibrasyon laboratuvarlarına ve araştırma merkezlerine izlenebilir, güvenilir ve hassas kalibrasyon hizmetleri sunuyoruz. Ayrıca ölçüm belirsizliği eğitimleri ve danışmanlık hizmetleri ile ülkemizin teknik altyapısını güçlendiriyoruz."
                ]
            }
        ],
    },
    en: {
        title: "About Us",
        subtitle: "Thermodynamic and Dynamic Metrology Laboratories",
        badge: "TDML",
        heroText: "Reference laboratories establishing, maintaining, and developing national measurement standards within TÜBİTAK UME. Providing uninterrupted services in Temperature, Humidity, Pressure, Mass, Volume, Density, and Force metrology.",
        mainSections: [
            {
                title: "Our Vision",
                content: [
                    "Our core vision is to maintain Turkey's measurement infrastructure in the fields of Thermal and Dynamic Metrology at world standards, and to provide the calibration and test services required by the industry with the highest accuracy.",
                    "Temperature and Humidity Laboratories successfully represent our country within the scope of international equivalence (CIPM MRA) and continuously develop reference standards."
                ]
            },
            {
                title: "Our Mission and Operating Environment",
                content: [
                    "Our laboratories conduct joint research projects with international metrology institutes and contribute to the development of measurement techniques.",
                    "We provide traceable, reliable, and precise calibration services to industrial organizations, calibration laboratories, and research centers. We also strengthen our country's technical infrastructure with measurement uncertainty training and consultancy services."
                ]
            }
        ],
    },
};
