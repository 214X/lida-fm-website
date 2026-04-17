import { Droplets, Thermometer, Wind, RadioTower, Layers } from "lucide-react";
import { GiLaserPrecision } from "react-icons/gi";
import { ReactNode } from "react";
import { routes } from "@/lib/routes";

export type Laboratory = {
    slug: string;
    icon: ReactNode;
    title: {
        tr: string;
        en: string;
    };
    description: {
        tr: string;
        en: string;
    };
    href: {
        tr: string;
        en: string;
    };
    active: boolean;
};

export const laboratoriesData: Laboratory[] = [
    {
        slug: "lazer-metrology",
        icon: <GiLaserPrecision size={36} />,
        title: {
            tr: "Lazer Metroloji Laboratuvarı",
            en: "Laser Metrology Laboratory",
        },
        description: {
            tr: "Optik bileşenlerin soğurma, saçılma ve lazer hasar eşiği gibi parametrelerini yüksek hassasiyet ve tekrarlanabilirlikle test eden altyapı.",
            en: "Infrastructure for testing parameters such as absorption, scattering, and laser damage threshold of optical components with high sensitivity.",
        },
        href: routes.lazerMetrologyLab,
        active: true,
    },
    {
        slug: "humidity",
        icon: <Droplets size={36} strokeWidth={1.5} />,
        title: {
            tr: "Nem Laboratuvarı",
            en: "Humidity Laboratory",
        },
        description: {
            tr: "Bağıl nem, çiy noktası ve mutlak nem ölçümlerinde SI birimlerine izlenebilir kalibrasyon hizmetleri.",
            en: "Traceable calibration services in relative humidity, dew point, and absolute humidity measurements to SI units.",
        },
        href: routes.humidityLab,
        active: true,
    },
    {
        slug: "radiation-temperature",
        icon: <RadioTower size={36} strokeWidth={1.5} />,
        title: {
            tr: "Radyasyon Sıcaklığı Laboratuvarı",
            en: "Radiation Temperature Laboratory",
        },
        description: {
            tr: "Yüksek sıcaklık ölçümlerinde ITS-90'a izlenebilir kalibrasyon. Gümüş donma noktası ve üzerindeki sıcaklıklarda radyasyon ve kontak sıcaklığı ölçümleri.",
            en: "Traceable calibration to ITS-90 for high-temperature measurements, including radiation and contact temperature above the silver freezing point.",
        },
        href: routes.radiationTemperatureLab,
        active: true,
    },
    {
        slug: "thermophysical",
        icon: <Layers size={36} strokeWidth={1.5} />,
        title: {
            tr: "Termofiziksel Özellikler Laboratuvarı",
            en: "Thermophysical Properties Laboratory",
        },
        description: {
            tr: "Isıl iletkenlik, özısı, ısıl yayılım ve emisivite ölçümlerinde BIPM izlenebilirliğiyle yüksek doğruluklu kalibrasyon hizmetleri.",
            en: "High-accuracy calibration services with BIPM traceability in thermal conductivity, specific heat, thermal diffusivity, and emissivity measurements.",
        },
        href: routes.thermophysicalLab,
        active: true,
    },
];
