import { Locale } from "@/types/locale";
import { AboutContent } from "./aboutContent";
import styles from "./AboutStyles.module.css";

type AboutPageProps = {
    locale: Locale;
};

export default function AboutPage({ locale }: AboutPageProps) {
    const content = AboutContent[locale];

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.overlay} />

                <div className={styles.heroContent}>
                    <h1>{content.title}</h1>
                </div>
            </section>

            <section className={styles.content}>
                <h2>Devam Eden İçerik</h2>
                <p>
                    Buradan sonra normal sayfa akışı devam eder.
                </p>
            </section>
        </>
    );
}
