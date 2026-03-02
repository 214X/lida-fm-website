import { Locale } from "@/types/locale";
import { ContactContent } from "./contactContent";
import styles from "./contactPage.module.css";

type ContactPageProps = {
    locale: Locale;
};

export default function ContactPage({ locale }: ContactPageProps) {
    const content = ContactContent[locale];

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