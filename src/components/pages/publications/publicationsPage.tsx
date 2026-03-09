import { Locale } from "@/types/locale";
import { publicationsContent } from "./publicationsContent";
import styles from "./PublicationsStyles.module.css";
import PublicationCard from "./components/publication";
import { publicationsData } from "@/data/publications";

type PublicationsPageProps = {
  locale: Locale;
};

export default function PublicationsPage({ locale }: PublicationsPageProps) {
  const content = publicationsContent[locale];

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
          <strong>{publicationsData.length}</strong>
          {locale === "tr" ? "yayın listelendi" : "publications listed"}
          <span style={{ opacity: 0.3, margin: "0 0.25rem" }}>·</span>
          {locale === "tr" ? "En yeniden eskiye sıralanmış" : "Sorted newest first"}
        </div>
      </div>

      {/* LIST */}
      <main className={styles.publicationsWrapper}>
        {publicationsData.map((pub) => (
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
      </main>
    </>
  );
}