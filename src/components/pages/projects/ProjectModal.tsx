"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import type { Locale } from "@/types/locale";
import type { Project } from "@/data/projects";
import styles from "./ProjectsStyles.module.css";

type ProjectModalProps = {
  project: Project;
  locale: Locale;
  onClose: () => void;
};

export default function ProjectModal({ project, locale, onClose }: ProjectModalProps) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const progress = el.scrollTop / (el.scrollHeight - el.clientHeight);
    setScrollProgress(Math.min(100, Math.round(progress * 100)));
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "f" || e.key === "F") setIsFullscreen((v) => !v);
      if (e.key === "ArrowLeft") setGalleryIndex((p) => Math.max(0, p - 1));
      if (e.key === "ArrowRight")
        setGalleryIndex((p) => Math.min(project.images.length - 1, p + 1));
    },
    [onClose, project.images.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const hasImages = project.images.length > 0;

  return (
    <div
      className={`${styles.modalBackdrop} ${isFullscreen ? styles.modalBackdropFullscreen : ""}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={project.title[locale]}
    >
      <div className={`${styles.modalPanel} ${isFullscreen ? styles.modalPanelFullscreen : ""}`}>
        {/* Fullscreen toggle — hidden on mobile */}
        <button
          className={styles.modalFullscreenBtn}
          onClick={() => setIsFullscreen((v) => !v)}
          aria-label={isFullscreen
            ? (locale === "tr" ? "Tam ekrandan çık" : "Exit fullscreen")
            : (locale === "tr" ? "Tam ekran" : "Fullscreen")}
          title={isFullscreen ? "Exit fullscreen (F)" : "Fullscreen (F)"}
          type="button"
        >
          {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
        </button>

        {/* Close button */}
        <button
          className={styles.modalClose}
          onClick={onClose}
          aria-label={locale === "tr" ? "Kapat" : "Close"}
          type="button"
        >
          <X size={20} />
        </button>

        {/* Scroll progress bar */}
        <div className={styles.progressTrack}>
          <div
            className={styles.progressBar}
            style={{ width: `${scrollProgress}%` }}
            role="progressbar"
            aria-valuenow={scrollProgress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>

        <div className={styles.modalScroll} ref={scrollRef} onScroll={handleScroll}>
          {/* HERO — gradient only, no image */}
          <div className={styles.modalHeroImage}>
            <div className={styles.modalHeroGradient} />
            <div className={styles.modalHeroContent}>
              <span className={styles.modalHeroBadge}>TDML</span>
              <h2 className={styles.modalHeroTitle}>{project.title[locale]}</h2>
              <p className={styles.modalHeroSummary}>{project.summary[locale]}</p>
            </div>
          </div>

          {/* CONTENT */}
          <div className={styles.modalContent}>
            {/* Tags */}
            {/* <div className={styles.modalTags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.modalTag}>
                  {tag}
                </span>
              ))}
            </div> */}


            {/* Description */}
            <div className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>
                {locale === "tr" ? "Proje Açıklaması" : "Project Description"}
              </h3>
              {project.description[locale].map((p, i) => (
                <p key={i} className={styles.modalText}>{p}</p>
              ))}
            </div>

            {/* Purpose */}
            <div className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>
                {locale === "tr" ? "Amaç ve Hedefler" : "Purpose & Goals"}
              </h3>
              <p className={styles.modalText}>{project.purpose[locale]}</p>
            </div>

            {/* Stages */}
            <div className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>
                {locale === "tr" ? "Deneysel Aşamalar" : "Experimental Stages"}
              </h3>
              <ol className={styles.modalStages}>
                {project.stages[locale].map((stage, i) => (
                  <li key={i}>{stage}</li>
                ))}
              </ol>
            </div>

            {/* Technologies */}
            {/* <div className={styles.modalSection}>
              <h3 className={styles.modalSectionTitle}>
                {locale === "tr" ? "Teknolojiler" : "Technologies"}
              </h3>
              <div className={styles.modalTechGrid}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.modalTechItem}>
                    {tag}
                  </span>
                ))}
              </div>
            </div> */}

            {/* IMAGE GALLERY */}
            {hasImages && project.images.length > 1 && (
              <div className={styles.modalSection}>
                <h3 className={styles.modalSectionTitle}>
                  {locale === "tr" ? "Proje Görselleri" : "Project Gallery"}
                </h3>

                <div className={styles.gallery}>
                  <div className={styles.galleryMain}>
                    <Image
                      src={project.images[galleryIndex].src}
                      alt={project.images[galleryIndex].alt[locale]}
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      className={styles.galleryImage}
                    />

                    {/* Navigation arrows */}
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

                  {/* Caption */}
                  <p className={styles.galleryCaption}>
                    {project.images[galleryIndex].alt[locale]}
                  </p>

                  {/* Thumbnails */}
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
      </div>
    </div>
  );
}
