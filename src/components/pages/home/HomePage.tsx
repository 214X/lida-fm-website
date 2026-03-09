import { Locale } from "@/types/locale";
import { homeContent } from "./homeContent";
import { ReactNode } from "react";
import Link from "next/link";
import { FiUsers, FiMail, FiBookOpen } from "react-icons/fi";
import { Droplets, Thermometer, Wind, ArrowRight, Lock } from "lucide-react";
import styles from "./HomePage.module.css";
import { routes } from "@/lib/routes";

type HomePageProps = {
    locale: Locale;
};

type HeroButtonProps = {
    name: string;
    icon?: ReactNode;
    href: string;
};

function HeroButton({ name, icon, href }: HeroButtonProps) {
    return (
        <Link href={href} className={styles.heroButtonContainer}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span>{name}</span>
        </Link>
    );
}

export default function HomePage({ locale }: HomePageProps) {
    const content = homeContent[locale];

    const labs = [
        {
            icon: <Droplets size={36} strokeWidth={1.5} />,
            slug: "humidity",
            title: locale === "tr" ? "Nem Laboratuvarı" : "Humidity Laboratory",
            description:
                locale === "tr"
                    ? "Bağıl nem, çiy noktası ve mutlak nem ölçümlerinde SI birimlerine izlenebilir kalibrasyon hizmetleri."
                    : "Traceable calibration services in relative humidity, dew point, and absolute humidity measurements to SI units.",
            href: routes.humidityLab[locale],
            active: true,
        },
        {
            icon: <Thermometer size={36} strokeWidth={1.5} />,
            slug: "temperature",
            title: locale === "tr" ? "Sıcaklık Laboratuvarı" : "Temperature Laboratory",
            description:
                locale === "tr"
                    ? "ITS-90 uluslararası sıcaklık ölçeğine göre izlenebilir sıcaklık ölçüm ve kalibrasyon çalışmaları."
                    : "Traceable temperature measurement and calibration studies according to the ITS-90 international temperature scale.",
            href: "#",
            active: false,
        },
        {
            icon: <Wind size={36} strokeWidth={1.5} />,
            slug: "pressure",
            title: locale === "tr" ? "Basınç Laboratuvarı" : "Pressure Laboratory",
            description:
                locale === "tr"
                    ? "Gaz ve sıvı basıncı ölçümlerinde uluslararası geçerliliğe sahip kalibrasyon altyapısı."
                    : "Internationally recognized calibration infrastructure for gas and liquid pressure measurements.",
            href: "#",
            active: false,
        },
    ];

    return (
        <>
            <section className={styles.hero}>
                {/* Background Video */}
                <video autoPlay muted loop playsInline className={styles.video}>
                    <source src="/videos/home/home-hero-background.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className={styles.overlay} />

                {/* Content */}
                <div className={styles.heroWrapper}>
                    <div className={styles.buttonsContainer}>
                        <HeroButton
                            name={locale === "tr" ? "Hakkımızda" : "About us"}
                            icon={<FiUsers />}
                            href={routes.aboutUs[locale]}
                        />
                        <div className={styles.buttonSeperatorLine}></div>
                        <HeroButton
                            name={locale === "tr" ? "Yayınlarımız" : "Our publications"}
                            icon={<FiBookOpen />}
                            href={routes.publications[locale]}
                        />
                        <div className={styles.buttonSeperatorLine}></div>
                        <HeroButton
                            name={locale === "tr" ? "İletişim" : "Contact"}
                            icon={<FiMail />}
                            href={routes.contact[locale]}
                        />
                    </div>

                    <div className={styles.heroContent}>
                        <h1 className={styles.abbreviation}>{content.abbreviation}</h1>
                        <h1 className={styles.name}>{content.name}</h1>
                        <p>{content.description}</p>
                    </div>
                </div>
            </section>

            {/* ─── LABORATORIES SECTION ─── */}
            <section className={styles.labsSection}>
                <div className={styles.labsContainer}>
                    <div className={styles.labsHeader}>
                        <p className={styles.labsEyebrow}>
                            {locale === "tr" ? "Altyapımız" : "Our Infrastructure"}
                        </p>
                        <h2 className={styles.labsTitle}>
                            {locale === "tr" ? "Laboratuvarlarımız" : "Our Laboratories"}
                        </h2>
                        <p className={styles.labsSubtitle}>
                            {locale === "tr"
                                ? "SI birimlerine izlenebilir ölçüm ve kalibrasyon hizmetleri sunan laboratuvarlarımızı keşfedin."
                                : "Discover our laboratories offering measurement and calibration services traceable to SI units."}
                        </p>
                    </div>

                    <div className={styles.labsGrid}>
                        {labs.map((lab) =>
                            lab.active ? (
                                <Link
                                    key={lab.slug}
                                    href={lab.href}
                                    className={`${styles.labCard} ${styles.labCardActive}`}
                                >
                                    <div className={styles.labCardIcon}>{lab.icon}</div>
                                    <div className={styles.labCardBody}>
                                        <h3 className={styles.labCardTitle}>{lab.title}</h3>
                                        <p className={styles.labCardDesc}>{lab.description}</p>
                                    </div>
                                    <div className={styles.labCardFooter}>
                                        <span className={styles.labCardCta}>
                                            {locale === "tr" ? "Keşfet" : "Explore"}
                                        </span>
                                        <ArrowRight size={16} />
                                    </div>
                                </Link>
                            ) : (
                                <div
                                    key={lab.slug}
                                    className={`${styles.labCard} ${styles.labCardInactive}`}
                                >
                                    <div className={styles.labCardIcon}>{lab.icon}</div>
                                    <div className={styles.labCardBody}>
                                        <h3 className={styles.labCardTitle}>{lab.title}</h3>
                                        <p className={styles.labCardDesc}>{lab.description}</p>
                                    </div>
                                    <div className={styles.labCardFooter}>
                                        <span className={styles.labCardComingSoon}>
                                            <Lock size={13} />
                                            {locale === "tr" ? "Yakında" : "Coming Soon"}
                                        </span>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}