import Image from "next/image";
import type { Locale } from "@/types/locale";
import type { Project } from "@/data/projects";
import styles from "./ProjectsStyles.module.css";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  onOpen: () => void;
};

export default function ProjectCard({ project, locale, onOpen }: ProjectCardProps) {
  const isPlaceholder = project.id === "placeholder";

  return (
    <button
      className={styles.card}
      onClick={onOpen}
      aria-label={`${locale === "tr" ? "Projeyi aç" : "Open project"}: ${project.title[locale]}`}
      type="button"
    >
      <div className={styles.cardImageWrapper}>
        <Image
          src={project.coverImage}
          alt={project.title[locale]}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.cardImage}
        />
        <div className={styles.cardImageOverlay} />

        {isPlaceholder && (
          <span className={styles.comingSoonBadge}>
            {locale === "tr" ? "Yakında" : "Coming Soon"}
          </span>
        )}
      </div>

      <div className={styles.cardBody}>
        {/* <div className={styles.cardTags}>
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div> */}

        <h3 className={styles.cardTitle}>{project.title[locale]}</h3>
        <p className={styles.cardSummary}>{project.summary[locale]}</p>

        <span className={styles.cardCta}>
          {locale === "tr" ? "Detayları Gör" : "View Details"}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </button>
  );
}
