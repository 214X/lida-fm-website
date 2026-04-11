"use client";

import { useState } from "react";
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

  // Group by lab
  const groupedPubs: Partial<Record<LabKey, Publication[]>> = {};
  publicationsData.forEach(pub => {
      // Default to lazer if labKey is unset
      const key = pub.labKey || "lazer";
      if (!groupedPubs[key]) groupedPubs[key] = [];
      groupedPubs[key].push(pub);
  });

  const sortedKeys: LabKey[] = ["lazer", "humidity", "radiation", "thermophysical"];

  // Calculate displayed count dynamically based on the active tab
  const displayedCount = activeTab === "all" 
    ? publicationsData.length 
    : (groupedPubs[activeTab]?.length || 0);

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

      {/* FILTER DROPDOWN */}
      <div className={styles.dropdownContainer}>
        <label className={styles.filterLabel} htmlFor="lab-filter">
          {locale === "tr" ? "Laboratuvara Göre Filtrele:" : "Filter by Laboratory:"}
        </label>
        <div className={styles.selectWrapper}>
            <select 
              id="lab-filter"
              className={styles.selectUI}
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as LabKey | "all")}
            >
              <option value="all">{locale === "tr" ? "Tüm Yayınlar" : "All Publications"}</option>
              {sortedKeys.map(key => (
                <option key={key} value={key}>
                  {LAB_NAMES[key][locale]}
                </option>
              ))}
            </select>
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