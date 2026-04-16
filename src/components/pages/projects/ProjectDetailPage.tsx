"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import type { Locale } from "@/types/locale";
import type { Project } from "@/data/projects";
import styles from "./ProjectsStyles.module.css";

type ProjectDetailPageProps = {
  project: Project;
  locale: Locale;
};

export default function ProjectDetailPage({ project, locale }: ProjectDetailPageProps) {
  const [galleryIndex, setGalleryIndex] = useState(0);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setGalleryIndex((p) => Math.max(0, p - 1));
    if (e.key === "ArrowRight")
      setGalleryIndex((p) => Math.min(project.images.length - 1, p + 1));
  }, [project.images.length]);

  const hasImages = project.images.length > 0;
  const backHref = locale === "tr" ? "/projeler" : "/en/projects";
  const backLabel = locale === "tr" ? "Projelere Dön" : "Back to Projects";

  return (
    <div className={styles.detailPage} onKeyDown={handleKeyDown} tabIndex={-1}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>TDML</span>
          <h1>{project.title[locale]}</h1>
          <p>{project.summary[locale]}</p>
        </div>
      </section>

      {/* BACK LINK */}
      <div className={styles.detailBackBar}>
        <div className={styles.detailBackInner}>
          <Link href={backHref} className={styles.detailBackBtn}>
            <ArrowLeft size={16} strokeWidth={2} />
            {backLabel}
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className={styles.detailContainer}>
        {/* Description */}
        <div className={styles.modalSection}>
          <h2 className={styles.modalSectionTitle}>
            {locale === "tr" ? "Proje Açıklaması" : "Project Description"}
          </h2>
          {project.description[locale].map((p, i) => (
            <p key={i} className={styles.modalText}>{p}</p>
          ))}
        </div>

        {/* Purpose */}
        <div className={styles.modalSection}>
          <h2 className={styles.modalSectionTitle}>
            {locale === "tr" ? "Amaç ve Hedefler" : "Purpose & Goals"}
          </h2>
          <p className={styles.modalText}>{project.purpose[locale]}</p>
        </div>

        {/* Stages */}
        <div className={styles.modalSection}>
          <h2 className={styles.modalSectionTitle}>
            {locale === "tr" ? "Deneysel Aşamalar" : "Experimental Stages"}
          </h2>
          <ol className={styles.modalStages}>
            {project.stages[locale].map((stage, i) => (
              <li key={i}>{stage}</li>
            ))}
          </ol>
        </div>

        {/* IMAGE GALLERY */}
        {hasImages && project.images.length > 1 && (
          <div className={styles.modalSection}>
            <h2 className={styles.modalSectionTitle}>
              {locale === "tr" ? "Proje Görselleri" : "Project Gallery"}
            </h2>

            <div className={styles.gallery}>
              <div className={styles.galleryMain}>
                <Image
                  src={project.images[galleryIndex].src}
                  alt={project.images[galleryIndex].alt[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, 1180px"
                  className={styles.galleryImage}
                />

                {galleryIndex > 0 && (
                  <button
                    className={`${styles.galleryNav} ${styles.galleryNavLeft}`}
                    onClick={() => setGalleryIndex((p) => p - 1)}
                    aria-label="Previous image"
                    type="button"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}
                {galleryIndex < project.images.length - 1 && (
                  <button
                    className={`${styles.galleryNav} ${styles.galleryNavRight}`}
                    onClick={() => setGalleryIndex((p) => p + 1)}
                    aria-label="Next image"
                    type="button"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>

              <p className={styles.galleryCaption}>
                {project.images[galleryIndex].alt[locale]}
              </p>

              <div className={styles.galleryThumbs}>
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb} ${i === galleryIndex ? styles.thumbActive : ""}`}
                    onClick={() => setGalleryIndex(i)}
                    aria-label={`Image ${i + 1}`}
                    type="button"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt[locale]}
                      fill
                      sizes="80px"
                      className={styles.thumbImg}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
