import { Locale } from "@/types/locale";
import {
    Droplets,
    Thermometer,
    Box,
    FlaskConical,
    Microscope,
    ClipboardCheck,
    BarChart3,
    GraduationCap,
    FileText,
    Globe
} from "lucide-react";

export const HumidityLabContent: Record<
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
    }
> = {
    tr: {
        title: "Nem Laboratuvarı",
        heroText:
            "Nem Laboratuvarı, gazlarda ve katı maddelerde bulunan su miktarının yüksek doğrulukla ölçülmesini sağlayan metrolojik altyapıyı sunmaktadır. Uluslararası Sıcaklık Ölçeği ITS-90'a izlenebilir ölçümler gerçekleştirilmektedir.",

        purposeTitle: "Laboratuvarın Amacı",
        purposeText: [
            "Gazlarda (ve havada) nem ölçümleri ve katıhal maddelerde rutubet ölçümleri; insan sağlığı ve konforunun sağlanmasından enerji, gıda, ilaç sektörleri, pil ve elektronik üretimi, hava durumu ve iklim gibi birçok alanda önem taşımaktadır.",
            "Nem laboratuvarının ana amacı nem ve rutubet niteliklerini, başta havanın bağıl nemi olmak üzere mutlak nem, çiy-noktası ve kırağı-noktası sıcaklıkları, su buharının kısmi basıncı, fraksiyonu ve oranı, çeşitli gazlardaki su miktarı, katı hal ve toz şeklinde malzemelerde su miktarını (uçucu bileşenler dahil) vb'nin SI birimlerine ve/veya ilgili standartlara izlenebilir şekilde ölçümlerini gerçekleştirmek için altyapının oluşturulması, korunması ve yaygınlaştırılmasıdır.",
            "Ayrıca, hava sıcaklığının ITS-90'a (Uluslararası Sıcaklık Ölçeği-1990) göre izlenebilir ölçülmesi de bu laboratuvarın kapsamındadır. Bağıl nem ölçümlerinde hava sıcaklığının doğru ölçülmesi büyük önem taşımaktadır.",
        ],

        aboutTitle: "Nem Metrolojisi",
        aboutText:
            "Nem ve rutubet ölçümleri; gıda üretimi, ilaç sanayi, elektronik üretimi, enerji sistemleri ve meteoroloji gibi birçok alanda kritik öneme sahiptir. Ortam havasındaki su buharı miktarı üretim süreçlerinin güvenilirliği, ürün kalitesi ve ölçüm doğruluğu üzerinde doğrudan etkili olan temel çevresel parametrelerden biridir.",

        statsTitle: "Ölçüm Kapasiteleri",
        stats: [
            { value: "0.07 °C", label: "Belirsizlik (-10 °C ile 70 °C arası)" },
            { value: "0.2 °C", label: "Belirsizlik (70 °C ile 90 °C arası)" },
            { value: "k=2", label: "Genişletme faktörü" },
            { value: "ITS-90", label: "Uluslararası Sıcaklık Ölçeği" },
        ],

        areasTitle: "Çalışma Alanları",
        areas: [
            {
                icon: <Droplets size={32} strokeWidth={1.5} />,
                title: "Bağıl Nem Ölçümleri",
                text: "Gazlarda ve havada bulunan bağıl nem miktarının yüksek doğrulukla ölçülmesi ve kalibrasyonu.",
            },
            {
                icon: <Thermometer size={32} strokeWidth={1.5} />,
                title: "Çiy Noktası Ölçümleri",
                text: "Çiy ve kırağı noktası sıcaklıklarının referans ölçüm sistemleri ile belirlenmesi. Su buharının kısmi basıncı, fraksiyonu ve oranının ölçümü.",
            },
            {
                icon: <Thermometer size={32} strokeWidth={1.5} />,
                title: "Hava Sıcaklığı Ölçümleri",
                text: "ITS-90 uluslararası sıcaklık ölçeğine izlenebilir sıcaklık ölçümleri. -10 °C ile 90 °C aralığında hassas ölçümler gerçekleştirilmektedir.",
            },
            {
                icon: <Box size={32} strokeWidth={1.5} />,
                title: "Malzemede Rutubet Ölçümleri",
                text: "Katı ve toz halindeki malzemelerde su miktarının metrolojik yöntemlerle belirlenmesi. Uçucu bileşenler dahil tüm fraksiyonlar ölçülebilmektedir.",
            },
            {
                icon: <FlaskConical size={32} strokeWidth={1.5} />,
                title: "Gazlardaki Su Miktarı",
                text: "Çeşitli gazlardaki su miktarının yüksek doğrulukla ölçülmesi ve izlenebilir kalibrasyon hizmetleri.",
            },
            {
                icon: <Microscope size={32} strokeWidth={1.5} />,
                title: "Mutlak Nem Ölçümleri",
                text: "Havanın mutlak nem değerinin SI birimlerine izlenebilir yöntemlerle doğru olarak belirlenmesi.",
            },
        ],

        instrumentsTitle: "Kullanılan Cihazlar ve Yöntemler",
        instrumentsIntro:
            "Halihazırda göstergeli ve göstergesiz (yazılım bağlantılı) çeşitli higrometrelerin, nem algılayıcılarının, nem ve sıcaklık veri kaydedicileri ve vericilerinin, çiy-noktası nem ölçerlerin, ortam koşulları kaydedicilerin ve hava sıcaklığı termometrelerinin SI birimlerine izlenebilir kalibrasyonları gerçekleştirilmektedir.",
        instruments: [
            {
                title: "Higrometreler",
                text: "Göstergeli ve göstergesiz (yazılım bağlantılı) çeşitli higrometreler. Bağıl nem ölçümünde kullanılan temel referans cihazlardır.",
            },
            {
                title: "Nem Algılayıcıları",
                text: "Farklı teknoloji ve prensiplere dayanan nem algılayıcıları. Kapasitif, rezistif ve termal iletkenlik prensibine dayalı sensörler.",
            },
            {
                title: "Çiy Noktası Nem Ölçerler",
                text: "Çiy ve kırağı noktası sıcaklıklarını yüksek hassasiyetle ölçen soğutmalı ayna tipi cihazlar ve elektronik sensörler.",
            },
            {
                title: "Veri Kaydediciler ve Vericiler",
                text: "Nem ve sıcaklık verilerini sürekli kaydeden ve ileten cihazlar. Uzaktan izleme ve veri aktarımı için kullanılmaktadır.",
            },
            {
                title: "Hava Sıcaklığı Termometreleri",
                text: "ITS-90 ölçeğine izlenebilir hassas termometreler. Bağıl nem ölçümlerinde kritik öneme sahip sıcaklık ölçüm cihazları.",
            },
        ],

        uncertaintyTitle: "Ölçüm Belirsizlikleri",
        uncertaintyText:
            "Halihazırda laboratuvarda hava sıcaklığı ölçümlerinin belirsizliği -10 °C ile 70 °C aralığında 0.07 °C ve 70 °C ile 90 °C aralığında 0.2 °C (k=2) seviyesine indirilmiş durumdadır ve bu belirsizliklerin daha da düşürülmesi için çalışmalar devam etmektedir.",
        uncertaintyItems: [
            {
                range: "-10 °C – 70 °C",
                value: "0.07 °C",
                level: "k=2 (yaklaşık %95 güven aralığı)",
            },
            {
                range: "70 °C – 90 °C",
                value: "0.2 °C",
                level: "k=2 (yaklaşık %95 güven aralığı)",
            },
        ],

        calibrationsTitle: "Kalibrasyon Hizmetleri",
        calibrations: [
            {
                title: "Nem Ölçer Kalibrasyonu",
                text: "Bağıl nem ve çiy noktası ölçer cihazların izlenebilir kalibrasyonu. Higrometreler, nem algılayıcıları ve çiy noktası termometreleri için kalibrasyon sertifikası düzenlenmektedir.",
            },
            {
                title: "Sıcaklık Kalibrasyonu",
                text: "Hava sıcaklığı ölçüm cihazlarının ITS-90 ölçeğine izlenebilir kalibrasyonu. -10 °C ile 90 °C aralığında referans sistemler ile gerçekleştirilmektedir.",
            },
            {
                title: "Malzemede Rutubet Analizi",
                text: "Talaş, kağıt, toprak ve benzeri numunelerde rutubet miktarının ölçülmesi. Uçucu bileşenler dahil tüm fraksiyonların tayini gerçekleştirilmektedir.",
            },
            {
                title: "Veri Kaydedici Kalibrasyonu",
                text: "Nem ve sıcaklık veri kaydedicilerinin ve vericilerinin SI birimlerine izlenebilir kalibrasyonu. Hem sahada hem de laboratuvar ortamında kalibrasyon imkânı.",
            },
        ],

        servicesTitle: "Sunulan Hizmetler",
        services: [
            {
                icon: <ClipboardCheck size={32} strokeWidth={1.5} />,
                title: "İzlenebilir Kalibrasyon",
                text: "SI birimlerine ve uluslararası standartlara izlenebilir nem ve sıcaklık kalibrasyonu.",
            },
            {
                icon: <BarChart3 size={32} strokeWidth={1.5} />,
                title: "Ölçüm ve Test",
                text: "Ortam koşulları, endüstriyel süreçler ve ürün kalitesi için nem ve sıcaklık ölçümleri.",
            },
            {
                icon: <GraduationCap size={32} strokeWidth={1.5} />,
                title: "Eğitim ve Danışmanlık",
                text: "Nem ölçümleri, belirsizlik hesaplamaları ve uluslararası standartlar hakkında eğitim hizmetleri.",
            },
            {
                icon: <Microscope size={32} strokeWidth={1.5} />,
                title: "Ar-Ge Desteği",
                text: "Nem metrolojisi alanındaki araştırma ve geliştirme projelerine teknik destek ve işbirliği.",
            },
            {
                icon: <FileText size={32} strokeWidth={1.5} />,
                title: "Teknik Danışmanlık",
                text: "Ölçüm belirsizliği, cihaz seçimi ve kalibrasyon yöntemi konularında uzman teknik danışmanlık.",
            },
            {
                icon: <Globe size={32} strokeWidth={1.5} />,
                title: "Uluslararası Karşılaştırma",
                text: "Milli metroloji enstitüleri ile ortak ölçüm karşılaştırmaları ve izlenebilirlik zincirinin güvence altına alınması.",
            },
        ],

        sectorsTitle: "Hizmet Verdiği Sektörler",
        sectors: [
            "Gıda Üretimi",
            "İlaç Sanayi",
            "Elektronik Üretimi",
            "Pil ve Enerji Sistemleri",
            "Hava Durumu ve İklim",
            "Tarım",
            "Boya ve Kaplama",
            "Kâğıt ve Selüloz",
            "Tekstil",
            "Otomotiv",
        ],
    },

    en: {
        title: "Humidity Laboratory",
        heroText:
            "The Humidity Laboratory provides metrological infrastructure for high-accuracy measurements of water content in gases and solid materials. Measurements are traceable to the International Temperature Scale ITS-90.",

        purposeTitle: "Purpose of the Laboratory",
        purposeText: [
            "Humidity measurements in gases (and air) and moisture measurements in solid materials are important in many fields, including ensuring human health and comfort, energy, food, pharmaceuticals, battery and electronics manufacturing, weather and climate.",
            "The main purpose of the humidity laboratory is to establish, maintain and disseminate the infrastructure for measuring humidity and moisture quantities – primarily relative humidity of air, absolute humidity, dew-point and frost-point temperatures, partial pressure, fraction and ratio of water vapor, water content in various gases, and water content in solid and powdery materials (including volatile components) – traceably to SI units and/or relevant standards.",
            "In addition, traceable measurement of air temperature according to ITS-90 (International Temperature Scale-1990) is also within the scope of this laboratory. Accurate measurement of air temperature is of great importance in relative humidity measurements.",
        ],

        aboutTitle: "Humidity Metrology",
        aboutText:
            "Humidity measurements are critical in many fields including food production, pharmaceuticals, electronics, energy systems and meteorology. The amount of water vapor in ambient air is one of the fundamental environmental parameters that directly affects the reliability of production processes, product quality and measurement accuracy.",

        statsTitle: "Measurement Capabilities",
        stats: [
            { value: "0.07 °C", label: "Uncertainty (-10 °C to 70 °C range)" },
            { value: "0.2 °C", label: "Uncertainty (70 °C to 90 °C range)" },
            { value: "k=2", label: "Coverage factor" },
            { value: "ITS-90", label: "International Temperature Scale" },
        ],

        areasTitle: "Research Areas",
        areas: [
            {
                icon: <Droplets size={32} strokeWidth={1.5} />,
                title: "Relative Humidity Measurements",
                text: "High-accuracy measurement and calibration of relative humidity content in gases and air.",
            },
            {
                icon: <Thermometer size={32} strokeWidth={1.5} />,
                title: "Dew Point Measurements",
                text: "Determination of dew and frost point temperatures using reference measurement systems. Measurement of partial pressure, fraction and ratio of water vapor.",
            },
            {
                icon: <Thermometer size={32} strokeWidth={1.5} />,
                title: "Air Temperature Measurements",
                text: "Temperature measurements traceable to the ITS-90 international temperature scale. Precise measurements are performed in the range -10 °C to 90 °C.",
            },
            {
                icon: <Box size={32} strokeWidth={1.5} />,
                title: "Moisture in Materials",
                text: "Determination of water content in solid and powdery materials using metrological methods. All fractions including volatile components can be measured.",
            },
            {
                icon: <FlaskConical size={32} strokeWidth={1.5} />,
                title: "Water Content in Gases",
                text: "High-accuracy measurement of water content in various gases and traceable calibration services.",
            },
            {
                icon: <Microscope size={32} strokeWidth={1.5} />,
                title: "Absolute Humidity Measurements",
                text: "Accurate determination of absolute humidity of air using SI-traceable methods.",
            },
        ],

        instrumentsTitle: "Instruments and Methods",
        instrumentsIntro:
            "Currently, traceable calibrations of various indicating and non-indicating (software-linked) hygrometers, humidity sensors, humidity and temperature data loggers and transmitters, dew-point hygrometers, ambient condition recorders, and air temperature thermometers are performed in SI units.",
        instruments: [
            {
                title: "Hygrometers",
                text: "Various indicating and non-indicating (software-linked) hygrometers. These are the primary reference instruments used in relative humidity measurement.",
            },
            {
                title: "Humidity Sensors",
                text: "Humidity sensors based on different technologies and principles. Capacitive, resistive, and thermal conductivity principle sensors.",
            },
            {
                title: "Dew Point Hygrometers",
                text: "Chilled-mirror type instruments and electronic sensors measuring dew and frost point temperatures with high precision.",
            },
            {
                title: "Data Loggers and Transmitters",
                text: "Devices that continuously record and transmit humidity and temperature data. Used for remote monitoring and data transfer.",
            },
            {
                title: "Air Temperature Thermometers",
                text: "Precision thermometers traceable to the ITS-90 scale. Temperature measurement instruments of critical importance in relative humidity measurements.",
            },
        ],

        uncertaintyTitle: "Measurement Uncertainties",
        uncertaintyText:
            "Currently, the uncertainty of air temperature measurements in the laboratory has been reduced to 0.07 °C in the -10 °C to 70 °C range and 0.2 °C in the 70 °C to 90 °C range (k=2), and work is ongoing to further reduce these uncertainties.",
        uncertaintyItems: [
            {
                range: "-10 °C – 70 °C",
                value: "0.07 °C",
                level: "k=2 (approximately 95% confidence interval)",
            },
            {
                range: "70 °C – 90 °C",
                value: "0.2 °C",
                level: "k=2 (approximately 95% confidence interval)",
            },
        ],

        calibrationsTitle: "Calibration Services",
        calibrations: [
            {
                title: "Humidity Sensor Calibration",
                text: "Traceable calibration of relative humidity and dew point measuring instruments. Calibration certificates are issued for hygrometers, humidity sensors and dew point thermometers.",
            },
            {
                title: "Temperature Calibration",
                text: "Calibration of air temperature measuring instruments traceable to ITS-90. Performed with reference systems in the range -10 °C to 90 °C.",
            },
            {
                title: "Moisture Analysis in Materials",
                text: "Measurement of moisture content in wood chips, paper, soil and similar samples. Determination of all fractions including volatile components.",
            },
            {
                title: "Data Logger Calibration",
                text: "Traceable calibration of humidity and temperature data loggers and transmitters in SI units. Calibration available both in the field and in the laboratory.",
            },
        ],

        servicesTitle: "Services Offered",
        services: [
            {
                icon: <ClipboardCheck size={32} strokeWidth={1.5} />,
                title: "Traceable Calibration",
                text: "Traceable humidity and temperature calibration to SI units and international standards.",
            },
            {
                icon: <BarChart3 size={32} strokeWidth={1.5} />,
                title: "Measurement & Testing",
                text: "Humidity and temperature measurements for ambient conditions, industrial processes and product quality.",
            },
            {
                icon: <GraduationCap size={32} strokeWidth={1.5} />,
                title: "Training & Consultancy",
                text: "Training services on humidity measurements, uncertainty calculations and international standards.",
            },
            {
                icon: <Microscope size={32} strokeWidth={1.5} />,
                title: "R&D Support",
                text: "Technical support and collaboration for research and development projects in the field of humidity metrology.",
            },
            {
                icon: <FileText size={32} strokeWidth={1.5} />,
                title: "Technical Advisory",
                text: "Expert technical advice on measurement uncertainty, instrument selection and calibration methodology.",
            },
            {
                icon: <Globe size={32} strokeWidth={1.5} />,
                title: "International Comparisons",
                text: "Joint measurement comparisons with national metrology institutes and assurance of the traceability chain.",
            },
        ],

        sectorsTitle: "Sectors Served",
        sectors: [
            "Food Production",
            "Pharmaceuticals",
            "Electronics Manufacturing",
            "Battery & Energy Systems",
            "Weather & Climate",
            "Agriculture",
            "Paint & Coating",
            "Paper & Pulp",
            "Textiles",
            "Automotive",
        ],
    },
};