import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/types/locale";
import type { Project } from "@/data/projects";
import styles from "./ProjectsStyles.module.css";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
};

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  const isPlaceholder = project.id === "placeholder";
  const href = locale === "tr"
    ? `/projeler/${project.id}`
    : `/en/projects/${project.id}`;

  const cardContent = (
    <>
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
    </>
  );

  // Placeholder cards are not clickable
  if (isPlaceholder) {
    return (
      <div className={`${styles.card} ${styles.cardDisabled}`} aria-disabled="true">
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={styles.card}
      aria-label={`${locale === "tr" ? "Projeyi görüntüle" : "View project"}: ${project.title[locale]}`}
    >
      {cardContent}
    </Link>
  );
}
