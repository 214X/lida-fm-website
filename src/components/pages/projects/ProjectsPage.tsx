import { Locale } from "@/types/locale";
import { ProjectsContent } from "./projectsContent";
import styles from "./ProjectsStyles.module.css";

type ProjectsPageProps = {
    locale: Locale;
};

export default function ProjectsPage({ locale }: ProjectsPageProps) {
    const content = ProjectsContent[locale];

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