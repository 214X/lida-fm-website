import { Locale } from "@/types/locale";

export type LabKey = "lazer" | "humidity" | "radiation" | "thermophysical";

export type PublicationType = "article" | "conference";

export type Publication = {
    id: string;
    day: number;
    month: number;
    year: number;
    title: string;
    contributors: string;
    type: PublicationType;
    description: string;
    href: string;
    language: "en" | "tr";
    labKey?: LabKey;
};

// Publications are sorted with the newest first (index 0 is the latest publication).
export const publicationsData: Publication[] = [
    {
        id: "pub-1",
        day: 24,
        month: 12,
        year: 2024,
        title: "Nodular-defect induced degradation of laser damage resistance of 532 nm high reflectivity coating after exposure to gamma rays",
        contributors: "H. Nasibli, et al.",
        type: "article",
        description:
            "The coupling effect of gamma-ray radiation and 532 nm nanosecond laser radiation on optical coatings and substrates was investigated. Fused silica and S-BSL7 glass with 532 nm high reflectivity coatings were irradiated using a 60Co gamma-ray source at different doses to evaluate degradation in laser damage resistance.",
        href: "https://opg.optica.org/oe/fulltext.cfm?uri=oe-32-27-49021&id=566348",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-2",
        day: 1,
        month: 3,
        year: 2024,
        title: "Nanosecond laser damage of 532 nm thin film polarizers evaluated by different testing protocols",
        contributors: "H. Nasibli, et al.",
        type: "article",
        description:
            "Different laser damage testing protocols, including 1-on-1, S-on-1, and Raster Scan, were applied to 532 nm thin-film polarizers. The study compares how protocol choice affects measured damage resistance and helps interpret the underlying failure mechanisms of the coatings.",
        href: "https://www.sciencedirect.com/science/article/pii/S0925346724003070",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-3",
        day: 1,
        month: 10,
        year: 2024,
        title: "An LED-Based Cost-Effective Multispectral Device for Soil Moisture Assessments",
        contributors: "Ahmet Harun Atağ, Ahmet Kızılay, Ömer Faruk Kadı, Hümbet Nasibov",
        type: "conference",
        description:
            "This conference paper presents a cost-effective LED-based multispectral device developed for soil moisture assessment. The work focuses on practical and portable measurement capabilities for agricultural and environmental monitoring applications.",
        href: "",
        language: "en",
        labKey: "thermophysical",
    },
    {
        id: "pub-4",
        day: 1,
        month: 10,
        year: 2024,
        title: "Taşınabilir ve Maliyet Etkin Multispektral Toprak Rutubeti Ölçüm Cihazı",
        contributors: "Atağ, A. H., Kadı, Ö. F., Yıldız, F., Nasibli, H.",
        type: "conference",
        description:
            "This paper introduces a portable and cost-effective multispectral device for soil moisture measurement. It highlights low-cost instrumentation and field-oriented usability for moisture estimation studies.",
        href: "",
        language: "tr",
        labKey: "thermophysical",
    },
    {
        id: "pub-5",
        day: 1,
        month: 10,
        year: 2024,
        title: "Spektroskopik Yöntemler ile Toprak Rutubetinin Ölçülmesi",
        contributors: "Kadı, Ö. F., Yıldız, F., Atağ, A. H., Nasibli, H.",
        type: "conference",
        description:
            "This conference contribution discusses soil moisture measurement using spectroscopic methods. The study emphasizes spectral analysis techniques and their use for more reliable moisture estimation.",
        href: "",
        language: "tr",
        labKey: "thermophysical",
    },
    {
        id: "pub-6",
        day: 1,
        month: 10,
        year: 2024,
        title: "Birincil Seviye Toprak Rutubet Miktarı Ölçüm Sistemi",
        contributors: "Yurtseven, S., Kadı, Ö. F., Akyıldız, Z., Nasibli, H.",
        type: "conference",
        description:
            "This study presents a primary-level measurement system for determining soil moisture content. It focuses on metrological infrastructure and reference-level measurement capability for soil humidity applications.",
        href: "",
        language: "tr",
        labKey: "thermophysical",
    },
    {
        id: "pub-7",
        day: 1,
        month: 10,
        year: 2024,
        title: "Bilateral Comparison on UV Region-LIDT Measurements Between UME & SIOM",
        contributors:
            "Pervin Tüzün, Fikret Yıldız, Ahmet Bekimhan Tontus, Semih Yurtseven, Xiaofeng Liu, Mengxia Wang, Yunqi Peng, Yuanan Zhao, Hümbet Nasibov",
        type: "conference",
        description:
            "This paper reports a bilateral comparison study on UV-region laser-induced damage threshold measurements between UME and SIOM. It supports consistency, comparability, and standardization of LIDT measurements across institutions.",
        href: "",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-8",
        day: 1,
        month: 10,
        year: 2024,
        title: "Ultra-Weak Optical Absorption Measurement of Space-Grade Antireflection Coatings",
        contributors:
            "Pervin Tüzün, Semih Yurtseven, Ramiz Hamid, Xiaofeng Liu, Yuanan Zhao, Hümbet Nasibov",
        type: "conference",
        description:
            "This conference paper focuses on the measurement of ultra-weak optical absorption in space-grade antireflection coatings. The work is important for evaluating coating quality in demanding optical and aerospace applications.",
        href: "",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-9",
        day: 1,
        month: 10,
        year: 2024,
        title: "Investigation of Laser Damage Threshold of Optical Coatings in Double-Pulse Regime",
        contributors:
            "Pervin Tüzün, Fikret Yıldız, Ömer Faruk Kadı, Ahmet Bekimhan Tontus, Xiaofeng Liu, Mengxia Wang, Yunqi Peng, Ramiz Hamid, Yuanan Zhao, Hümbet Nasibov",
        type: "conference",
        description:
            "This study investigates the laser damage threshold behavior of optical coatings under double-pulse laser exposure. It explores how pulse interactions affect coating durability and failure behavior.",
        href: "",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-10",
        day: 1,
        month: 10,
        year: 2024,
        title: "Vacuum-LIDT Test System from UV to SWIR at UME: Construction and Characterization",
        contributors:
            "Pervin Tüzün, Fikret Yıldız, Can Gözönünde, Semih Yurtseven, Xiaofeng Liu, Yuanan Zhao, Hümbet Nasibov, Ramiz Hamid",
        type: "conference",
        description:
            "This paper presents the construction and characterization of a vacuum LIDT test system operating from UV to SWIR wavelengths at UME. It contributes to broader wavelength-range testing infrastructure for advanced optical components.",
        href: "",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-11",
        day: 1,
        month: 10,
        year: 2024,
        title: "Investigation of Thermal Conditioning Effects on LIDT Values",
        contributors:
            "Pervin Tüzün, Can Gözönünde, Semih Yurtseven, Fikret Yıldız, Ramiz Hamid, Hümbet Nasibov",
        type: "conference",
        description:
            "This conference paper analyzes how thermal conditioning affects laser-induced damage threshold values. It studies whether thermal pre-treatment changes optical resistance and damage onset behavior.",
        href: "",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-12",
        day: 1,
        month: 10,
        year: 2024,
        title: "A New SSE-Measurement System at UME",
        contributors: "Mücahit Korkmaz, Mehtap Erturk, Fikret Yıldız, Semih Yurtseven, Hümbet Nasibov",
        type: "conference",
        description:
            "This paper introduces a new SSE measurement system developed at UME. It focuses on improved instrumentation and measurement capability for radiation thermometry applications.",
        href: "",
        language: "en",
        labKey: "radiation",
    },
    {
        id: "pub-13",
        day: 18,
        month: 9,
        year: 2024,
        title: "Primary Spectrometric Thermometry for Gases",
        contributors:
            "Gang Li, Hümbet Nasibli, Kianoosh Hadidi, Aleksandra Kyuberis, Carmen Garcia Izquierdo, Daniel Lisak, Piotr Masłowski, Katarzyna Bielska, Kirill Berezkin, Alexandra Lüttschwager, Tom Rubin, André Kussicke, Zhechao Qu, Judith Krakowski, Rainer Stosch, Reidun Anita Bergerud, Åge Andreas Falnes Olsen, Roman Ciuryło, Agata Cygan, Szymon Wójtewicz, Yurong Xu, Grzegorz Kowzan, Akiko Nishiyama, and the PriSpecTemp consortium",
        type: "conference",
        description:
            "This conference presentation covers primary spectrometric thermometry for gases and reflects consortium-level work on highly accurate gas temperature realization using spectroscopic methods.",
        href: "",
        language: "en",
        labKey: "radiation",
    },
    {
        id: "pub-14",
        day: 24,
        month: 12,
        year: 2023,
        title: "Nodular defects induced laser damage of 532 nm thin-film polarizers",
        contributors:
            "Liu, X., Feng, C., Zhang, W., Nasibli, H., Zhao, Y. A., Liu, X., ... & Shao, J.",
        type: "article",
        description:
            "The laser damage characteristics of 532 nm thin-film polarizers were investigated with a focus on nodular defects and their role in failure formation. The study examines how localized imperfections reduce damage resistance under high-power laser exposure.",
        href: "",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-15",
        day: 1,
        month: 10,
        year: 2023,
        title: "A Multiwavelength Vacuum Environment Laser Calorimetry System",
        contributors: "H. Nasibli, et al.",
        type: "conference",
        description:
            "This work presents a multiwavelength laser calorimetry system designed for vacuum environments. It focuses on characterizing optical thin films and glasses with improved sensitivity under controlled conditions.",
        href: "",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-16",
        day: 1,
        month: 10,
        year: 2023,
        title: "Lazer Kalorimetri ile Üç Farklı Dalgaboyunda Yüksek Hassasiyette Optik Emilim Katsayısı Ölçümü",
        contributors: "Project team / UME researchers",
        type: "conference",
        description:
            "This conference paper discusses high-sensitivity optical absorption coefficient measurements at three different wavelengths using laser calorimetry. The work contributes to precision characterization of optical materials.",
        href: "",
        language: "tr",
        labKey: "lazer",
    },
    {
        id: "pub-17",
        day: 1,
        month: 10,
        year: 2023,
        title: "Dielektrik Kaplamalı Optik Bileşenlerin Lazer-Uyarılmış Hasar Eşik Değerinin Belirlenmesi",
        contributors: "Project team / UME researchers",
        type: "conference",
        description:
            "This study focuses on determining the laser-induced damage threshold of dielectric-coated optical components. It supports the evaluation of coating durability for high-power optical applications.",
        href: "",
        language: "tr",
        labKey: "lazer",
    },
    {
        id: "pub-18",
        day: 1,
        month: 10,
        year: 2023,
        title: "A Fourier Transform Infrared (FT-IR) Spectroscopy-Based Method for the Precise Determination of Nitrogen Dioxide (NO2) and Nitrogen Monoxide (NO)",
        contributors: "Zeybek, S., Gözönünde, C., Tarhan, T., Karabulut, M., Nasibli, H.",
        type: "conference",
        description:
            "This paper presents an FT-IR spectroscopy-based method for the precise determination of NO2 and NO. It demonstrates the use of spectroscopic techniques for trace-level gas analysis and metrological accuracy.",
        href: "",
        language: "en",
        labKey: "humidity",
    },
    {
        id: "pub-19",
        day: 1,
        month: 8,
        year: 2023,
        title: "A Laser Damage Threshold for Microscope Glass Slides",
        contributors: "Tüzün, P., Kadı, Ö. F., Yıldız, F., Hamid, R., & Nasibov, H.",
        type: "article",
        description:
            "Laser-induced damage threshold values of high-quality microscope glass slides were investigated to evaluate their suitability in sensitive optical and biosensor applications. The study provides experimental threshold measurements and discusses the implications for optical reliability.",
        href: "https://www.mdpi.com/2304-6732/10/9/967",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-20",
        day: 1,
        month: 5,
        year: 2023,
        title: "Realization of Fe-C Eutectic Point at UME",
        contributors: "Can, M., Korkmaz, M., Arifovic, N., Nasibov, H.",
        type: "conference",
        description:
            "This conference paper presents the realization of the Fe-C eutectic fixed point at UME. It contributes to high-temperature metrology and supports the practical realization of traceable thermal reference points.",
        href: "",
        language: "en",
        labKey: "radiation",
    },
    {
        id: "pub-21",
        day: 1,
        month: 5,
        year: 2023,
        title: "Realizing Fe-C, Pd-C, Ru-C and WC-C Eutectic Fixed-Points at UME",
        contributors: "Can, M., Kadı, Ö. F., Korkmaz, M., Gözönünde, C., Nasibov, H.",
        type: "conference",
        description:
            "This paper discusses the realization of multiple eutectic fixed-points at UME. It supports metrological traceability and improved realization of the kelvin through robust high-temperature reference points.",
        href: "",
        language: "en",
        labKey: "radiation",
    },
    {
        id: "pub-22",
        day: 1,
        month: 1,
        year: 2023,
        title: "Large-area Fe-C eutectic fixed-points for radiation and contact thermometry",
        contributors: "Can, M., Gözönünde, C., Arifovic, N., Yıldız, F., & Nasibov, H.",
        type: "article",
        description:
            "This article presents large-area Fe-C eutectic fixed-points developed for both radiation and contact thermometry applications. It contributes to high-temperature metrology by improving fixed-point realization and supporting more reliable calibration practices.",
        href: "",
        language: "en",
        labKey: "radiation",
    },
    {
        id: "pub-23",
        day: 1,
        month: 1,
        year: 2023,
        title: "Realizing Fe-C, Pd-C, Ru-C, and WC-C eutectic fixed-points at UME",
        contributors: "Can, M., Kadı, Ö. F., Korkmaz, M., Gözönünde, C., & Nasibli, H.",
        type: "article",
        description:
            "The study reports the realization of multiple eutectic fixed-points at UME, including Fe-C, Pd-C, Ru-C, and WC-C. These fixed-points are important for the practical realization of the kelvin and for improving traceability in high-temperature measurements.",
        href: "",
        language: "en",
        labKey: "radiation",
    },
    {
        id: "pub-24",
        day: 1,
        month: 10,
        year: 2022,
        title: "Detection of Face Mask and Eye-Glasses in Thermograms Using Deep Learning Methods",
        contributors: "Ayşen Özün Türkçetin, Hümbet Nasibli",
        type: "conference",
        description:
            "This paper investigates the detection of face masks and eyeglasses in thermal images using deep learning methods. The work supports more reliable interpretation of thermal measurements in human-centered screening applications.",
        href: "",
        language: "en",
        labKey: "radiation",
    },
    {
        id: "pub-25",
        day: 1,
        month: 1,
        year: 2022,
        title: "A triple point of water cell-based fixed-point blackbody for radiation thermometry",
        contributors: "Yurtseven, S., Uytun, A., & Nasibov, H.",
        type: "article",
        description:
            "This paper introduces a fixed-point blackbody system based on a triple point of water cell for radiation thermometry. The work supports stable and traceable thermal radiation measurements through improved reference source design.",
        href: "",
        language: "en",
        labKey: "radiation",
    },
    {
        id: "pub-26",
        day: 1,
        month: 6,
        year: 2021,
        title: "Fever Detection from Human Thermal Images with Deep Learning Methods",
        contributors: "Turkcetin, A. O., Sahan, M. O., Nasibov, H.",
        type: "conference",
        description:
            "This conference paper explores fever detection from human thermal images using deep learning methods. It focuses on automated fever screening and thermal image interpretation in health-related applications.",
        href: "",
        language: "en",
        labKey: "radiation",
    },
    {
        id: "pub-27",
        day: 1,
        month: 6,
        year: 2021,
        title: "Temassız İnsan Vücudu Sıcaklık Ölçümlerinde Termal Kamera Görüntülerinin Derin Öğrenme Metotları ile İncelenmesi",
        contributors: "Turkcetin, A. O., Sahan, M. O., Nasibov, H.",
        type: "conference",
        description:
            "This paper studies thermal camera images used in contactless human body temperature measurement with deep learning methods. It aims to improve image interpretation and screening reliability.",
        href: "",
        language: "tr",
        labKey: "radiation",
    },
    {
        id: "pub-28",
        day: 1,
        month: 6,
        year: 2021,
        title: "Reference Sources For Calibration Of Forehead Thermometers",
        contributors: "Can, M., Kişioğlu, Y., Nasibov, H.",
        type: "conference",
        description:
            "This conference paper discusses reference sources developed for the calibration of forehead thermometers. It supports traceable and reliable temperature screening devices used in public health settings.",
        href: "",
        language: "en",
        labKey: "radiation",
    },
    {
        id: "pub-29",
        day: 1,
        month: 6,
        year: 2021,
        title: "Kızılötesi Bantta Çalışan Alın Termometreleri için Termal Işınım Kaynakları",
        contributors: "Can, M., Kişioğlu, Y., Nasibov, H.",
        type: "conference",
        description:
            "This paper presents thermal radiation sources developed for infrared forehead thermometers. It contributes to the calibration and performance evaluation of non-contact temperature measurement devices.",
        href: "",
        language: "tr",
        labKey: "radiation",
    },
    {
        id: "pub-30",
        day: 1,
        month: 6,
        year: 2021,
        title: "Detection of Micron-Scale Particles on Optical Surfaces by Photothermal Method",
        contributors: "Tuzun, P., Yildiz, F., Nasibli, H., Yurtseven, S.",
        type: "conference",
        description:
            "This conference paper presents a photothermal method for detecting micron-scale particles on optical surfaces. The work contributes to precision optical inspection and contamination analysis.",
        href: "",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-31",
        day: 1,
        month: 1,
        year: 2021,
        title: "A Multiwavelength Vacuum Environment Laser Calorimetry System",
        contributors: "H. Nasibli, et al.",
        type: "article",
        description:
            "A laser calorimetry system optimized for vacuum conditions is presented for characterizing optical glasses and thin films at multiple wavelengths. The work focuses on system design, thermal performance, and measurement capability in controlled environments.",
        href: "https://www.researchgate.net/publication/374750527_A_Multiwavelength_Vacuum_Environment_Laser_Calorimetry_System",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-32",
        day: 1,
        month: 1,
        year: 2022,
        title: "Advanced characterization methods for high-quality glasses: a review of two new systems developed at TÜBİTAK UME",
        contributors: "Project team / UME researchers",
        type: "conference",
        description:
            "This presentation reviews two newly developed systems at TÜBİTAK UME for advanced characterization of high-quality glasses. It highlights measurement infrastructure and performance evaluation approaches.",
        href: "",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-33",
        day: 1,
        month: 1,
        year: 2022,
        title: "A Multi-wavelength Laser Calorimeter for Optical Thin Film Characterization",
        contributors: "Project team / UME researchers",
        type: "conference",
        description:
            "This conference paper presents a multi-wavelength laser calorimeter designed for optical thin film characterization. It supports sensitive measurement of thermal and absorption-related properties of optical coatings.",
        href: "",
        language: "en",
        labKey: "lazer",
    },
    {
        id: "pub-34",
        day: 1,
        month: 1,
        year: 2022,
        title: "Lazer Kalorimetri ile Yüksek Kaliteli Optik Camların Soğrulma Katsayısının Ölçümü",
        contributors: "Project team / UME researchers",
        type: "conference",
        description:
            "This work focuses on measuring the absorption coefficient of high-quality optical glasses using laser calorimetry. It contributes to accurate optical material characterization for advanced applications.",
        href: "",
        language: "tr",
        labKey: "lazer",
    },
    {
        id: "pub-35",
        day: 1,
        month: 1,
        year: 2022,
        title: "Optik Bileşenlerin Lazer-Uyarılmış Hasar Eşik Değerlerinin Gerçek Zamanlı Olarak Belirlenmesi",
        contributors: "Project team / UME researchers",
        type: "conference",
        description:
            "This conference paper discusses real-time determination of laser-induced damage threshold values of optical components. The work supports more effective monitoring and evaluation during LIDT testing.",
        href: "",
        language: "tr",
        labKey: "lazer",
    },
];

export function getMonthName(month: number, locale: "tr" | "en") {
    const date = new Date(2024, month - 1, 1);
    return date.toLocaleString(locale === "tr" ? "tr-TR" : "en-US", {
        month: "long",
    }).toUpperCase();
}