import styles from "../PublicationsStyles.module.css";
import { Locale } from "@/types/locale";

type PublicationCardProps = {
    day: number;
    month: number;
    year: number;
    title: string;
    description: string;
    href: string;
    locale: Locale;
};

export default function PublicationCard({
    day,
    month,
    year,
    title,
    description,
    href,
    locale,
}: PublicationCardProps) {
    const monthName = getMonthName(month, locale);
    const linkLabel =
        locale === "tr" ? "Detayları Gör →" : "Show more →";

    const isoDate = `${year}-${String(month).padStart(2, "0")}-${String(
        day
    ).padStart(2, "0")}`;

    return (
        <article className={styles.pubCard}>
        {/* DATE */}
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
            <h3 className={styles.pubTitle}>{title}</h3>

            <p className={styles.pubDescription}>
            {description}
            </p>

            <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pubLink}
            >
            {linkLabel}
            </a>
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