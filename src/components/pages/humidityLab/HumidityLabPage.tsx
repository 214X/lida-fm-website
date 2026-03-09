import { Locale } from "@/types/locale";
import { HumidityLabContent } from "./humidityLabContent";
import styles from "./humidityLabStyles.module.css";

type Props = {
    locale: Locale;
};

export default function HumidityLabPage({ locale }: Props) {
    const c = HumidityLabContent[locale];

    return (
        <>
            {/* ─── HERO ─── */}
            <section className={styles.hero}>
                <div className={styles.overlay} />
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>
                        {/* {locale === "tr" ? "Nem Laboratuvarı" : "Humidity Laboratory"} */}
                        TDML
                    </span>
                    <h1>{c.title}</h1>
                    <p>{c.heroText}</p>
                </div>
            </section>

            {/* ─── STATS STRIP ─── */}
            <div className={styles.statsStrip}>
                <div className={styles.statsGrid}>
                    {c.stats.map((s, i) => (
                        <div key={i} className={styles.statItem}>
                            <span className={styles.statValue}>{s.value}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── PURPOSE ─── */}
            <section className={styles.sectionWhite}>
                <div className={styles.container}>
                    <p className={styles.sectionLabel}>{locale === "tr" ? "Genel Bilgi" : "Overview"}</p>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleUnderline}>{c.purposeTitle}</span>
                    </h2>
                    <div className={styles.purposeColumn}>
                        {c.purposeText.map((para, i) => (
                            <p key={i} className={styles.purposeParagraph}>{para}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── WORK AREAS ─── */}
            <section className={styles.sectionGrey}>
                <div className={styles.container}>
                    <p className={styles.sectionLabel}>{locale === "tr" ? "Araştırma" : "Research"}</p>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleUnderline}>{c.areasTitle}</span>
                    </h2>
                    <div className={styles.areasGrid}>
                        {c.areas.map((item, i) => (
                            <div key={i} className={styles.areaCard}>
                                <span className={styles.areaIcon}>{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── INSTRUMENTS ─── */}
            <section className={styles.sectionWhite}>
                <div className={styles.container}>
                    <p className={styles.sectionLabel}>{locale === "tr" ? "Ekipman" : "Equipment"}</p>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleUnderline}>{c.instrumentsTitle}</span>
                    </h2>
                    <p className={styles.instrumentsIntro}>{c.instrumentsIntro}</p>
                    <div className={styles.instrumentsList}>
                        {c.instruments.map((item, i) => (
                            <div key={i} className={styles.instrumentItem}>
                                <span className={styles.instrumentNum}>{i + 1}</span>
                                <div className={styles.instrumentBody}>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── UNCERTAINTY ─── */}
            <section className={styles.sectionGrey}>
                <div className={styles.container}>
                    <p className={styles.sectionLabel}>{locale === "tr" ? "Doğruluk" : "Accuracy"}</p>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleUnderline}>{c.uncertaintyTitle}</span>
                    </h2>
                    <p className={styles.uncertaintyText}>{c.uncertaintyText}</p>
                    <table className={styles.uncertaintyTable}>
                        <thead>
                            <tr>
                                <th>{locale === "tr" ? "Sıcaklık Aralığı" : "Temperature Range"}</th>
                                <th>{locale === "tr" ? "Genişletilmiş Belirsizlik (U)" : "Expanded Uncertainty (U)"}</th>
                                <th>{locale === "tr" ? "Güven Düzeyi" : "Confidence Level"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {c.uncertaintyItems.map((row, i) => (
                                <tr key={i}>
                                    <td><strong>{row.range}</strong></td>
                                    <td>{row.value}</td>
                                    <td>{row.level}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className={styles.uncertaintyNote}>
                        {locale === "tr"
                            ? "* Belirsizlik değerleri k=2 genişletme faktörü kullanılarak hesaplanmıştır ve yaklaşık %95 güven aralığına karşılık gelmektedir."
                            : "* Uncertainty values are calculated using a coverage factor k=2 and correspond to an approximately 95% confidence interval."}
                    </p>
                </div>
            </section>

            {/* ─── CALIBRATIONS ─── */}
            <section className={styles.sectionWhite}>
                <div className={styles.container}>
                    <p className={styles.sectionLabelLight}>{locale === "tr" ? "Kalibrasyon" : "Calibration"}</p>
                    <h2 className={styles.sectionTitleLight}>
                        <span className={styles.titleUnderlineLight}>{c.calibrationsTitle}</span>
                    </h2>
                    <div className={styles.calibrationsGrid}>
                        {c.calibrations.map((item, i) => (
                            <div key={i} className={styles.calibrationCard}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SERVICES ─── */}
            <section className={styles.sectionGrey}>
                <div className={styles.container}>
                    <p className={styles.sectionLabel}>{locale === "tr" ? "Hizmetler" : "Services"}</p>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleUnderline}>{c.servicesTitle}</span>
                    </h2>
                    <div className={styles.servicesGrid}>
                        {c.services.map((item, i) => (
                            <div key={i} className={styles.serviceCard}>
                                <span className={styles.serviceIcon}>{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SECTORS ─── */}
            <section className={styles.sectionRed}>
                <div className={styles.container}>
                    <p className={styles.sectionLabelLight}>{locale === "tr" ? "Uygulama Alanları" : "Application Areas"}</p>
                    <h2 className={styles.sectionTitleLight}>
                        <span className={styles.titleUnderlineLight}>{c.sectorsTitle}</span>
                    </h2>
                    <p className={styles.sectionTextLight}>
                        {locale === "tr"
                            ? "Nem Laboratuvarı, aşağıdaki sektörlerdeki kurum ve kuruluşlara kalibrasyon, ölçüm ve danışmanlık hizmetleri sunmaktadır."
                            : "The Humidity Laboratory provides calibration, measurement and consultancy services to institutions and organizations in the following sectors."}
                    </p>
                    <div className={styles.sectorsCloud}>
                        {c.sectors.map((sector, i) => (
                            <span key={i} className={styles.sectorTag}>{sector}</span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}