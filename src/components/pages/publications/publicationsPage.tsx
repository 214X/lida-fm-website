import { Locale } from "@/types/locale";
import { publicationsContent } from "./publicationsContent";
import styles from "./PublicationsStyles.module.css";
import PublicationCard from "./components/publication";

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
          <strong>5</strong>
          {locale === "tr" ? "yayın listelendi" : "publications listed"}
          <span style={{ opacity: 0.3, margin: "0 0.25rem" }}>·</span>
          {locale === "tr" ? "En yeniden eskiye sıralanmış" : "Sorted newest first"}
        </div>
      </div>

      {/* LIST */}
      <main className={styles.publicationsWrapper}>

        <PublicationCard
          day={24} month={12} year={2024}
          title="Nodular-defect induced degradation of laser damage resistance of 532 nm high reflectivity coating after exposure to gamma rays"
          description="The coupling effect of gamma-ray radiation and 532 nm nanosecond laser radiation on optical coatings and substrates was investigated. Fused silica and S-BSL7 glass with 532 nm high reflectivity (HR) coatings were irradiated using 60Co gamma-ray source at a dose rate of 1 Gy/s for a total dose of 1–500 kGy..."
          href="https://opg.optica.org/oe/fulltext.cfm?uri=oe-32-27-49021&id=566348"
          locale={locale}
          journal="Optics Express"
        />

        <PublicationCard
          day={1} month={3} year={2024}
          title="Nanosecond laser damage of 532 nm thin film polarizers evaluated by different testing protocols"
          description="Different laser damage testing protocols, including 1-on-1, S-on-1, and Raster Scan, were conducted on 532 nm polarizers to evaluate the damage resistance and mechanisms..."
          href="https://www.sciencedirect.com/science/article/pii/S0925346724003070"
          locale={locale}
          journal="Optics & Laser Technology"
        />

        <PublicationCard
          day={25} month={12} year={2023}
          title="Nodular defects induced laser damage of 532 nm thin-film polarizers"
          description="The laser damage characteristics of the thin-film polarizers for the wavelength of 532 nm and AOI of 56° were investigated using a Nd:YAG laser system..."
          href="https://www.sciencedirect.com/science/article/pii/S0925346724003070"
          locale={locale}
          journal="Optics & Laser Technology"
        />

        <PublicationCard
          day={24} month={8} year={2023}
          title="A Laser Damage Threshold for Microscope Glass Slides"
          description="Laser-induced damage to optical components is a limitation for designing highly sensitive biosensors. This study investigated the laser-induced damage threshold (LIDT) of high-quality microscope glass slides..."
          href="https://www.mdpi.com/2304-6732/10/9/967"
          locale={locale}
          journal="Photonics (MDPI)"
        />

        <PublicationCard
          day={19} month={5} year={2023}
          title="A Multiwavelength Vacuum Environment Laser Calorimetry System"
          description="In the current work, we describe a process of optimizing a laser calorimeter system to characterize the thermal performance of optical glasses and thin films in a vacuum environment..."
          href="https://www.researchgate.net/publication/374750527_A_Multiwavelength_Vacuum_Environment_Laser_Calorimetry_System"
          locale={locale}
          journal="ResearchGate"
        />

      </main>
    </>
  );
}