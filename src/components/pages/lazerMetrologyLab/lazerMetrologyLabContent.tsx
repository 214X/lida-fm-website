import { Locale } from "@/types/locale";
import {
    Focus,
    RadioTower,
    Activity,
    Crosshair,
    Microscope,
    ClipboardCheck,
    BarChart3,
    GraduationCap,
    FileText,
    Globe,
    Zap,
    Aperture
} from "lucide-react";

export const LazerMetrologyLabContent: Record<
    Locale,
    {
        title: string;
        heroText: string;

        purposeTitle: string;
        purposeText: string[];

        aboutTitle: string;
        aboutText: string;

        statsTitle: string;
        stats: { value: string; label: string }[];

        areasTitle: string;
        areas: { icon: React.ReactNode; title: string; text: string }[];

        instrumentsTitle: string;
        instrumentsIntro: string;
        instruments: { title: string; text: string }[];

        uncertaintyTitle: string;
        uncertaintyText: string;
        uncertaintyItems: { range: string; value: string; level: string }[];

        calibrationsTitle: string;
        calibrations: { title: string; text: string }[];

        servicesTitle: string;
        services: { icon: React.ReactNode; title: string; text: string }[];

        sectorsTitle: string;
        sectors: string[];

        equipmentTableTitle: string;
        equipmentTable: {
            no: string;
            equipment: string;
            brand: string;
            model: string;
            range: string;
            purpose: string;
        }[];
    }
> = {
    tr: {
        title: "Lazer Metroloji Laboratuvarı",
        heroText:
            "Lazer Metroloji Laboratuvarı, optik bileşenlerin soğurma, saçılma ve lazer hasar eşiği gibi parametrelerini yüksek hassasiyet ve tekrarlanabilirlikle karakterize etmektedir. Uluslararası standartlara (ISO 11551, ISO 21254) izlenebilir ölçüm altyapısı sunar.",

        purposeTitle: "Laboratuvarın Amacı",
        purposeText: [
            "Optik sistemlerde, ışık kaynağını hedeflenen noktaya iletmek ve yönlendirmek amacıyla; başta yüksek yansıtıcılı aynalar, yüksek geçirgenliğe sahip optik pencereler ve polarizörler olmak üzere çeşitli optik bileşenler kullanılmaktadır. Bu bileşenler, ait oldukları sistemlerin performansını doğrudan etkilediğinden, optik özelliklerinin detaylı şekilde karakterize edilmesi büyük önem taşımaktadır.",
            "Lazer Metroloji Laboratuvarı'nın amacı; optik bileşenlerin optik soğurma (2B, 3B haritalama), saçılma ve lazer hasar eşiği gibi parametrelerini yüksek hassasiyet ve tekrarlanabilirlikle ölçmektir.",
            "Optik soğurma ve saçılma ölçümleri, 1070 nm dalga boyunda interferometri ve kalorimetri (ISO 11551) tabanlı iki farklı sistem kullanılarak gerçekleştirilmektedir. Lazer hasar eşiği testleri ise S-on-1, 1-on-1 (ISO 21254) ve raster tarama olmak üzere üç farklı yöntemle; 1064, 532, 355 ve 266 nm dalga boylarında, hem atmosferik hem de vakum ortamlarında gerçekleştirilebilmektedir.",
        ],

        aboutTitle: "Lazer Metrolojisi",
        aboutText:
            "Optik penceler, polarizörler ve yüksek yansıtıcılı aynalar gibi optik bileşenlerin karakterizasyonu modern endüstriyel, medikal ve savunma uygulamaları için kritik öneme sahiptir. Lazer metrolojisi, bu optik özelliklerin uluslararası standartlara uygun olarak belirlenmesini sağlar ve yüksek güçlü lazer sistemlerinin güvenilirliğini garanti altına alır.",

        statsTitle: "Ölçüm Kapasiteleri",
        stats: [
            { value: "IR – VIS – UV", label: "Ölçüm yapılabilen dalgaboyları" },
            { value: "<1 ppm – 1000 ppm", label: "Soğurma Ölçüm Aralığı" },
            { value: "ISO 21254", label: "Lazer Hasar Eşik Test Standardı" },
        ],

        areasTitle: "Çalışma Alanları",
        areas: [
            {
                icon: <Aperture size={32} strokeWidth={1.5} />,
                title: "Optik Soğurma ve Saçılma",
                text: "1070 nm dalga boyunda interferometri ve kalorimetri yöntemleriyle 2B ve 3B haritalama.",
            },
            {
                icon: <Zap size={32} strokeWidth={1.5} />,
                title: "Lazer Hasar Eşiği (LIDT)",
                text: "S-on-1 ve 1-on-1 yöntemleriyle 1064, 532, 355 ve 266 nm dalgaboylarında hasar eşiği testleri.",
            },
            {
                icon: <Crosshair size={32} strokeWidth={1.5} />,
                title: "Vakum ve Atmosferik Testler",
                text: "Hem atmosferik hem de vakum ortamlarında optik dayanım ve performans testleri.",
            },
            {
                icon: <Focus size={32} strokeWidth={1.5} />,
                title: "Polarizör ve Ayna Karakterizasyonu",
                text: "Yüksek yansıtıcılı aynalar ve geçirgen pencerelerin optik parametrelerinin ölçümü.",
            },
            {
                icon: <RadioTower size={32} strokeWidth={1.5} />,
                title: "Raster Tarama Analizi",
                text: "Optik yüzeylerin raster tarama yöntemiyle detaylı karakterizasyonu ve analizleri.",
            },
            {
                icon: <Microscope size={32} strokeWidth={1.5} />,
                title: "ISO Standartlarında Referans",
                text: "İlgili ISO (ISO 11551, ISO 21254) standartlarına uygun metrolojik değerlendirmeler.",
            },
        ],

        instrumentsTitle: "Kullanılan Cihazlar ve Yöntemler",
        instrumentsIntro:
            "Laboratuvarda optik bileşenlerin detaylı karakterizasyonu için uluslararası standartlara uygun, yüksek hassasiyetli ölçüm sistemleri kullanılmaktadır.",
        instruments: [
            {
                title: "İnterferometrik Haritalama Sistemi",
                text: "Optik bileşenlerin yüzey ve soğurma profillerini çıkarmada kullanılan 2B ve 3B haritalama cihazları.",
            },
            {
                title: "Kalorimetri Sistemi (1070 nm)",
                text: "ISO 11551 tabanlı olarak, malzemelerin enerji soğurma kapasitelerini hassas şekilde ölçen donanımlar.",
            },
            {
                title: "Yüksek Güçlü Lazer Kaynakları",
                text: "Hasar eşiği testleri için kullanılan sırasıyla 1064, 532, 355 ve 266 nm dalgaboyu lazer sistemleri.",
            },
            {
                title: "Vakum Odaları",
                text: "Optik testlerin uzay ve benzeri ortam şartlarını simüle edecek şekilde vakum altında yapılmasını sağlayan altyapı.",
            },
        ],

        uncertaintyTitle: "Ölçüm Belirsizlikleri",
        uncertaintyText:
            "Gerçekleştirilen soğurma, saçılma ve hasar eşiği testlerinin ölçüm belirsizlikleri (k=2) referans standartlara göre minimize edilmiştir.",
        uncertaintyItems: [
            {
                range: "Dalga Boyu Doğruluğu",
                value: "± 0.5 nm",
                level: "k=2 (yaklaşık %95 güven aralığı)",
            },
            {
                range: "Soğurma Ölçümü (<10 ppm)",
                value: "± 0.2 ppm",
                level: "k=2 (yaklaşık %95 güven aralığı)",
            },
            {
                range: "Lazer Hasar Eşiği",
                value: "Relatif ± %5",
                level: "k=2 (yaklaşık %95 güven aralığı)",
            },
        ],

        calibrationsTitle: "Test ve Analiz Hizmetleri",
        calibrations: [
            {
                title: "ISO 11551 Soğurma Testleri",
                text: "Lazer optik bileşenlerinin kalorimetri tabanlı soğurma analizleri.",
            },
            {
                title: "ISO 21254 Hasar Eşiği (LIDT)",
                text: "S-on-1 ve 1-on-1 prosedürlerine uygun yapısal dayanım testleri.",
            },
            {
                title: "Optik Saçılma Karakterizasyonu",
                text: "Optik yüzeylerdeki kusurların ve saçılma oranlarının belirlenmesi.",
            },
        ],

        servicesTitle: "Sunulan Hizmetler",
        services: [
            {
                icon: <ClipboardCheck size={32} strokeWidth={1.5} />,
                title: "Test ve Analiz",
                text: "Optik bileşenlerin ISO standartlarına tam uyumlu testleri.",
            },
            {
                icon: <BarChart3 size={32} strokeWidth={1.5} />,
                title: "Kalite Kontrol",
                text: "Üretilen optik aynaların ve lazer pencerelerinin kalite doğrulama raporlaması.",
            },
            {
                icon: <FileText size={32} strokeWidth={1.5} />,
                title: "Teknik Raporlama",
                text: "Hasar eşiği ve soğurma limitleri üzerine detaylı grafiksel sonuçların sunulması.",
            },
            {
                icon: <Activity size={32} strokeWidth={1.5} />,
                title: "Vakum Testleri",
                text: "Farklı basınç şartlarında lazer dayanımı validasyonu.",
            },
        ],

        sectorsTitle: "Hizmet Verdiği Sektörler",
        sectors: [
            "Savunma ve Havacılık",
            "Uzay Teknolojileri",
            "Medikal Lazer Cihazları",
            "Optoelektronik Üretimi",
            "Lidar ve Sensör Geliştirme",
            "Araştırma Enstitüleri",
            "Endüstriyel Lazer Sislemleri",
        ],
        equipmentTableTitle: "Teknik Donanımlar ve Ekipmanlar",
        equipmentTable: [
            {
                no: "1",
                equipment: "Lazer Hasar Eşiği Test İstasyonu",
                brand: "Özel Kurulum",
                model: "LIDT-System-1",
                range: "1064, 532, 355, 266 nm",
                purpose: "S-on-1, 1-on-1 ISO 21254 Testi",
            },
            {
                no: "2",
                equipment: "Kalorimetri Sistemi",
                brand: "Özel Tasarım",
                model: "Calorimeter-1070",
                range: "<1 ppm - 1000 ppm",
                purpose: "Soğurma karakterizasyonu (ISO 11551)",
            },
            {
                no: "3",
                equipment: "Vakum Odası",
                brand: "Pfeiffer",
                model: "HiCube serisi entegre",
                range: "< 10^-6 mbar",
                purpose: "Vakum ortamında LIDT testleri",
            },
            {
                no: "4",
                equipment: "İnterferometre",
                brand: "Zygo / 4D Technology",
                model: "Fizeau serisi",
                range: "2B ve 3B",
                purpose: "Optik yüzey ve haritalama",
            },
        ],
    },

    en: {
        title: "Laser Metrology Laboratory",
        heroText:
            "The Laser Metrology Laboratory characterizes parameters such as absorption, scattering, and laser damage threshold of optical components with high sensitivity and reproducibility, providing measurement infrastructure traceable to international standards.",

        purposeTitle: "Purpose of the Laboratory",
        purposeText: [
            "In optical systems, various optical components, particularly high-reflectivity mirrors, high-transmittance optical windows, and polarizers, are used to transmit and direct the light source to the targeted point. Since these components directly affect the performance of the systems they belong to, it is of great importance to characterize their optical properties in detail.",
            "The purpose of the Laser Metrology Laboratory is to measure parameters such as optical absorption (2D, 3D mapping), scattering, and laser damage threshold of optical components with high sensitivity and reproducibility.",
            "Optical absorption and scattering measurements are performed using two different systems based on interferometry and calorimetry (ISO 11551) at a wavelength of 1070 nm. Laser damage threshold tests can be performed with three different methods: S-on-1, 1-on-1 (ISO 21254), and raster scanning; at wavelengths of 1064, 532, 355, and 266 nm, in both atmospheric and vacuum environments.",
        ],

        aboutTitle: "Laser Metrology",
        aboutText:
            "The characterization of optical components such as optical windows, polarizers, and high-reflectivity mirrors is critical for modern industrial, medical, and defense applications. Laser metrology ensures that these optical properties are determined in accordance with international standards, ensuring the reliability of high-power laser systems.",

        statsTitle: "Measurement Capabilities",
        stats: [
            { value: "IR – VIS – UV", label: "Measurable wavelengths" },
            { value: "<1 ppm – 1000 ppm", label: "Absorption Measurement Range" },
            { value: "ISO 21254", label: "Laser Damage Threshold Test Standard" },
        ],

        areasTitle: "Research Areas",
        areas: [
            {
                icon: <Aperture size={32} strokeWidth={1.5} />,
                title: "Optical Absorption & Scattering",
                text: "2D and 3D mapping using interferometry and calorimetry at 1070 nm wavelength.",
            },
            {
                icon: <Zap size={32} strokeWidth={1.5} />,
                title: "Laser Induced Damage Threshold",
                text: "LIDT tests using S-on-1 and 1-on-1 methods at 1064, 532, 355, and 266 nm.",
            },
            {
                icon: <Crosshair size={32} strokeWidth={1.5} />,
                title: "Vacuum and Atmospheric Tests",
                text: "Optical performance and endurance testing in both atmospheric and vacuum environments.",
            },
            {
                icon: <Focus size={32} strokeWidth={1.5} />,
                title: "Mirror and Polarizer Characterization",
                text: "Measuring optical parameters of highly reflective mirrors and transmissive windows.",
            },
            {
                icon: <RadioTower size={32} strokeWidth={1.5} />,
                title: "Raster Scanning Analysis",
                text: "Detailed characterization and analysis of optical surfaces via raster scanning method.",
            },
            {
                icon: <Microscope size={32} strokeWidth={1.5} />,
                title: "ISO Standard References",
                text: "Metrological evaluations carried out strictly according to ISO 11551 and ISO 21254.",
            },
        ],

        instrumentsTitle: "Instruments and Methods",
        instrumentsIntro:
            "The laboratory utilizes high-precision measurement systems in compliance with international standards for the detailed characterization of optical components.",
        instruments: [
            {
                title: "Interferometric Mapping System",
                text: "2D and 3D mapping devices used to acquire the surface and absorption profiles of optics.",
            },
            {
                title: "Calorimetry System (1070 nm)",
                text: "Hardware based on ISO 11551 to precisely measure the energy absorption of materials.",
            },
            {
                title: "High Power Laser Sources",
                text: "Laser systems operating at 1064, 532, 355, and 266 nm utilized for damage threshold testing.",
            },
            {
                title: "Vacuum Chambers",
                text: "Infrastructure that allows tests to be conducted in vacuum simulating space environment conditions.",
            },
        ],

        uncertaintyTitle: "Measurement Uncertainties",
        uncertaintyText:
            "The expanded uncertainties (k=2) for the absorption, scattering, and LIDT testing are minimized with reference to top-tier standards.",
        uncertaintyItems: [
            {
                range: "Wavelength Accuracy",
                value: "± 0.5 nm",
                level: "k=2 (approx. 95% confidence interval)",
            },
            {
                range: "Absorption Measurement (<10 ppm)",
                value: "± 0.2 ppm",
                level: "k=2 (approx. 95% confidence interval)",
            },
            {
                range: "Laser Damage Threshold",
                value: "Relative ± 5%",
                level: "k=2 (approx. 95% confidence interval)",
            },
        ],

        calibrationsTitle: "Testing & Analysis Services",
        calibrations: [
            {
                title: "ISO 11551 Absorption Tests",
                text: "Calorimetry-based absorption analysis of laser optical components.",
            },
            {
                title: "ISO 21254 Damage Threshold (LIDT)",
                text: "Structural strength testing according to S-on-1 and 1-on-1 procedures.",
            },
            {
                title: "Optical Scattering Characterization",
                text: "Determination of defects and overall scattering rates on optical surfaces.",
            },
        ],

        servicesTitle: "Services Offered",
        services: [
            {
                icon: <ClipboardCheck size={32} strokeWidth={1.5} />,
                title: "Testing and Analysis",
                text: "Testing of optical components fully compliant with ISO standards.",
            },
            {
                icon: <BarChart3 size={32} strokeWidth={1.5} />,
                title: "Quality Control",
                text: "Quality validation reporting for manufactured optical mirrors and laser windows.",
            },
            {
                icon: <FileText size={32} strokeWidth={1.5} />,
                title: "Technical Reporting",
                text: "Providing detailed graphical results on damage thresholds and absorption limits.",
            },
            {
                icon: <Activity size={32} strokeWidth={1.5} />,
                title: "Vacuum Testing",
                text: "Validation of laser endurance under varying vacuum pressure conditions.",
            },
        ],

        sectorsTitle: "Sectors Served",
        sectors: [
            "Defense and Aerospace",
            "Space Technologies",
            "Medical Laser Devices",
            "Optoelectronics Manufacturing",
            "Lidar and Sensor Development",
            "Research Institutes",
            "Industrial Laser Systems",
        ],
        equipmentTableTitle: "Technical Equipment",
        equipmentTable: [
            {
                no: "1",
                equipment: "LIDT Testing Station",
                brand: "Custom Setup",
                model: "LIDT-System-1",
                range: "1064, 532, 355, 266 nm",
                purpose: "S-on-1, 1-on-1 ISO 21254 Testing",
            },
            {
                no: "2",
                equipment: "Calorimetry System",
                brand: "Custom Setup",
                model: "Calorimeter-1070",
                range: "<1 ppm - 1000 ppm",
                purpose: "Absorption characterization (ISO 11551)",
            },
            {
                no: "3",
                equipment: "Vacuum Chamber",
                brand: "Pfeiffer",
                model: "HiCube Series Integrated",
                range: "< 10^-6 mbar",
                purpose: "Vacuum environment testing",
            },
            {
                no: "4",
                equipment: "Interferometer",
                brand: "Zygo / 4D Technology",
                model: "Fizeau Series",
                range: "2D and 3D",
                purpose: "Optical surface mapping",
            },
        ],
    },
};
