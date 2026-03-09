import { Locale } from "@/types/locale";
import {
    Thermometer,
    Zap,
    Layers,
    FlaskConical,
    Microscope,
    ClipboardCheck,
    BarChart3,
    GraduationCap,
    FileText,
    Globe,
    Flame,
    Eye
} from "lucide-react";

export const ThermophysicalLabContent: Record<
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
        title: "Termofiziksel Özellikler Laboratuvarı",
        heroText:
            "Termofiziksel Özellikler Laboratuvarı, malzemelerin ısıl iletkenlik, ısıl direnç, özısı, ısıl yayılım, ısıl genleşme ve emisivite gibi termofiziksel özelliklerinin BIPM izlenebilirliğiyle yüksek doğrulukta ölçülmesini sağlar.",

        purposeTitle: "Laboratuvarın Amacı",
        purposeText: [
            "Isıl iletkenlik, ısıl direnç ve özısı gibi ölçümler, malzemelerin termal davranışlarını anlamak ve çeşitli uygulamalarda daha verimli, dayanıklı ve güvenli sistemler geliştirmek için gereklidir. Bu ölçümler, doğru malzeme seçimi ve tasarımı için temel bilgiler sunar ve özellikle elektronik cihazlar, enerji sistemleri, otomotiv, havacılık ve savunma gibi alanlarda kritik öneme sahiptir.",
            "Bu bilgiler, enerji verimliliğini artırmak, termal yönetim sistemlerini optimize etmek, hızlı sıcaklık değişimlerine karşı güvenlik sağlamak ve termal performansı modellemek için kullanılır. Böylece hem performans hem de maliyet açısından avantaj sağlayan yenilikçi çözümler geliştirilmesine olanak tanır.",
            "Termofiziksel Özellikler Laboratuvarı'nın ana amacı BIPM Termofiziksel Özellikler Çalışma grubu tarafından belirlenen niteliklerin izlenebilir ölçümlerinin gerçekleştirilebilmesini sağlamaktır. Laboratuvarda halihazırda ısıl iletkenlik, ısıl direnç, özısı, ısıl yayılım, ısıl genleşme, kalorimetrik ölçümler, ısı akışı, emisivite ve hiperspektral ölçümleri, vb. alanlarındaki ölçümler yapılmaktadır.",
            "Mevcut laboratuvar altyapısı, özellikle termal izolasyon malzemelerinin düşük seviyedeki ısıl iletkenlik ölçümlerine yönelik oluşturulmuştur. Daha yüksek (>2 W/m*K) ısıl iletkenlik değerleri ölçümü için altyapı geliştirilmektedir. Katıhal maddelerin ısıl genleşme ölçümleri için yatay konfigürasyona sahip dilatometre kullanılmaktadır.",
            "Laboratuvarın bir diğer amacı, emisivite ve ışıma alanının sıcaklık dağılımını ölçmek üzere pirometrelerin, radyasyon termometrelerinin ve termal kameraların kalibrasyonunda kullanılan IR kalibratörlerin karakterizasyonuna yönelik çalışmalardan oluşmaktadır.",
        ],

        aboutTitle: "Termofiziksel Özellikler Metrolojisi",
        aboutText:
            "Malzemelerin termofiziksel özellikleri; enerji verimliliği, yapı sektörü, elektronik soğutma, havacılık ve uzay teknolojileri gibi alanlarda tasarım süreçlerinin temelini oluşturur. Bu ölçümlerin yüksek doğrulukla ve uluslararası izlenebilirlikle gerçekleştirilmesi, sektörlerin güvenilir veri ile çalışmasını sağlar.",

        statsTitle: "Ölçüm Kapasiteleri",
        stats: [
            { value: "0,01 W/m·K", label: "En Düşük Ölçülebilir Isıl İletkenlik" },
            { value: "< 0,001 °C", label: "Sıcaklık Ölçüm Hassasiyeti" },
            { value: "BIPM", label: "Uluslararası İzlenebilirlik" },
            { value: "−40 – 200 °C", label: "Ölçüm Sıcaklık Aralığı" },
        ],

        areasTitle: "Çalışma Alanları",
        areas: [
            {
                icon: <Zap size={32} strokeWidth={1.5} />,
                title: "Isıl İletkenlik ve Direnç",
                text: "Termal izolasyon malzemeleri ve endüstriyel malzemelerin ısıl iletkenlik ve direnç değerlerinin BIPM izlenebilirliğiyle ölçülmesi.",
            },
            {
                icon: <Thermometer size={32} strokeWidth={1.5} />,
                title: "Özısı ve Isıl Yayılım",
                text: "Katı ve sıvı malzemelerin özgül ısı kapasitesi ve ısıl yayılım katsayılarının yüksek doğrulukla kalorimetrik ve lazer flaş yöntemleriyle ölçülmesi.",
            },
            {
                icon: <Layers size={32} strokeWidth={1.5} />,
                title: "Isıl Genleşme",
                text: "Katıhal malzemelerin doğrusal ve hacimsel ısıl genleşme katsayılarının dilatometre kullanılarak belirlenmesi.",
            },
            {
                icon: <Eye size={32} strokeWidth={1.5} />,
                title: "Emisivite Ölçümleri",
                text: "Malzemelerin toplam ve spektral emisivite değerlerinin belirlenmesi; IR kalibratörlerin ve termal kameraların karakterizasyonu.",
            },
            {
                icon: <Flame size={32} strokeWidth={1.5} />,
                title: "Isı Akışı Ölçümleri",
                text: "Yapı elemanları, enerji sistemleri ve endüstriyel cihazlarda ısı akı yoğunluğunun ölçülmesi ve izlenebilir kalibrasyonu.",
            },
            {
                icon: <Microscope size={32} strokeWidth={1.5} />,
                title: "Hiperspektral Ölçümler",
                text: "IR spektral aralığında malzemelerin spektral yansıma ve iletim özelliklerinin hiperspektral görüntüleme sistemleriyle ölçülmesi.",
            },
        ],

        instrumentsTitle: "Kullanılan Cihazlar ve Yöntemler",
        instrumentsIntro:
            "Laboratuvarda; sıcak tel (güverte yöntemi), lazer flaş difüzivite, diferansiyel taramalı kalorimetri (DSC), dilatometre ve emisivite ölçüm sistemleri başta olmak üzere, geniş bir cihaz yelpazesiyle termofiziksel özellik ölçümleri gerçekleştirilmektedir.",
        instruments: [
            {
                title: "Sıcak Disk / Sıcak Tel Aparatı",
                text: "ISO 22007-2 standardına uygun olarak malzemelerin ısıl iletkenliğini ölçen cihaz. Geçici düzlemsel kaynak yöntemiyle düşük iletkenlikli malzemelerde hassas ölçüm yapar.",
            },
            {
                title: "Lazer Flaş Difüzivite (LFA)",
                text: "Katıhal malzemelerin ısıl yayılım katsayısını ölçen yöntem. Milisaniyeler içinde gerçekleştirilen ölçümler sayesinde özısı hesaplamalarında da kullanılir.",
            },
            {
                title: "Diferansiyel Taramalı Kalorimetri (DSC)",
                text: "Faz geçişi sıcaklıkları, erime/katılaşma entalpisi ve malzemelerin özgül ısı kapasitesinin yüksek hassasiyetle belirlenmesini sağlar.",
            },
            {
                title: "Dilatometre",
                text: "Katı malzemelerin doğrusal ısıl genleşme katsayısını ölçen yatay konfigürasyonlu sistem. Geniş sıcaklık aralığında nanometre hassasiyetinde uzunluk değişimi ölçümü yapar.",
            },
            {
                title: "Emisivite Ölçüm Sistemi",
                text: "Fourier dönüşümlü kızılötesi spektrometri (FTIR) tabanlı sistem. Malzeme yüzeylerinin spektral normal emisivitesini ölçer; IR kalibratör karakterizasyonunda kullanılır.",
            },
        ],

        uncertaintyTitle: "Ölçüm Belirsizlikleri",
        uncertaintyText:
            "Laboratuvarda gerçekleştirilen ölçümlerin genişletilmiş belirsizlikleri (k=2), BIPM rehber belgelerine ve ISO/IEC 17025:2017 gerekliliklerine uygun olarak hesaplanmıştır.",
        uncertaintyItems: [
            {
                range: "Isıl İletkenlik (0,01 – 0,5 W/m·K)",
                value: "< %3",
                level: "k=2 (yaklaşık %95 güven aralığı)",
            },
            {
                range: "Özısı (DSC Yöntemi)",
                value: "< %2",
                level: "k=2 (yaklaşık %95 güven aralığı)",
            },
            {
                range: "Isıl Yayılım (LFA Yöntemi)",
                value: "< %5",
                level: "k=2 (yaklaşık %95 güven aralığı)",
            },
            {
                range: "Isıl Genleşme Katsayısı",
                value: "< %1",
                level: "k=2 (yaklaşık %95 güven aralığı)",
            },
        ],

        calibrationsTitle: "Kalibrasyon Hizmetleri",
        calibrations: [
            {
                title: "Isıl İletkenlik Cihaz Kalibrasyonu",
                text: "Sıcak disk, sıcak tel ve koruyucu sıcak plaka gibi ısıl iletkenlik ölçüm cihazlarının referans malzemeler ile izlenebilir kalibrasyonu.",
            },
            {
                title: "DSC ve Kalorimetri Kalibrasyonu",
                text: "Diferansiyel taramalı kalorimetrelerin saf metal standartları kullanılarak sıcaklık ve entalpi bazlı kalibrasyonu.",
            },
            {
                title: "IR Kalibratör Karakterizasyonu",
                text: "Termal kamera ve pirometrelerin kalibrasyonunda kullanılan IR kalibratörlerin emisivite ve sıcaklık dağılımı karakterizasyonu.",
            },
            {
                title: "Isı Akışı Sensörü Kalibrasyonu",
                text: "Yapı enerji analizlerinde kullanılan ısı akısı sensörlerinin [W/m²] birimi temelinde izlenebilir kalibrasyonu.",
            },
        ],

        servicesTitle: "Sunulan Hizmetler",
        services: [
            {
                icon: <ClipboardCheck size={32} strokeWidth={1.5} />,
                title: "İzlenebilir Kalibrasyon",
                text: "BIPM ve SI birimlerine izlenebilir termofiziksel özellik ölçüm ve kalibrasyon hizmetleri.",
            },
            {
                icon: <BarChart3 size={32} strokeWidth={1.5} />,
                title: "Malzeme Karakterizasyonu",
                text: "İzolasyon malzemeleri, yapı bileşenleri, elektronik ve havacılık malzemeleri için ısıl özellik testi.",
            },
            {
                icon: <GraduationCap size={32} strokeWidth={1.5} />,
                title: "Eğitim ve Danışmanlık",
                text: "Termofiziksel özellik ölçüm yöntemleri, standartlar ve belirsizlik hesabı konularında teknik eğitim.",
            },
            {
                icon: <FlaskConical size={32} strokeWidth={1.5} />,
                title: "Ar-Ge Desteği",
                text: "Yeni malzeme geliştirme, enerji verimliliği ve termal yönetim alanındaki Ar-Ge projelerine metroloji desteği.",
            },
            {
                icon: <FileText size={32} strokeWidth={1.5} />,
                title: "Teknik Danışmanlık",
                text: "Ölçüm yöntemi seçimi, numune hazırlığı ve belirsizlik bütçesi konularında uzman desteği.",
            },
            {
                icon: <Globe size={32} strokeWidth={1.5} />,
                title: "Uluslararası Karşılaştırma",
                text: "BIPM ve Avrupa metroloji ağları kapsamında gerçekleştirilen termofiziksel özellik karşılaştırma ölçümleri.",
            },
        ],

        sectorsTitle: "Hizmet Verdiği Sektörler",
        sectors: [
            "İnşaat ve Yapı Malzemeleri",
            "Termal İzolasyon Üreticileri",
            "Elektronik ve Yarı İletken Sektörü",
            "Otomotiv ve Elektrikli Araçlar",
            "Havacılık ve Uzay",
            "Enerji ve Yenilenebilir Enerji",
            "Savunma Sanayi",
            "Polimer ve Kompozit Malzeme Üreticileri",
            "Gıda ve İlaç Endüstrisi",
            "Araştırma Kurumları ve Üniversiteler",
        ],

        equipmentTableTitle: "Teknik Donanımlar ve Ekipmanlar",
        equipmentTable: [
            {
                no: "1",
                equipment: "Sıcak Disk Termal Analizörü",
                brand: "Hot Disk AB",
                model: "TPS 2500S",
                range: "0,005 – 1000 W/m·K",
                purpose: "Isıl iletkenlik ve ısıl yayılım ölçümü",
            },
            {
                no: "2",
                equipment: "Lazer Flaş Difüzivite Cihazı (LFA)",
                brand: "NETZSCH",
                model: "LFA 467 HyperFlash",
                range: "−120 – 500 °C",
                purpose: "Isıl yayılım ve özısı ölçümü",
            },
            {
                no: "3",
                equipment: "Diferansiyel Taramalı Kalorimetri (DSC)",
                brand: "NETZSCH / TA Instruments",
                model: "DSC 214 Polyma / Q2000",
                range: "−180 – 700 °C",
                purpose: "Özısı, faz geçişi ve entalpi ölçümü",
            },
            {
                no: "4",
                equipment: "Dilatometre",
                brand: "NETZSCH",
                model: "DIL 402 Expedis",
                range: "−150 – 2000 °C",
                purpose: "Isıl genleşme katsayısı ölçümü",
            },
            {
                no: "5",
                equipment: "FTIR Spektrometre",
                brand: "Bruker / Thermo Fisher",
                model: "VERTEX 70 / Nicolet iS50",
                range: "400 – 8000 cm⁻¹",
                purpose: "Emisivite ve spektral iletim ölçümü",
            },
            {
                no: "6",
                equipment: "IR Kalibratör (Kara Cisim)",
                brand: "Fluke / Isotech",
                model: "4181 / Nu Blackbody",
                range: "−20 – 200 °C",
                purpose: "Termal kamera ve pirometre kalibrasyonu",
            },
            {
                no: "7",
                equipment: "Isı Akışı Sensörü",
                brand: "Hukseflux / Captec",
                model: "HFP01 / CP09",
                range: "0 – 2000 W/m²",
                purpose: "Yüzey ısı akışı ölçümü ve kalibrasyonu",
            },
        ],
    },

    en: {
        title: "Thermophysical Properties Laboratory",
        heroText:
            "The Thermophysical Properties Laboratory provides BIPM-traceable, high-accuracy measurements of thermophysical properties of materials such as thermal conductivity, thermal resistance, specific heat, thermal diffusivity, thermal expansion, and emissivity.",

        purposeTitle: "Purpose of the Laboratory",
        purposeText: [
            "Measurements such as thermal conductivity, thermal resistance, and specific heat are necessary to understand the thermal behavior of materials and to develop more efficient, durable, and reliable systems in various applications. These measurements provide fundamental data for correct material selection and design, and are of critical importance especially in fields such as electronic devices, energy systems, automotive, aerospace, and defense.",
            "This information is used to increase energy efficiency, optimize thermal management systems, ensure safety against rapid temperature changes, and model thermal performance. This enables the development of innovative solutions that provide advantages both in performance and cost.",
            "The main purpose of the Thermophysical Properties Laboratory is to enable traceable measurements of the properties determined by the BIPM Thermophysical Properties Working Group. The laboratory currently performs measurements in the areas of thermal conductivity, thermal resistance, specific heat, thermal diffusivity, thermal expansion, calorimetric measurements, heat flux, emissivity, and hyperspectral measurements, among others.",
            "The current laboratory infrastructure has been established primarily for low-level thermal conductivity measurements of thermal insulation materials. Infrastructure for measuring higher (>2 W/m*K) thermal conductivity values is being developed. A dilatometer with horizontal configuration is used for thermal expansion measurements of solid materials.",
            "Another purpose of the laboratory consists of studies aimed at characterizing pyrometers, radiation thermometers, and IR calibrators used in calibrating thermal cameras, with the goal of measuring the temperature distribution of emissivity and radiation fields.",
        ],

        aboutTitle: "Thermophysical Properties Metrology",
        aboutText:
            "The thermophysical properties of materials form the foundation of design processes in areas such as energy efficiency, construction, electronic cooling, aerospace, and space technologies. Performing these measurements with high accuracy and international traceability ensures that industries work with reliable data.",

        statsTitle: "Measurement Capabilities",
        stats: [
            { value: "0.01 W/m·K", label: "Lowest Measurable Thermal Conductivity" },
            { value: "< 0.001 °C", label: "Temperature Measurement Sensitivity" },
            { value: "BIPM", label: "International Traceability" },
            { value: "−40 – 200 °C", label: "Measurement Temperature Range" },
        ],

        areasTitle: "Research Areas",
        areas: [
            {
                icon: <Zap size={32} strokeWidth={1.5} />,
                title: "Thermal Conductivity and Resistance",
                text: "Measurement of thermal conductivity and resistance values of thermal insulation and industrial materials with BIPM traceability.",
            },
            {
                icon: <Thermometer size={32} strokeWidth={1.5} />,
                title: "Specific Heat and Thermal Diffusivity",
                text: "High-accuracy measurement of specific heat capacity and thermal diffusivity of solid and liquid materials using calorimetric and laser flash methods.",
            },
            {
                icon: <Layers size={32} strokeWidth={1.5} />,
                title: "Thermal Expansion",
                text: "Determination of linear and volumetric thermal expansion coefficients of solid materials using a dilatometer.",
            },
            {
                icon: <Eye size={32} strokeWidth={1.5} />,
                title: "Emissivity Measurements",
                text: "Determination of total and spectral emissivity values of materials; characterization of IR calibrators and thermal cameras.",
            },
            {
                icon: <Flame size={32} strokeWidth={1.5} />,
                title: "Heat Flux Measurements",
                text: "Measurement and traceable calibration of heat flux density in building elements, energy systems, and industrial devices.",
            },
            {
                icon: <Microscope size={32} strokeWidth={1.5} />,
                title: "Hyperspectral Measurements",
                text: "Measurement of spectral reflectance and transmission properties of materials in the IR spectral range using hyperspectral imaging systems.",
            },
        ],

        instrumentsTitle: "Instruments and Methods",
        instrumentsIntro:
            "The laboratory performs thermophysical property measurements using a wide range of instruments, primarily including hot wire (guarded hot plate), laser flash diffusivity, differential scanning calorimetry (DSC), dilatometer, and emissivity measurement systems.",
        instruments: [
            {
                title: "Hot Disk / Hot Wire Apparatus",
                text: "Instrument measuring the thermal conductivity of materials in accordance with ISO 22007-2 standard. Makes precise measurements in low-conductivity materials using the transient plane source method.",
            },
            {
                title: "Laser Flash Diffusivity (LFA)",
                text: "Method measuring the thermal diffusivity coefficient of solid materials. Measurements completed within milliseconds are also used in specific heat calculations.",
            },
            {
                title: "Differential Scanning Calorimetry (DSC)",
                text: "Enables high-precision determination of phase transition temperatures, melting/solidification enthalpy, and specific heat capacity of materials.",
            },
            {
                title: "Dilatometer",
                text: "Horizontal-configuration system measuring the linear thermal expansion coefficient of solid materials. Measures length changes at nanometer precision over a wide temperature range.",
            },
            {
                title: "Emissivity Measurement System",
                text: "Fourier transform infrared spectrometry (FTIR) based system. Measures the spectral normal emissivity of material surfaces; used in IR calibrator characterization.",
            },
        ],

        uncertaintyTitle: "Measurement Uncertainties",
        uncertaintyText:
            "The expanded uncertainties (k=2) of measurements performed in the laboratory have been calculated in accordance with BIPM guidance documents and ISO/IEC 17025:2017 requirements.",
        uncertaintyItems: [
            {
                range: "Thermal Conductivity (0.01 – 0.5 W/m·K)",
                value: "< 3%",
                level: "k=2 (approx. 95% confidence interval)",
            },
            {
                range: "Specific Heat (DSC Method)",
                value: "< 2%",
                level: "k=2 (approx. 95% confidence interval)",
            },
            {
                range: "Thermal Diffusivity (LFA Method)",
                value: "< 5%",
                level: "k=2 (approx. 95% confidence interval)",
            },
            {
                range: "Thermal Expansion Coefficient",
                value: "< 1%",
                level: "k=2 (approx. 95% confidence interval)",
            },
        ],

        calibrationsTitle: "Calibration Services",
        calibrations: [
            {
                title: "Thermal Conductivity Instrument Calibration",
                text: "Traceable calibration of thermal conductivity measurement instruments such as hot disk, hot wire, and guarded hot plate using reference materials.",
            },
            {
                title: "DSC and Calorimetry Calibration",
                text: "Temperature and enthalpy-based calibration of differential scanning calorimeters using pure metal standards.",
            },
            {
                title: "IR Calibrator Characterization",
                text: "Emissivity and temperature distribution characterization of IR calibrators used in the calibration of thermal cameras and pyrometers.",
            },
            {
                title: "Heat Flux Sensor Calibration",
                text: "Traceable calibration of heat flux sensors used in building energy analyses on a [W/m²] unit basis.",
            },
        ],

        servicesTitle: "Services Offered",
        services: [
            {
                icon: <ClipboardCheck size={32} strokeWidth={1.5} />,
                title: "Traceable Calibration",
                text: "Thermophysical property measurement and calibration services traceable to BIPM and SI units.",
            },
            {
                icon: <BarChart3 size={32} strokeWidth={1.5} />,
                title: "Material Characterization",
                text: "Thermal property testing for insulation materials, building components, electronics, and aerospace materials.",
            },
            {
                icon: <GraduationCap size={32} strokeWidth={1.5} />,
                title: "Training and Consultancy",
                text: "Technical training on thermophysical property measurement methods, standards, and uncertainty calculations.",
            },
            {
                icon: <FlaskConical size={32} strokeWidth={1.5} />,
                title: "R&D Support",
                text: "Metrology support for R&D projects in new material development, energy efficiency, and thermal management.",
            },
            {
                icon: <FileText size={32} strokeWidth={1.5} />,
                title: "Technical Consultancy",
                text: "Expert support on measurement method selection, sample preparation, and uncertainty budget.",
            },
            {
                icon: <Globe size={32} strokeWidth={1.5} />,
                title: "International Comparison",
                text: "Thermophysical property comparison measurements conducted within BIPM and European metrology networks.",
            },
        ],

        sectorsTitle: "Sectors Served",
        sectors: [
            "Construction and Building Materials",
            "Thermal Insulation Manufacturers",
            "Electronics and Semiconductors",
            "Automotive and Electric Vehicles",
            "Aerospace and Space",
            "Energy and Renewable Energy",
            "Defense Industry",
            "Polymer and Composite Material Manufacturers",
            "Food and Pharmaceutical Industry",
            "Research Institutions and Universities",
        ],

        equipmentTableTitle: "Technical Equipment",
        equipmentTable: [
            {
                no: "1",
                equipment: "Hot Disk Thermal Analyzer",
                brand: "Hot Disk AB",
                model: "TPS 2500S",
                range: "0.005 – 1000 W/m·K",
                purpose: "Thermal conductivity and diffusivity measurement",
            },
            {
                no: "2",
                equipment: "Laser Flash Diffusivity (LFA)",
                brand: "NETZSCH",
                model: "LFA 467 HyperFlash",
                range: "−120 – 500 °C",
                purpose: "Thermal diffusivity and specific heat measurement",
            },
            {
                no: "3",
                equipment: "Differential Scanning Calorimeter (DSC)",
                brand: "NETZSCH / TA Instruments",
                model: "DSC 214 Polyma / Q2000",
                range: "−180 – 700 °C",
                purpose: "Specific heat, phase transition, and enthalpy measurement",
            },
            {
                no: "4",
                equipment: "Dilatometer",
                brand: "NETZSCH",
                model: "DIL 402 Expedis",
                range: "−150 – 2000 °C",
                purpose: "Thermal expansion coefficient measurement",
            },
            {
                no: "5",
                equipment: "FTIR Spectrometer",
                brand: "Bruker / Thermo Fisher",
                model: "VERTEX 70 / Nicolet iS50",
                range: "400 – 8000 cm⁻¹",
                purpose: "Emissivity and spectral transmittance measurement",
            },
            {
                no: "6",
                equipment: "IR Calibrator (Blackbody)",
                brand: "Fluke / Isotech",
                model: "4181 / Nu Blackbody",
                range: "−20 – 200 °C",
                purpose: "Thermal camera and pyrometer calibration",
            },
            {
                no: "7",
                equipment: "Heat Flux Sensor",
                brand: "Hukseflux / Captec",
                model: "HFP01 / CP09",
                range: "0 – 2000 W/m²",
                purpose: "Surface heat flux measurement and calibration",
            },
        ],
    },
};
