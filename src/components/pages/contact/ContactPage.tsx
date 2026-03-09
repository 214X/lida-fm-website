import { Locale } from "@/types/locale";
import { ContactContent } from "./contactContent";
import styles from "./contactPage.module.css";
import { Mail, MapPin, Phone, Printer, User } from "lucide-react";
import Link from "next/link";

type ContactPageProps = {
    locale: Locale;
};

export default function ContactPage({ locale }: ContactPageProps) {
    const c = ContactContent[locale];

    return (
        <>
            {/* ─── HERO ─── */}
            <section className={styles.hero}>
                <div className={styles.overlay} />
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>{c.badge}</span>
                    <h1>{c.title}</h1>
                    <p>{c.heroText}</p>
                </div>
            </section>

            {/* ─── MAIN CONTENT ─── */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>

                        {/* LEFT – Info & Cards */}
                        <div className={styles.infoColumn}>
                            <p className={styles.infoTitle}>{c.infoTitle}</p>
                            <h2 className={styles.infoHeading}>
                                {c.infoHeading.split("\n").map((line, i) => (
                                    <span key={i}>{line}<br /></span>
                                ))}
                            </h2>
                            <p className={styles.infoText}>{c.infoText}</p>

                            {/* Lab email card */}
                            <div className={styles.cards}>
                                {c.cards.map((card, i) => (
                                    <div key={i} className={styles.card}>
                                        <div className={styles.cardIcon}>
                                            <Mail size={20} strokeWidth={1.8} />
                                        </div>
                                        <div className={styles.cardBody}>
                                            <span className={styles.cardLabel}>{card.label}</span>
                                            {card.href ? (
                                                <a href={card.href} className={styles.cardValueLink}>
                                                    {card.value}
                                                </a>
                                            ) : (
                                                <span className={styles.cardValue}>{card.value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Person card */}
                            <div className={styles.personCard}>
                                <div className={styles.personHeader}>
                                    <div className={styles.personAvatar}>
                                        <User size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className={styles.personLabel}>{c.personLabel}</p>
                                        <h3 className={styles.personName}>{c.person.name}</h3>
                                        <p className={styles.personTitle}>{c.person.title}</p>
                                    </div>
                                </div>
                                <div className={styles.personMeta}>
                                    <Link href={`tel:${c.person.phone.replace(/\s/g, "")}`} className={styles.personRow}>
                                        <Phone size={15} strokeWidth={1.8} />
                                        <span>{c.person.phone}</span>
                                    </Link>
                                    <div className={styles.personRow}>
                                        <Printer size={15} strokeWidth={1.8} />
                                        <span>{c.person.fax}</span>
                                    </div>
                                    <Link href={`mailto:${c.person.email}`} className={`${styles.personRow} ${styles.personEmail}`}>
                                        <Mail size={15} strokeWidth={1.8} />
                                        <span>{c.person.email}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT – Org card */}
                        <div className={styles.visualColumn}>
                            <div className={styles.mapCard}>
                                {/* Google Maps iframe */}
                                <div className={styles.mapFrame}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.3!2d29.4435!3d40.7972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac2a02c77d3f9%3A0xe02451a2d4a79c6!2sTÜBİTAK%20UME!5e0!3m2!1str!2str!4v1699999999999!5m2!1str!2str"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="TÜBİTAK UME Konum"
                                    />
                                </div>

                                <div className={styles.orgDetails}>
                                    <p className={styles.orgName}>{c.orgName}</p>
                                    <div className={styles.orgMeta}>
                                        <div className={styles.orgRow}>
                                            <MapPin size={16} strokeWidth={1.8} />
                                            <span>{c.orgAddress}<br />{c.orgCity}</span>
                                        </div>
                                        <div className={styles.orgRow}>
                                            <Mail size={16} strokeWidth={1.8} />
                                            <span>lidtume@gmail.com</span>
                                        </div>
                                        <div className={styles.orgRow}>
                                            <Phone size={16} strokeWidth={1.8} />
                                            <span>+90 262 679 5000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}