import styles from "../PublicationsStyles.module.css";
import { Locale } from "@/types/locale";
import { ArrowUpRight } from "lucide-react";
import { PublicationType } from "@/data/publications";

type PublicationCardProps = {
    day: number;
    month: number;
    year: number;
    title: string;
    contributors: string;
    type: PublicationType;
    description: string;
    href: string;
    locale: Locale;
    language: "en" | "tr";

};

export default function PublicationCard({
    day,
    month,
    year,
    title,
    contributors,
    type,
    description,
    href,
    locale,
    language,

}: PublicationCardProps) {
    const monthName = getMonthName(month, locale);
    const linkLabel = locale === "tr"
        ? (type === "article" ? "Makaleyi Görüntüle" : "Bildiriyi Görüntüle")
        : (type === "article" ? "View Article" : "Read Conference Paper");

    // Category labels in English as per request
    const typeLabel = type === "article" ? "Article" : "Conference Paper";

    const isoDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    return (
        <article className={styles.pubCard}>
            {/* DATE SIDEBAR */}
            <div className={styles.pubDateBox}>
                <time dateTime={isoDate}>
                    <div className={styles.dayMonthWrapper}>
                        <div className={styles.pubDay}>{day}</div>
                        <div className={styles.pubMonth}>{monthName}</div>
                    </div>
                    <div className={styles.pubYear}>{year}</div>
                </time>
            </div>

            {/* CONTENT */}
            <div className={styles.pubContent}>
                <div className={styles.pubMeta}>
                    <span className={styles.pubBadge}>{typeLabel}</span>
                    <span className={styles.pubBadge}>
                        {language === "en"
                            ? (locale === "tr" ? "İngilizce" : "English")
                            : (locale === "tr" ? "Türkçe" : "Turkish")}
                    </span>
                </div>

                <h3 className={styles.pubTitle}>{title}</h3>
                <div className={styles.pubContributors}>{contributors}</div>

                <p className={styles.pubDescription}>{description}</p>

                {href && (
                    <div className={styles.pubFooter}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.pubLink}
                        >
                            {linkLabel}
                            <ArrowUpRight size={15} strokeWidth={2} />
                        </a>
                    </div>
                )}
            </div>
        </article>
    );
}

// util for number to month convention
function getMonthName(month: number, locale: "tr" | "en") {
    const date = new Date(2024, month - 1, 1);
    return date.toLocaleString(locale === "tr" ? "tr-TR" : "en-US", {
        month: "long",
    }).toUpperCase();
}