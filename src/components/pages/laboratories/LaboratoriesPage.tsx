import { Locale } from "@/types/locale";
import { laboratoriesData } from "@/data/laboratories";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import styles from "./LaboratoriesStyles.module.css";

type LaboratoriesPageProps = {
    locale: Locale;
};

export default function LaboratoriesPage({ locale }: LaboratoriesPageProps) {
    return (
        <>
            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.overlay} />
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>TDML</span>
                    <h1>{locale === "tr" ? "Laboratuvarlarımız" : "Our Laboratories"}</h1>
                    <p>
                        {locale === "tr"
                            ? "SI birimlerine izlenebilir ölçüm ve kalibrasyon hizmetleri sunan gelişmiş laboratuvar altyapımız."
                            : "Our advanced laboratory infrastructure offering measurement and calibration services traceable to SI units."}
                    </p>
                </div>
            </section>

            {/* STATS STRIP */}
            <div className={styles.statsStrip}>
                <div className={styles.statsInner}>
                    <strong>{laboratoriesData.length}</strong>
                    {locale === "tr" ? "laboratuvar hizmetinizde" : "laboratories at your service"}
                </div>
            </div>

            {/* LAB CARDS */}
            <main className={styles.labsWrapper}>
                <div className={styles.labsGrid}>
                    {laboratoriesData.map((lab) =>
                        lab.active ? (
                            <Link
                                key={lab.slug}
                                href={lab.href[locale]}
                                className={`${styles.labCard} ${styles.labCardActive}`}
                            >
                                <div className={styles.labCardIcon}>{lab.icon}</div>
                                <div className={styles.labCardBody}>
                                    <h3 className={styles.labCardTitle}>{lab.title[locale]}</h3>
                                    <p className={styles.labCardDesc}>{lab.description[locale]}</p>
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
                                    <h3 className={styles.labCardTitle}>{lab.title[locale]}</h3>
                                    <p className={styles.labCardDesc}>{lab.description[locale]}</p>
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
            </main>
        </>
    );
}
