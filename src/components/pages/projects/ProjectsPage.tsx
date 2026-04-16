import { Locale } from "@/types/locale";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsStyles.module.css";

type ProjectsPageProps = {
    locale: Locale;
};

export default function ProjectsPage({ locale }: ProjectsPageProps) {
    return (
        <>
        {/* HERO */}
        <section className={styles.hero}>
            <div className={styles.overlay} />
            <div className={styles.heroContent}>
            <span className={styles.heroBadge}>TDML</span>
            <h1>{locale === "tr" ? "Projeler" : "Projects"}</h1>
            <p>
                {locale === "tr"
                ? "Termodinamik ve Dinamik Metroloji Laboratuvarları'nın yürüttüğü araştırma projeleri."
                : "Research projects conducted by the Thermodynamic and Dynamic Metrology Laboratories."}
            </p>
            </div>
        </section>

        {/* STATS STRIP */}
        <div className={styles.statsStrip}>
            <div className={styles.statsInner}>
            <strong>{projectsData.length}</strong>
            {locale === "tr" ? "proje listelendi" : "projects listed"}
            </div>
        </div>

        {/* PROJECT CARDS */}
        <main className={styles.projectsWrapper}>
            <div className={styles.projectsGrid}>
            {projectsData.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    locale={locale}
                />
            ))}
            </div>
        </main>
        </>
    );
}