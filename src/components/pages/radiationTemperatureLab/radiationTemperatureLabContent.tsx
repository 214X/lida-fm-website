import { Locale } from "@/types/locale";
import {
    Thermometer,
    RadioTower,
    Flame,
    FlaskConical,
    Microscope,
    ClipboardCheck,
    BarChart3,
    GraduationCap,
    FileText,
    Globe,
    Zap,
    Eye
} from "lucide-react";

export const RadiationTemperatureLabContent: Record<
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
        title: "Radyasyon Sıcaklığı Laboratuvarı",
        heroText:
            "Radyasyon Sıcaklığı Laboratuvarı, yüksek sıcaklık ölçümlerinde SI birimlerine izlenebilir kalibrasyon altyapısı sunar. Gümüş donma noktası (961,78 °C) ve üzerindeki sıcaklıklarda radyasyon ve kontak sıcaklığı ölçümlerinin izlenebilirliğini sağlamaktadır.",

        purposeTitle: "Laboratuvarın Amacı",
        purposeText: [
            "Laboratuvarın ana amacı Ulusal Radyasyon Sıcaklığı Ölçeği'nin birincil seviyede oluşturulması, korunması ve yaygınlaştırılmasından oluşmaktadır. Ayrıca gümüş donma noktası olan 961,78 °C üzerindeki sıcaklık ölçümlerinde radyasyon ve kontak sıcaklığı ölçümlerinin SI birimlerine izlenebilirliğini temin etmektir.",
            "Radyasyon sıcaklığı, bir nesnenin yüzeyinden yayılan termal radyasyonun (Planck kuramına göre) ölçülmesiyle elde edilen bir sıcaklık değeridir. Radyasyon sıcaklığı ölçümleri uzaktan ve temassız gerçekleştirildiği için birçok alanda kritik öneme sahiptir. Özellikle yüksek sıcaklıkların ölçülmesi gerektiği ve temaslı ölçümün zor olduğu (mümkün olmadığı) durumlarda, hareketli nesnelerin sıcaklık ölçümlerinde radyasyon sıcaklığı oldukça kullanışlıdır.",
            "Bu yöntem; yüksek sıcaklık fırınları, erivik metaller, motorlar veya kimyasal reaksiyonlar gibi doğrudan temasın mümkün olmadığı tehlikeli ortamlarda güvenli bir ölçüm sağlar. Örneğin endüstriyel uygulamalarda; üretim süreçlerini optimize etmek ve kalite kontrolü sağlamak için metal işleme, cam üretimi, çimento ve kağıt üretimi endüstrisi gibi alanlarda yaygın olarak kullanılır.",
            "Temassız ve hijyenik olmasından dolayı gıda sektöründe yaygın olarak kullanılmaktadır. Temassız insan vücudu sıcaklığı ölçümleri, özellikle COVID-19 pandemi döneminde tüm insanlığın üzerinde odaklandığı bir nokta olmuştur. Bunun neticesinde günümüzde alın ve deri termometreleri (ve termal kameralar) insan vücudu termal ışımasına dayanarak vücut sıcaklığının (ateşin) hızlı, kişiye özel ve yüksek doğrulukla ölçülmesinde vazgeçilmez hale gelmiştir.",
        ],

        aboutTitle: "Radyasyon Sıcaklığı Metrolojisi",
        aboutText:
            "Radyasyon sıcaklığı ölçümleri; endüstriyel üretim, tıp, savunma, uzay bilimleri ve meteoroloji dahil pek çok alanda kritik rol oynamaktadır. Planck radyasyon kanunu çerçevesinde gerçekleştirilen bu ölçümler, temassız ve uzaktan sıcaklık belirleme imkânı sunarak günümüz teknolojisinin ayrılmaz bir parçası hâline gelmiştir.",

        statsTitle: "Ölçüm Kapasiteleri",
        stats: [
            { value: "961,78 °C", label: "Gümüş Donma Noktası Referansı" },
            { value: "> 1000 °C", label: "Üst Sıcaklık Ölçüm Aralığı" },
            { value: "0,1 °C", label: "Tipik Ölçüm Belirsizliği" },
            { value: "ITS-90", label: "Uluslararası Sıcaklık Ölçeği İzlenebilirliği" },
        ],

        areasTitle: "Çalışma Alanları",
        areas: [
            {
                icon: <RadioTower size={32} strokeWidth={1.5} />,
                title: "Radyasyon Sıcaklığı Ölçümleri",
                text: "Planck radyasyon kanununa dayanarak yüzeylerden yayılan termal ışımanın ölçülmesi ve kalibrasyonu.",
            },
            {
                icon: <Thermometer size={32} strokeWidth={1.5} />,
                title: "Yüksek Sıcaklık Kalibrasyonu",
                text: "Gümüş donma noktası (961,78 °C) ve üzerindeki sıcaklık aralıklarında ITS-90'a izlenebilir kalibrasyon hizmetleri.",
            },
            {
                icon: <Flame size={32} strokeWidth={1.5} />,
                title: "Endüstriyel Fırın Sıcaklıkları",
                text: "Metal işleme, cam ve çimento üretimi gibi yüksek sıcaklık endüstriyel süreçlerinde temaslı ve temassız sıcaklık ölçümleri.",
            },
            {
                icon: <Eye size={32} strokeWidth={1.5} />,
                title: "Termal Kamera Kalibrasyonu",
                text: "Medikal ve endüstriyel alanlarda kullanılan termal kameraların ve infrared termometrelerin izlenebilir kalibrasyonu.",
            },
            {
                icon: <Zap size={32} strokeWidth={1.5} />,
                title: "Kontak Sıcaklığı Ölçümleri",
                text: "Termoçiftler ve direnç termometrelerinin yüksek sıcaklık aralığında ITS-90'a izlenebilir SI birimi kalibrasyonu.",
            },
            {
                icon: <Microscope size={32} strokeWidth={1.5} />,
                title: "Yayılım Katsayısı Araştırması",
                text: "Malzemelerin spektral ve toplam yayılım katsayılarının deneysel olarak belirlenmesi ve bu değerlerin yüksek sıcaklık ölçümlerine etkisinin incelenmesi.",
            },
        ],

        instrumentsTitle: "Kullanılan Cihazlar ve Yöntemler",
        instrumentsIntro:
            "Laboratuvarda; infrared pirometerler, termal kameralar, optik pirometerler, termoçiftler ve sabit nokta hücreleri kullanılarak ITS-90'a izlenebilir kalibrasyon ve yüksek sıcaklık ölçümleri gerçekleştirilmektedir.",
        instruments: [
            {
                title: "İnfrared Pirometerler",
                text: "Yüzeylerden yayılan termal ışımayı ölçerek temassız sıcaklık tespiti sağlayan cihazlar. Geniş sıcaklık aralıklarında hassas kalibrasyon yapılmaktadır.",
            },
            {
                title: "Termal Kameralar",
                text: "İki boyutlu sıcaklık dağılımı görüntüleyen kameralar. Medikal, endüstriyel ve güvenlik alanlarında kullanılan cihazların izlenebilir kalibrasyonu yapılmaktadır.",
            },
            {
                title: "Sabit Nokta Hücreleri",
                text: "Gümüş (961,78 °C) ve diğer saf metal donma/erime noktaları kullanılarak ITS-90 ölçeğine birincil izlenebilirlik sağlayan referans sistemleri.",
            },
            {
                title: "Yüksek Sıcaklık Termoçiftleri",
                text: "1000 °C ve üzeri sıcaklıklarda kullanılan Type-S, Type-R ve Type-B termoçiftlerinin yüksek doğrulukla kalibrasyonu.",
            },
            {
                title: "Kara Cisim Kaynakları",
                text: "Yüksek yayılım katsayısına sahip, izlenebilir kalibrasyon çalışmalarında referans kaynak olarak kullanılan blackbody fırınları.",
            },
        ],

        uncertaintyTitle: "Ölçüm Belirsizlikleri",
        uncertaintyText:
            "Laboratuvarda gerçekleştirilen kalibrasyon ölçümlerinin genişletilmiş belirsizlikleri (k=2), ITS-90 referans ölçeğine izlenebilirlik çerçevesinde belirlenmiştir.",
        uncertaintyItems: [
            {
                range: "961,78 °C (Ag Donma Noktası)",
                value: "0,1 °C",
                level: "k=2 (yaklaşık %95 güven aralığı)",
            },
            {
                range: "1000 °C – 1500 °C",
                value: "0,3 °C",
                level: "k=2 (yaklaşık %95 güven aralığı)",
            },
            {
                range: "1500 °C – 2000 °C",
                value: "1,0 °C",
                level: "k=2 (yaklaşık %95 güven aralığı)",
            },
        ],

        calibrationsTitle: "Kalibrasyon Hizmetleri",
        calibrations: [
            {
                title: "İnfrared Pirometre Kalibrasyonu",
                text: "Endüstriyel ve medikal alanlarda kullanılan infrared pirometre ve sıcaklık ölçerlerinin ITS-90'a izlenebilir kalibrasyonu.",
            },
            {
                title: "Termal Kamera Kalibrasyonu",
                text: "İki boyutlu sıcaklık görüntüleme sistemlerinin, özellikle medikal ve endüstriyel termal kameraların izlenebilir kalibrasyonu.",
            },
            {
                title: "Yüksek Sıcaklık Termoçift Kalibrasyonu",
                text: "Type-S, R ve B termoçiftlerinin 961 °C ve üzeri sıcaklık aralıklarında birincil yöntemle kalibrasyonu.",
            },
            {
                title: "Sabit Nokta Kalibrasyonu",
                text: "Gümüş sabit noktası kullanılarak termoçift ve direnç termometrelerinin birincil kalibrasyon zincirinde belirlenmesi.",
            },
        ],

        servicesTitle: "Sunulan Hizmetler",
        services: [
            {
                icon: <ClipboardCheck size={32} strokeWidth={1.5} />,
                title: "İzlenebilir Kalibrasyon",
                text: "SI birimlerine ve ITS-90 ölçeğine izlenebilir radyasyon ve kontak sıcaklığı kalibrasyonu.",
            },
            {
                icon: <BarChart3 size={32} strokeWidth={1.5} />,
                title: "Ölçüm ve Test",
                text: "Endüstriyel fırınlar, medikal cihazlar ve araştırma sistemleri için yüksek sıcaklık ölçüm hizmetleri.",
            },
            {
                icon: <GraduationCap size={32} strokeWidth={1.5} />,
                title: "Eğitim ve Danışmanlık",
                text: "Radyasyon sıcaklığı ölçümü, yayılım katsayısı ve belirsizlik hesapları konularında teknik eğitim.",
            },
            {
                icon: <FlaskConical size={32} strokeWidth={1.5} />,
                title: "Ar-Ge Desteği",
                text: "Yüksek sıcaklık metrolojisi ve radyasyon termometresi teknolojisi alanındaki Ar-Ge projelerine destek.",
            },
            {
                icon: <FileText size={32} strokeWidth={1.5} />,
                title: "Teknik Danışmanlık",
                text: "Pirometre seçimi, kalibrasyon yöntemi belirleme ve ölçüm belirsizliği hesapları konularında uzman destek.",
            },
            {
                icon: <Globe size={32} strokeWidth={1.5} />,
                title: "Uluslararası Karşılaştırma",
                text: "Milli metroloji enstitüleri ile yüksek sıcaklık radyasyon termometresi karşılaştırma ölçümleri.",
            },
        ],

        sectorsTitle: "Hizmet Verdiği Sektörler",
        sectors: [
            "Metal İşleme ve Çelik Üretimi",
            "Cam ve Seramik Üretimi",
            "Çimento ve İnşaat Malzemeleri",
            "Kağıt ve Selüloz Endüstrisi",
            "Medikal Cihaz Üreticileri",
            "Havacılık ve Savunma",
            "Uzay Bilimleri",
            "Enerji ve Nükleer Sektör",
            "Gıda İşleme Endüstrisi",
            "Araştırma ve Üniversiteler",
        ],
        equipmentTableTitle: "Teknik Donanımlar ve Ekipmanlar",
        equipmentTable: [
            {
                no: "1",
                equipment: "Radyasyon Termometresi (Pirometre)",
                brand: "Land Instruments",
                model: "System 4 / Marathon MR",
                range: "600 °C – 3000 °C",
                purpose: "Birincil radyasyon sıcaklığı referans cihazı",
            },
            {
                no: "2",
                equipment: "Sabit Nokta Hücresi (Gümüş)",
                brand: "TuBiTak UME",
                model: "Ag-FP Hücresi",
                range: "961,78 °C",
                purpose: "ITS-90 birincil referans noktası",
            },
            {
                no: "3",
                equipment: "Kara Cisim Fırını (Yüksek Sıcaklık)",
                brand: "Fluke / Isothermal",
                model: "4181 / CS2000",
                range: "600 °C – 2000 °C",
                purpose: "Referans kaynaklı kalibrasyon orta mı",
            },
            {
                no: "4",
                equipment: "Termal Kamera",
                brand: "FLIR Systems",
                model: "A655sc / T1020",
                range: "-20 °C – 2000 °C",
                purpose: "2B sıcaklık dağılımı görüntüleme ve kalibrasyon",
            },
            {
                no: "5",
                equipment: "Type-S Termоçift (Referans)",
                brand: "Omega / Heraeus",
                model: "SPRR-250 / W-Re",
                range: "0 °C – 1600 °C",
                purpose: "Yüksek sıcaklık kontak ölçüm referansı",
            },
            {
                no: "6",
                equipment: "Sıcaklık Kontrolörü",
                brand: "Eurotherm / Yokogawa",
                model: "3508 / UT35A",
                range: "0 °C – 2000 °C",
                purpose: "Fırın sıcaklığı hassas kontrol ve regulas yon",
            },
            {
                no: "7",
                equipment: "Veri Toplama Sistemi (DAQ)",
                brand: "Agilent / Keysight",
                model: "34970A / 34980A",
                range: "Dijital / Analog çıkış",
                purpose: "Termoelektrik ve volt kayıtları otomatik veri alımı",
            },
        ],
    },

    en: {
        title: "Radiation Temperature Laboratory",
        heroText:
            "The Radiation Temperature Laboratory provides SI-traceable calibration infrastructure for high-temperature measurements. It ensures the traceability of radiation and contact temperature measurements at and above the silver freezing point (961.78 °C).",

        purposeTitle: "Purpose of the Laboratory",
        purposeText: [
            "The main purpose of the laboratory is the establishment, maintenance, and dissemination of the National Radiation Temperature Scale at the primary level. It also ensures the traceability of radiation and contact temperature measurements to SI units for temperatures above the silver freezing point of 961.78 °C.",
            "Radiation temperature is a temperature value obtained by measuring the thermal radiation (according to Planck's law) emitted from the surface of an object. Since radiation temperature measurements are performed remotely and without contact, they are of critical importance in many fields. Particularly in situations where high temperatures need to be measured and contact measurement is difficult or impossible, radiation temperature is extremely useful for measuring the temperature of moving objects.",
            "This method provides safe measurement in hazardous environments where direct contact is not possible, such as high-temperature furnaces, molten metals, motors or chemical reactions. In industrial applications, it is widely used in areas such as metalworking, glass production, and cement and paper production industries to optimize production processes and ensure quality control.",
            "It is widely used in the food industry due to being contactless and hygienic. Contactless human body temperature measurements became a focal point for all humanity, especially during the COVID-19 pandemic. As a result, forehead and skin thermometers (and thermal cameras) have become indispensable today for fast, personalized, and high-accuracy measurement of body temperature (fever) based on human body thermal radiation.",
        ],

        aboutTitle: "Radiation Temperature Metrology",
        aboutText:
            "Radiation temperature measurements play a critical role in many areas including industrial production, medicine, defense, space sciences, and meteorology. Performed within the framework of Planck's radiation law, these measurements offer the possibility of non-contact and remote temperature determination, making them an integral part of modern technology.",

        statsTitle: "Measurement Capabilities",
        stats: [
            { value: "961.78 °C", label: "Silver Freezing Point Reference" },
            { value: "> 1000 °C", label: "Upper Temperature Measurement Range" },
            { value: "0.1 °C", label: "Typical Measurement Uncertainty" },
            { value: "ITS-90", label: "International Temperature Scale Traceability" },
        ],

        areasTitle: "Research Areas",
        areas: [
            {
                icon: <RadioTower size={32} strokeWidth={1.5} />,
                title: "Radiation Temperature Measurements",
                text: "Measurement and calibration of thermal radiation emitted from surfaces based on Planck's radiation law.",
            },
            {
                icon: <Thermometer size={32} strokeWidth={1.5} />,
                title: "High Temperature Calibration",
                text: "Traceable calibration services to ITS-90 in temperature ranges at and above the silver freezing point (961.78 °C).",
            },
            {
                icon: <Flame size={32} strokeWidth={1.5} />,
                title: "Industrial Furnace Temperatures",
                text: "Contact and non-contact temperature measurements in high-temperature industrial processes such as metalworking, glass, and cement production.",
            },
            {
                icon: <Eye size={32} strokeWidth={1.5} />,
                title: "Thermal Camera Calibration",
                text: "Traceable calibration of thermal cameras and infrared thermometers used in medical and industrial applications.",
            },
            {
                icon: <Zap size={32} strokeWidth={1.5} />,
                title: "Contact Temperature Measurements",
                text: "Calibration of thermocouples and resistance thermometers to SI units traceable to ITS-90 in the high-temperature range.",
            },
            {
                icon: <Microscope size={32} strokeWidth={1.5} />,
                title: "Emissivity Research",
                text: "Experimental determination of spectral and total emissivity coefficients of materials and investigation of their effect on high-temperature measurements.",
            },
        ],

        instrumentsTitle: "Instruments and Methods",
        instrumentsIntro:
            "The laboratory performs ITS-90 traceable calibrations and high-temperature measurements using infrared pyrometers, thermal cameras, optical pyrometers, thermocouples, and fixed-point cells.",
        instruments: [
            {
                title: "Infrared Pyrometers",
                text: "Instruments providing non-contact temperature detection by measuring thermal radiation emitted from surfaces. Precise calibration is performed over wide temperature ranges.",
            },
            {
                title: "Thermal Cameras",
                text: "Cameras imaging two-dimensional temperature distribution. Traceable calibration is performed for devices used in medical, industrial, and security fields.",
            },
            {
                title: "Fixed-Point Cells",
                text: "Reference systems providing primary traceability to the ITS-90 scale using silver (961.78 °C) and other pure metal freezing/melting points.",
            },
            {
                title: "High-Temperature Thermocouples",
                text: "High-accuracy calibration of Type-S, Type-R, and Type-B thermocouples used at temperatures of 1000 °C and above.",
            },
            {
                title: "Blackbody Sources",
                text: "Blackbody furnaces with high emissivity coefficients used as reference sources in traceable calibration studies.",
            },
        ],

        uncertaintyTitle: "Measurement Uncertainties",
        uncertaintyText:
            "The expanded uncertainties (k=2) of calibration measurements performed in the laboratory are determined within the framework of traceability to the ITS-90 reference scale.",
        uncertaintyItems: [
            {
                range: "961.78 °C (Ag Freezing Point)",
                value: "0.1 °C",
                level: "k=2 (approx. 95% confidence interval)",
            },
            {
                range: "1000 °C – 1500 °C",
                value: "0.3 °C",
                level: "k=2 (approx. 95% confidence interval)",
            },
            {
                range: "1500 °C – 2000 °C",
                value: "1.0 °C",
                level: "k=2 (approx. 95% confidence interval)",
            },
        ],

        calibrationsTitle: "Calibration Services",
        calibrations: [
            {
                title: "Infrared Pyrometer Calibration",
                text: "Traceable calibration to ITS-90 of infrared pyrometers and temperature meters used in industrial and medical applications.",
            },
            {
                title: "Thermal Camera Calibration",
                text: "Traceable calibration of two-dimensional temperature imaging systems, particularly medical and industrial thermal cameras.",
            },
            {
                title: "High-Temperature Thermocouple Calibration",
                text: "Primary method calibration of Type-S, R, and B thermocouples in temperature ranges of 961 °C and above.",
            },
            {
                title: "Fixed-Point Calibration",
                text: "Determination of thermocouples and resistance thermometers in the primary calibration chain using the silver fixed point.",
            },
        ],

        servicesTitle: "Services Offered",
        services: [
            {
                icon: <ClipboardCheck size={32} strokeWidth={1.5} />,
                title: "Traceable Calibration",
                text: "Radiation and contact temperature calibration traceable to SI units and the ITS-90 scale.",
            },
            {
                icon: <BarChart3 size={32} strokeWidth={1.5} />,
                title: "Measurement and Testing",
                text: "High-temperature measurement services for industrial furnaces, medical devices, and research systems.",
            },
            {
                icon: <GraduationCap size={32} strokeWidth={1.5} />,
                title: "Training and Consultancy",
                text: "Technical training on radiation temperature measurement, emissivity coefficient, and uncertainty calculations.",
            },
            {
                icon: <FlaskConical size={32} strokeWidth={1.5} />,
                title: "R&D Support",
                text: "Support for R&D projects in the field of high-temperature metrology and radiation thermometer technology.",
            },
            {
                icon: <FileText size={32} strokeWidth={1.5} />,
                title: "Technical Consultancy",
                text: "Expert support on pyrometer selection, calibration method determination, and measurement uncertainty calculations.",
            },
            {
                icon: <Globe size={32} strokeWidth={1.5} />,
                title: "International Comparison",
                text: "Comparison measurements of high-temperature radiation thermometers with national metrology institutes.",
            },
        ],

        sectorsTitle: "Sectors Served",
        sectors: [
            "Metalworking and Steel Production",
            "Glass and Ceramics Manufacturing",
            "Cement and Construction Materials",
            "Paper and Pulp Industry",
            "Medical Device Manufacturers",
            "Aerospace and Defense",
            "Space Sciences",
            "Energy and Nuclear Sector",
            "Food Processing Industry",
            "Research and Universities",
        ],
        equipmentTableTitle: "Technical Equipment",
        equipmentTable: [
            {
                no: "1",
                equipment: "Radiation Thermometer (Pyrometer)",
                brand: "Land Instruments",
                model: "System 4 / Marathon MR",
                range: "600 °C – 3000 °C",
                purpose: "Primary radiation temperature reference instrument",
            },
            {
                no: "2",
                equipment: "Fixed-Point Cell (Silver)",
                brand: "TuBiTak UME",
                model: "Ag-FP Cell",
                range: "961.78 °C",
                purpose: "ITS-90 primary reference fixed point",
            },
            {
                no: "3",
                equipment: "High-Temperature Blackbody Furnace",
                brand: "Fluke / Isothermal",
                model: "4181 / CS2000",
                range: "600 °C – 2000 °C",
                purpose: "Reference source calibration environment",
            },
            {
                no: "4",
                equipment: "Thermal Camera",
                brand: "FLIR Systems",
                model: "A655sc / T1020",
                range: "-20 °C – 2000 °C",
                purpose: "2D temperature distribution imaging and calibration",
            },
            {
                no: "5",
                equipment: "Type-S Thermocouple (Reference)",
                brand: "Omega / Heraeus",
                model: "SPRR-250 / W-Re",
                range: "0 °C – 1600 °C",
                purpose: "High-temperature contact measurement reference",
            },
            {
                no: "6",
                equipment: "Temperature Controller",
                brand: "Eurotherm / Yokogawa",
                model: "3508 / UT35A",
                range: "0 °C – 2000 °C",
                purpose: "Precise furnace temperature control and regulation",
            },
            {
                no: "7",
                equipment: "Data Acquisition System (DAQ)",
                brand: "Agilent / Keysight",
                model: "34970A / 34980A",
                range: "Digital / Analog output",
                purpose: "Automatic thermoelectric and voltage data recording",
            },
        ],
    },
};
