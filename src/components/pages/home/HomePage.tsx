import { Locale } from "@/types/locale";
import { homeContent } from "./homeContent";
import styles from "./HomePage.module.css";

type HomePageProps = {
    locale: Locale;
};

export default function HomePage({ locale }: HomePageProps) {
    const content = homeContent[locale];

    return (
        <>
        <section className={styles.hero}>
            <div className={styles.overlay} />

            <div className={styles.heroContent}>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
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