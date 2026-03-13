import { Locale } from "@/types/locale";
import { AboutContent } from "./aboutContent";
import styles from "./AboutStyles.module.css";

type AboutPageProps = {
    locale: Locale;
};

export default function AboutPage({ locale }: AboutPageProps) {
    const c = AboutContent[locale];

    return (
        <>
            {/* ─── HERO ─── */}
            <section className={styles.hero}>
                <div className={styles.overlay} />
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>{c.badge}</span>
                    <h1>{c.title}</h1>
                    <p>{c.heroText}</p>
                </div>
            </section>

            {/* ─── MAIN CONTENT ─── */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>

                        {/* LEFT – Main Content Sections */}
                        <div className={styles.contentColumn}>
                            {c.mainSections.map((section, idx) => (
                                <div key={idx} className={styles.textSection}>
                                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                                    {section.content.map((paragraph, pIdx) => (
                                        <p key={pIdx} className={styles.sectionParagraph}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
