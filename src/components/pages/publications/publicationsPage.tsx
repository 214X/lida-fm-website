"use client";

import { useState, useRef, useEffect } from "react";
import { Locale } from "@/types/locale";
import { publicationsContent } from "./publicationsContent";
import styles from "./PublicationsStyles.module.css";
import PublicationCard from "./components/publication";
import { publicationsData, Publication, LabKey } from "@/data/publications";

const LAB_NAMES: Record<LabKey, Record<Locale, string>> = {
  lazer: { tr: "Lazer Metroloji Laboratuvarı", en: "Laser Metrology Laboratory" },
  humidity: { tr: "Nem Laboratuvarı", en: "Humidity Laboratory" },
  radiation: { tr: "Radyasyon Sıcaklığı Laboratuvarı", en: "Radiation Temperature Laboratory" },
  thermophysical: { tr: "Termofiziksel Özellikler Laboratuvarı", en: "Thermophysical Properties Laboratory" }
};

type PublicationsPageProps = {
  locale: Locale;
};

export default function PublicationsPage({ locale }: PublicationsPageProps) {
  const content = publicationsContent[locale];
  const [activeTab, setActiveTab] = useState<LabKey | "all">("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Group by lab
  const groupedPubs: Partial<Record<LabKey, Publication[]>> = {};
  publicationsData.forEach(pub => {
    const key = pub.labKey || "lazer";
    if (!groupedPubs[key]) groupedPubs[key] = [];
    groupedPubs[key].push(pub);
  });

  const sortedKeys: LabKey[] = ["lazer", "humidity", "radiation", "thermophysical"];

  const displayedCount = activeTab === "all"
    ? publicationsData.length
    : (groupedPubs[activeTab]?.length || 0);

  const allOptions: { value: LabKey | "all"; label: string }[] = [
    { value: "all", label: locale === "tr" ? "Tüm Yayınlar" : "All Publications" },
    ...sortedKeys.map(key => ({ value: key as LabKey | "all", label: LAB_NAMES[key][locale] })),
  ];

  const activeLabel = allOptions.find(o => o.value === activeTab)?.label ?? "";

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>TDML</span>
          <h1>{content.title}</h1>
          <p>
            {locale === "tr"
              ? "Termodinamik ve Dinamik Metroloji Laboratuvarları'nın uluslararası hakemli dergilerde yayımlanmış bilimsel çalışmaları."
              : "Peer-reviewed scientific publications from the Thermodynamic and Dynamic Metrology Laboratories."}
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className={styles.statsStrip}>
        <div className={styles.statsInner}>
          <strong>{displayedCount}</strong>
          {locale === "tr" ? "yayın listelendi" : "publications listed"}
          <span style={{ opacity: 0.3, margin: "0 0.25rem" }}>·</span>
          {locale === "tr" ? "En yeniden eskiye sıralanmış" : "Sorted newest first"}
        </div>
      </div>

      {/* CUSTOM FILTER DROPDOWN */}
      <div className={styles.filterBar}>
        <label className={styles.filterLabel}>
          {locale === "tr" ? "Laboratuvara Göre Filtrele:" : "Filter by Laboratory:"}
        </label>

        <div className={styles.customDropdown} ref={dropdownRef}>
          {/* Trigger button */}
          <button
            className={`${styles.dropdownTrigger} ${dropdownOpen ? styles.dropdownTriggerOpen : ""}`}
            onClick={() => setDropdownOpen(v => !v)}
            type="button"
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
          >
            <span className={styles.dropdownTriggerDot} />
            <span className={styles.dropdownTriggerLabel}>{activeLabel}</span>
            <svg
              className={`${styles.dropdownChevron} ${dropdownOpen ? styles.dropdownChevronOpen : ""}`}
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Options menu */}
          {dropdownOpen && (
            <ul
              className={styles.dropdownMenu}
              role="listbox"
              aria-label={locale === "tr" ? "Laboratuvar filtresi" : "Laboratory filter"}
            >
              {allOptions.map(opt => {
                const isActive = activeTab === opt.value;
                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isActive}
                    className={`${styles.dropdownItem} ${isActive ? styles.dropdownItemActive : ""}`}
                    onClick={() => { setActiveTab(opt.value); setDropdownOpen(false); }}
                  >
                    <span className={styles.dropdownItemCheck}>
                      {isActive && (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </span>
                    {opt.label}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      {/* LIST (GROUPED BY LAB) */}
      <main className={styles.publicationsWrapper}>
        {sortedKeys
          .filter(labKey => activeTab === "all" || activeTab === labKey)
          .map((labKey) => {
            const pubs = groupedPubs[labKey];

            return (
              <div key={labKey} className={styles.labSection}>
                <div className={styles.labSectionHeader}>
                  <h2 className={styles.labSectionTitle}>{LAB_NAMES[labKey][locale]}</h2>
                </div>

                {pubs && pubs.length > 0 ? (
                  <div className={styles.labPubsGrid}>
                    {pubs.map((pub) => (
                      <PublicationCard
                        key={pub.id}
                        day={pub.day}
                        month={pub.month}
                        year={pub.year}
                        title={pub.title}
                        description={pub.description}
                        href={pub.href}
                        locale={locale}
                        journal={pub.journal}
                      />
                    ))}
                  </div>
                ) : (
                  <div className={styles.emptyState}>
                    {locale === "tr" ? "Bu laboratuvara ait yayın bulunmamaktadır." : "No publications listed for this laboratory yet."}
                  </div>
                )}
              </div>
            );
          })}
      </main>
    </>
  );
}